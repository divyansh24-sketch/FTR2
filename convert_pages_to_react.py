import os
import re

SOURCE_DIR = "/Users/divyansh/.gemini/antigravity/scratch/bentro-replica"
REACT_PAGES = "/Users/divyansh/.gemini/antigravity/scratch/bentro-react/src/pages"

os.makedirs(REACT_PAGES, exist_ok=True)

pages_map = {
    'about.html': 'AboutPage',
    'works.html': 'WorksPage',
    'service.html': 'ServicesPage',
    'pricing.html': 'PricingPage',
    'blog.html': 'BlogPage',
    'contact.html': 'ContactPage'
}

def clean_to_jsx(raw):
    raw = re.sub(r'<noscript>.*?</noscript>', '', raw, flags=re.DOTALL)
    raw = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', raw)
    raw = re.sub(r'\bclass=', 'className=', raw)
    raw = re.sub(r'\bfor=', 'htmlFor=', raw)
    raw = re.sub(r'\btabindex=', 'tabIndex=', raw)
    raw = re.sub(r'\bautoplay(?:=\"\")?', 'autoPlay', raw)
    raw = re.sub(r'\bplaysinline(?:=\"\")?', 'playsInline', raw)
    raw = re.sub(r'\bmuted(?:=\"\")?', 'muted', raw)
    raw = re.sub(r'\bloop(?:=\"\")?', 'loop', raw)

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

    def style_repl(match):
        s = match.group(1).replace('&quot;', '"')
        rules = [r.strip() for r in s.split(';') if r.strip()]
        props = []
        for r in rules:
            if ':' not in r:
                continue
            k, v = r.split(':', 1)
            k = k.strip()
            v = v.strip().replace('"', '\\"')
            camel_k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            props.append(f"'{camel_k}': '{v}'")
        return 'style={{ ' + ', '.join(props) + ' }}'
    raw = re.sub(r'style=[\"\']([^\"\']+)[\"\']', style_repl, raw)

    void_tags = ['img', 'input', 'source', 'br', 'hr', 'rect', 'circle', 'path', 'polygon', 'line', 'ellipse']
    for vt in void_tags:
        raw = re.sub(rf'(<{vt}\b[^>]*?)(?<!/)>', r'\1 />', raw)

    raw = re.sub(r'/>\s*</(path|circle|rect|line|polygon|ellipse|source|img|input|br|hr)>', '/>', raw)
    raw = raw.replace('&nbsp;', ' ')

    # Assets
    def src_repl(match):
        u = match.group(1)
        base = os.path.basename(u.split('?')[0])
        sanitized = re.sub(r'[^a-zA-Z0-9_\.-]', '_', base)
        if sanitized.endswith(('.mp4', '.webm')):
            return f'src="/assets/videos/{sanitized}"'
        return f'src="/assets/images/{sanitized}"'
    raw = re.sub(r'src=[\"\'](?:assets/(?:images|videos)/|https://cdn\.prod\.website-files\.com/[^\"\']+/)?([^\"\']+\.(?:png|jpg|jpeg|webp|avif|svg|mp4|webm))[\"\']', src_repl, raw)

    # srcset
    def srcset_repl(match):
        s = match.group(1)
        parts = []
        for p in s.split(','):
            item = p.strip().split()
            if not item:
                continue
            u = item[0]
            b = os.path.basename(u.split('?')[0])
            sanitized = re.sub(r'[^a-zA-Z0-9_\.-]', '_', b)
            desc = " " + item[1] if len(item) > 1 else ""
            parts.append(f"/assets/images/{sanitized}{desc}")
        return f'srcSet="{", ".join(parts)}"'
    raw = re.sub(r'srcset=[\"\']([^\"\']+)[\"\']', srcset_repl, raw)

    # data-poster-url
    def poster_repl(match):
        u = match.group(1)
        base = os.path.basename(u.split('?')[0])
        sanitized = re.sub(r'[^a-zA-Z0-9_\.-]', '_', base)
        return f'data-poster-url="/assets/images/{sanitized}"'
    raw = re.sub(r'data-poster-url=[\"\']([^\"\']+)[\"\']', poster_repl, raw)

    # data-video-urls
    def vid_repl(match):
        urls = []
        for u in match.group(1).split(','):
            b = os.path.basename(u.strip().split('?')[0])
            s = re.sub(r'[^a-zA-Z0-9_\.-]', '_', b)
            urls.append(f"/assets/videos/{s}")
        return f'data-video-urls="{",".join(urls)}"'
    raw = re.sub(r'data-video-urls=[\"\']([^\"\']+)[\"\']', vid_repl, raw)

    # background-image
    def bg_style_repl(match):
        u = match.group(1)
        base = os.path.basename(u.split('?')[0])
        sanitized = re.sub(r'[^a-zA-Z0-9_\.-]', '_', base)
        return f'style={{{{ backgroundImage: "url(/assets/images/{sanitized})" }}}}'
    raw = re.sub(r'style=\{\{\s*[\'\"]backgroundImage[\'\"]\s*:\s*[\'\"]url\(&quot;([^&]+)&quot;\)[\'\"]\s*\}\}', bg_style_repl, raw)
    raw = re.sub(r'style=\{\{\s*[\'\"]backgroundImage[\'\"]\s*:\s*[\'\"]url\(\\\"([^\\]+)\\\"\)[\'\"]\s*\}\}', bg_style_repl, raw)

    # Link routing
    raw = re.sub(r'href=[\"\'](?:index\.html|/)[\"\']', 'href="/" onClick={(e) => { e.preventDefault(); navigate("home"); }}', raw)
    raw = re.sub(r'href=[\"\'](?:about\.html|/about)[\"\']', 'href="/about" onClick={(e) => { e.preventDefault(); navigate("about"); }}', raw)
    raw = re.sub(r'href=[\"\'](?:works\.html|/works)[\"\']', 'href="/works" onClick={(e) => { e.preventDefault(); navigate("works"); }}', raw)
    raw = re.sub(r'href=[\"\'](?:service\.html|/service)[\"\']', 'href="/service" onClick={(e) => { e.preventDefault(); navigate("service"); }}', raw)
    raw = re.sub(r'href=[\"\'](?:pricing\.html|/pricing)[\"\']', 'href="/pricing" onClick={(e) => { e.preventDefault(); navigate("pricing"); }}', raw)
    raw = re.sub(r'href=[\"\'](?:blog\.html|/blog)[\"\']', 'href="/blog" onClick={(e) => { e.preventDefault(); navigate("blog"); }}', raw)
    raw = re.sub(r'href=[\"\'](?:contact\.html|/contact)[\"\']', 'href="/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}', raw)

    return raw

for filename, comp_name in pages_map.items():
    p = os.path.join(SOURCE_DIR, filename)
    with open(p, "r", encoding="utf-8") as f:
        html = f.read()

    m = re.search(r'<main\b[^>]*>.*?</main>', html, re.DOTALL)
    if not m:
        print(f"Skipping {filename}: main not matched")
        continue

    content = clean_to_jsx(m.group(0))
    code = f"""import React, {{ useState }} from 'react';
import {{ useNavigation }} from '../context/NavigationContext';

export default function {comp_name}() {{
  const {{ navigate }} = useNavigation();

  return (
    {content}
  );
}}
"""
    dest = os.path.join(REACT_PAGES, f"{comp_name}.jsx")
    with open(dest, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Generated {comp_name}.jsx")

print("Page generation complete!")
