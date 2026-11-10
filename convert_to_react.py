import re
import os

SOURCE_HTML = "/tmp/bentro.html"
REACT_SRC = "/Users/divyansh/.gemini/antigravity/scratch/bentro-react/src"
COMPONENTS_DIR = os.path.join(REACT_SRC, "components")
PAGES_DIR = os.path.join(REACT_SRC, "pages")

os.makedirs(COMPONENTS_DIR, exist_ok=True)
os.makedirs(PAGES_DIR, exist_ok=True)

with open(SOURCE_HTML, "r", encoding="utf-8") as f:
    html = f.read()

def clean_to_jsx(raw):
    # Comments
    raw = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', raw)
    # class -> className
    raw = re.sub(r'\bclass=', 'className=', raw)
    # for -> htmlFor
    raw = re.sub(r'\bfor=', 'htmlFor=', raw)
    # tabindex -> tabIndex
    raw = re.sub(r'\btabindex=', 'tabIndex=', raw)
    # autoplay -> autoPlay
    raw = re.sub(r'\bautoplay(?:=\"\")?', 'autoPlay', raw)
    # playsinline -> playsInline
    raw = re.sub(r'\bplaysinline(?:=\"\")?', 'playsInline', raw)
    # muted -> muted
    raw = re.sub(r'\bmuted(?:=\"\")?', 'muted', raw)
    # loop -> loop
    raw = re.sub(r'\bloop(?:=\"\")?', 'loop', raw)

    # svg attributes
    svg_attrs = {
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'stroke-miterlimit': 'strokeMiterlimit',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'clip-path': 'clipPath',
        'xmlns:xlink': 'xmlnsXlink',
        'xlink:href': 'xlinkHref'
    }
    for old_a, new_a in svg_attrs.items():
        raw = re.sub(rf'\b{old_a}=', f'{new_a}=', raw)

    # style="..." convert to style={{...}}
    def style_repl(match):
        s = match.group(1)
        # Handle style="background-image:url(&quot;...&quot;)"
        s = s.replace('&quot;', '"')
        rules = [r.strip() for r in s.split(';') if r.strip()]
        props = []
        for r in rules:
            if ':' not in r:
                continue
            k, v = r.split(':', 1)
            k = k.strip()
            v = v.strip().replace('"', '\\"')
            # camelCase key
            camel_k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            props.append(f"'{camel_k}': '{v}'")
        return 'style={{ ' + ', '.join(props) + ' }}'
    raw = re.sub(r'style=[\"\']([^\"\']+)[\"\']', style_repl, raw)

    # Self-closing tags
    void_tags = ['img', 'input', 'source', 'br', 'hr', 'rect', 'circle', 'path', 'polygon', 'line', 'ellipse']
    for vt in void_tags:
        raw = re.sub(rf'(<{vt}\b[^>]*?)(?<!/)>', r'\1 />', raw)

    # Clean up duplicate closing tags if previously closed
    raw = re.sub(r'/>\s*</(path|circle|rect|line|polygon|ellipse|source|img|input|br|hr)>', '/>', raw)
    raw = raw.replace('&nbsp;', ' ')

    # Remove <noscript> blocks since React is client-side JS
    raw = re.sub(r'<noscript>.*?</noscript>', '', raw, flags=re.DOTALL)

    # Assets path
    def src_repl(match):
        u = match.group(1)
        base = os.path.basename(u.split('?')[0])
        sanitized = re.sub(r'[^a-zA-Z0-9_\.-]', '_', base)
        if sanitized.endswith(('.mp4', '.webm')):
            return f'src="/assets/videos/{sanitized}"'
        return f'src="/assets/images/{sanitized}"'
    raw = re.sub(r'src=[\"\'](https://cdn\.prod\.website-files\.com/[^\"\']+)[\"\']', src_repl, raw)
    
    # Replace srcset with /assets/images/...
    def srcset_repl(match):
        s = match.group(1)
        parts = []
        for p in s.split(','):
            item = p.strip().split()
            if not item:
                continue
            u = item[0]
            base = os.path.basename(u.split('?')[0])
            desc = " " + item[1] if len(item) > 1 else ""
            parts.append(f"/assets/images/{base}{desc}")
        return f'srcSet="{", ".join(parts)}"'
    raw = re.sub(r'srcset=[\"\']([^\"\']+)[\"\']', srcset_repl, raw)

    # Replace data-poster-url
    def poster_repl(match):
        u = match.group(1)
        base = os.path.basename(u.split('?')[0])
        sanitized = re.sub(r'[^a-zA-Z0-9_\.-]', '_', base)
        return f'data-poster-url="/assets/images/{sanitized}"'
    raw = re.sub(r'data-poster-url=[\"\']([^\"\']+)[\"\']', poster_repl, raw)

    # Replace data-video-urls
    def vid_repl(match):
        urls = []
        for u in match.group(1).split(','):
            b = os.path.basename(u.strip().split('?')[0])
            s = re.sub(r'[^a-zA-Z0-9_\.-]', '_', b)
            urls.append(f"/assets/videos/{s}")
        return f'data-video-urls="{",".join(urls)}"'
    raw = re.sub(r'data-video-urls=[\"\']([^\"\']+)[\"\']', vid_repl, raw)

    # Background-image in style
    def bg_style_repl(match):
        u = match.group(1)
        base = os.path.basename(u.split('?')[0])
        sanitized = re.sub(r'[^a-zA-Z0-9_\.-]', '_', base)
        return f'style={{{{ backgroundImage: "url(/assets/images/{sanitized})" }}}}'
    raw = re.sub(r'style=\{\{\s*[\'\"]backgroundImage[\'\"]\s*:\s*[\'\"]url\(&quot;([^&]+)&quot;\)[\'\"]\s*\}\}', bg_style_repl, raw)
    raw = re.sub(r'style=\{\{\s*[\'\"]backgroundImage[\'\"]\s*:\s*[\'\"]url\(\\\"([^\\]+)\\\"\)[\'\"]\s*\}\}', bg_style_repl, raw)

    # href routing for links
    raw = re.sub(r'href=[\"\']/about[\"\']', 'href="/about" onClick={(e) => { e.preventDefault(); navigate("about"); }}', raw)
    raw = re.sub(r'href=[\"\']/works[\"\']', 'href="/works" onClick={(e) => { e.preventDefault(); navigate("works"); }}', raw)
    raw = re.sub(r'href=[\"\']/service[\"\']', 'href="/service" onClick={(e) => { e.preventDefault(); navigate("service"); }}', raw)
    raw = re.sub(r'href=[\"\']/pricing[\"\']', 'href="/pricing" onClick={(e) => { e.preventDefault(); navigate("pricing"); }}', raw)
    raw = re.sub(r'href=[\"\']/blog[\"\']', 'href="/blog" onClick={(e) => { e.preventDefault(); navigate("blog"); }}', raw)
    raw = re.sub(r'href=[\"\']/contact[\"\']', 'href="/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}', raw)
    raw = re.sub(r'href=[\"\']/style-guide[\"\']', 'href="/style-guide" onClick={(e) => { e.preventDefault(); navigate("style-guide"); }}', raw)
    raw = re.sub(r'href=[\"\']/licenses[\"\']', 'href="/licenses" onClick={(e) => { e.preventDefault(); navigate("licenses"); }}', raw)
    raw = re.sub(r'href=[\"\']/changelog[\"\']', 'href="/changelog" onClick={(e) => { e.preventDefault(); navigate("changelog"); }}', raw)
    raw = re.sub(r'href=[\"\']/work/([^\"\']+)[\"\']', r'href="/work/\1" onClick={(e) => { e.preventDefault(); navigate("work-detail", "\1"); }}', raw)
    raw = re.sub(r'href=[\"\']/post/([^\"\']+)[\"\']', r'href="/post/\1" onClick={(e) => { e.preventDefault(); navigate("post-detail", "\1"); }}', raw)

    return raw

sections = [m.group(0) for m in re.finditer(r'<section\b[^>]*>.*?</section>', html, re.DOTALL)]
footer_match = re.search(r'<footer\b[^>]*>.*?</footer>', html, re.DOTALL)

component_names = [
    "HeroSection",
    "ClientsSection",
    "WorksSection",
    "ServicesSection",
    "AccentSection",
    "StatsSection",
    "TestimonialsSection",
    "PricingSection",
    "BlogSection",
    "FAQSection"
]

for i, raw_sec in enumerate(sections):
    if i >= len(component_names):
        break
    comp_name = component_names[i]
    jsx_content = clean_to_jsx(raw_sec)
    code = f"""import React, {{ useState }} from 'react';
import {{ useNavigation }} from '../context/NavigationContext';

export default function {comp_name}() {{
  const {{ navigate }} = useNavigation();
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    {jsx_content}
  );
}}
"""
    comp_path = os.path.join(COMPONENTS_DIR, f"{comp_name}.jsx")
    with open(comp_path, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Generated {comp_name}.jsx")

if footer_match:
    footer_jsx = clean_to_jsx(footer_match.group(0))
    footer_code = f"""import React, {{ useState }} from 'react';
import {{ useNavigation }} from '../context/NavigationContext';

export default function Footer() {{
  const {{ navigate }} = useNavigation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {{
    e.preventDefault();
    if (email) {{
      setSubscribed(true);
      setEmail('');
    }}
  }};

  return (
    {footer_jsx}
  );
}}
"""
    footer_path = os.path.join(COMPONENTS_DIR, "Footer.jsx")
    with open(footer_path, "w", encoding="utf-8") as f:
        f.write(footer_code)
    print("Generated Footer.jsx")

print("All components generated successfully!")
