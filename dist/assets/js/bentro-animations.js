/* BENTRO GSAP ANIMATIONS ENGINE */
(function() {
  if (typeof window === "undefined") return;

  function initPlugins() {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch(e) {}
    }
  }
  initPlugins();

/* BENTRO GSAP ANIMATIONS - Site Settings > Custom Code > Footer code. Uses the GSAP + ScrollTrigger files Webflow loads on every page. */
/* INTRO - Home hero entrance: wordmark and mountain climb, nav and tagline rise, slider cards fade up */
var INTRO = { section: ".rt-banner", title: ".rt-banner-title", tagline: ".rt-banner .rt-container > .rt-text-center",
navItems: "header.rt-navbar .rt-navbar-logo, header.rt-navbar .rt-navbar-contact > *, header.rt-navbar .rt-navbar-call",
menu: "header.rt-navbar .rt-navbar-actions > .rt-navbar-menu", mountain: ".rt-banner-mountain", slider: ".rt-banner-slider > :not(.rt-banner-aside), .rt-banner-aside > *",
foot: ".rt-banner .rt-container > .rt-subtext", desktop: "(min-width: 992px)",
cards: ".rt-banner-slider > .rt-banner-pair, .rt-banner-slider > .rt-banner-card, .rt-banner-aside > .rt-banner-pair",
low: 0.24, climb: 3.2, mountainPercent: -19 };
var introHasRun = false;
function bentroIntro(force) {
if (typeof gsap === "undefined") return;
if ((introHasRun || window.__BENTRO_INTRO_RUN__) && !force) return;
introHasRun = true;
window.__BENTRO_INTRO_RUN__ = true;
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !document.querySelector(INTRO.section + " " + INTRO.title)) return;
var low = window.innerHeight * INTRO.low, P = INTRO.mountainPercent;
var cards = window.matchMedia(INTRO.desktop).matches ? gsap.utils.toArray(INTRO.cards) : [];
var slider = gsap.utils.toArray(INTRO.slider).filter(function (el) { return cards.indexOf(el) < 0; });
var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.set(INTRO.title, { overflow: "hidden" }, 0)
.set(cards, { opacity: 0 }, 0)
.fromTo(INTRO.title, { y: low }, { y: 0, duration: INTRO.climb, ease: "power1.out", clearProps: "transform" }, 0.15)
.fromTo(INTRO.title + " > *", { yPercent: 105 }, { yPercent: 0, duration: 1.3, ease: "expo.out", clearProps: "transform" }, 0.15)
.fromTo(INTRO.mountain, { yPercent: P, y: low + window.innerHeight * 0.15, opacity: 0 }, { yPercent: P, y: 0, opacity: 1, duration: INTRO.climb + 0.2, ease: "power1.out", clearProps: "transform,opacity" }, 0.1)
.fromTo([INTRO.navItems, INTRO.tagline].join(", "), { yPercent: 100, clipPath: "inset(0% 0% 100% 0%)" }, { yPercent: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, stagger: 0.08, clearProps: "transform,clipPath" }, 1)
.from(INTRO.menu, { borderColor: "rgba(255, 255, 255, 0)", duration: 1.1, ease: "power2.inOut", clearProps: "borderColor" }, 1.05)
.fromTo(INTRO.menu + " > *", { yPercent: 100, clipPath: "inset(0% 0% 100% 0%)" }, { yPercent: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, clearProps: "transform,clipPath" }, 1.55)
.fromTo(slider, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.14, clearProps: "transform,opacity" }, 2.7)
.fromTo(INTRO.foot, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, clearProps: "transform,opacity" }, 3.1)
.set(INTRO.title, { clearProps: "overflow" });
}
/* BANNER PHOTOS - page banner photos clip up from the bottom one after another while the image settles from a zoom */
var PHOTOS = { wrap: ".rt-page-banner-media", start: "top 90%", duration: 1.4, stagger: 0.15, zoom: 1.25 };
function bentroBannerPhotos() {
if (typeof gsap === "undefined") return;
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
document.querySelectorAll(PHOTOS.wrap).forEach(function (wrap) {
var cards = gsap.utils.toArray(wrap.children).filter(function (el) { return el.getClientRects().length > 0; });
if (!cards.length) return;
var pics = cards.map(function (c) { return c.querySelector("img"); }).filter(Boolean);
gsap.timeline({ scrollTrigger: { trigger: wrap, start: PHOTOS.start, once: true } })
.fromTo(cards, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: PHOTOS.duration, stagger: PHOTOS.stagger, ease: "expo.inOut", clearProps: "clipPath" }, 0)
.fromTo(pics, { scale: PHOTOS.zoom }, { scale: 1, duration: PHOTOS.duration + 0.4, stagger: PHOTOS.stagger, ease: "expo.out", clearProps: "transform" }, 0);
});
}


function bentroInit() {
if (typeof gsap === "undefined") return;
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var canHover = window.matchMedia("(hover: hover)").matches;
var hasST = typeof ScrollTrigger !== "undefined";
if (hasST) gsap.registerPlugin(ScrollTrigger);
/* 0. SOLID ON SCROLL */
document.querySelectorAll(".rt-navbar-bar").forEach(function (h) {
if (!/transparent|, 0\)$/.test(getComputedStyle(h).backgroundColor)) return;
var solid = getComputedStyle(document.documentElement).getPropertyValue("--neutral-color--neutral-700").trim() || "#111", on = null;
function check() {
var s = window.scrollY > h.offsetHeight;
if (s === on) return;
on = s;
gsap.to(h, { backgroundColor: s ? solid : "rgba(17, 17, 17, 0)", duration: 0.35, ease: "power2.out", overwrite: true });
}
window.addEventListener("scroll", check, { passive: true });
check();
});
/* ---------- SETTINGS ---------- */
var HOVER_ZOOM = { selector: ".rt-work-card, .rt-post-card, .rt-split-wide", scale: 1.07, duration: 2, ease: "expo.out" };
var MARQUEE = { stopDuration: 0.6, rows: [
{ selector: ".rt-testimonial-grid", axis: "x", speed: 45, itemWidth: "min(var(--_layout---grid--col-six), 75vw)", hoverStop: true, label: "Client testimonials (auto-scrolling, pauses on hover or focus)" },
{ selector: ".rt-logo-track", axis: "x", speed: 40, align: "center" },
{ selector: ".rt-value-grid", axis: "x", speed: 80, itemWidth: "min(var(--_layout---grid--col-four), 85vw)", align: "stretch" },
{ selector: ".rt-show-grid > :nth-child(odd)", axis: "y", speed: 50, fillStatic: true, media: "(max-width: 991px)" },
{ selector: ".rt-show-grid > :nth-child(even)", axis: "y", speed: 50, reverse: true, fillStatic: true, media: "(max-width: 991px)" }
] };
var SCROLL_TEXT = { selector: "[data-scroll-text]", fromColorVar: "--neutral-color--neutral-200", start: "top 85%", end: "bottom 40%" };
var COUNTER = { selector: "[data-counter]", duration: 2.2, start: "top 90%" };
var HEADING_REVEAL = { selector: "section h2, [data-word-reveal]", y: 40, blur: 10, duration: 1.1, stagger: 0.06, start: "top 85%" };
var FADE_UP = { selector: ".rt-label-text, .rt-work-card, .rt-horizontal-between, .rt-card-bottom, .rt-link-underline, .rt-clients-logos, .rt-counter-card, .rt-accent-intro, .rt-accent-label, .rt-testimonial-item, .rt-tag-row, .rt-page-banner-heading > *, .rt-page-banner-top > .rt-button, .rt-logo-strip, .rt-heading-group > div, .rt-heading-column > div, .rt-heading-column > h1, [data-filter-group], .rt-stat-card, .rt-split-media, .rt-tab-list, .rt-quote, .rt-team-grid, .rt-grid-list, .rt-stack-sm > *, .rt-detail-panel, .rt-detail-aside, .rt-detail-text, .rt-detail-stat, .rt-detail-testimonial, .rt-step-card, .rt-slider-arrows, .rt-post-card, .rt-split-panel, .rt-center-heading > :not(h2), .rt-price-switch, .rt-plan-card, .rt-feature-item, .rt-contact-card, .rt-split-row .rt-filter-tag, .rt-contact-form > *", y: 50, duration: 1, stagger: 0.12, maxStagger: 0.6, start: "top 88%" };
var IMAGE_REVEAL = { selector: ".rt-work-card .rt-banner-card, .rt-accent-video, .rt-testimonial-photo, .rt-detail-cover, .rt-detail-gallery, .rt-detail-wide, .rt-video-card, .rt-offer-card", duration: 1.4, start: "top 85%" };
var SLIDE_APART = { selector: "[data-slide-apart]", distance: 100 };
var FOOTER_REVEAL = { footer: "footer", cols: ".rt-footer-col-1, .rt-footer-col-2, .rt-footer-col-3, .rt-footer-col-4", mark: ".rt-footer-bottom-col-1",
button: ".rt-footer-button", strip: ".rt-footer-bottom-strip", start: "top 92%" };
var VIDEO_EXPAND = { selector: "[data-expand]", growFrom: ".rt-accent-video", growMedia: "(min-width: 992px)", growStart: "bottom bottom", fromInset: "22% 34.8% 22% 34.8% round 10px", start: "top bottom", end: "top top" };
var STACK_CARDS = { list: ".rt-stack-list", item: ".rt-stack-card", scale: 0.8, start: 0.45, media: "(min-width: 768px)" };
var HOVER_REVEAL = { card: ".rt-team-card", layer: ".rt-team-card-overlay", rise: 20, fade: 0.3, duration: 0.45, stagger: 0.1 };
var ROW_HOVER = { row: ".rt-award-row", item: ".rt-award-item", media: ".rt-award-media", duration: 0.3, when: "(min-width: 992px) and (hover: hover)" };
var GALLERY_ZOOM = { box: ".rt-show-frames-box", wrap: ".rt-show-grid-wrapper", grid: ".rt-show-grid", target: ".rt-show-grid-video", targetIndex: 1, icon: ".rt-video-toggle",
media: "(min-width: 992px)", length: 2.2, drift: [0.5, 0, 0.35], cover: 1 };
var BANNER_SCROLL = { center: ".rt-banner-slider > .rt-banner-card", pairs: ".rt-banner-slider > .rt-banner-pair, .rt-banner-aside > .rt-banner-pair",
mountain: ".rt-banner-mountain img", rise: 150, length: 0.8, drift: -0.5, smooth: 1.2, grow: 1.6, zoom: 1.15, ease: "sine.inOut" };
var OUTLINE = { selector: ".rt-button", line: ".rt-button-line", skip: "[data-menu]", start: "top 90%", duration: 1.4, banner: 2.7 };
var LINES = { selector: "footer .rt-input-v1, .rt-footer-bottom-strip", start: "top 92%", duration: 1.2 };
var RING = { selector: ".rt-title-ring", start: "top 85%", delay: 0.35, duration: 1.4 };
var PILLS = { left: ".rt-float-pill-left", right: ".rt-float-pill-right", distance: 0.35, start: "top 80%", duration: 1.4, gap: 0.45, drift: 70, tilt: 8 };
var SPIN = { selector: ".rt-accent-intro > .rt-icon, .rt-cta-v1-top > .rt-icon", duration: 8 };
var CALL = { link: ".rt-navbar-call", label: ".rt-call-label", gap: 10, pad: 24 };
/* 1. HOVER ZOOM */
if (!reduceMotion && canHover) {
document.querySelectorAll(HOVER_ZOOM.selector).forEach(function (card) {
var img = card.querySelector("img");
if (!img) return;
function zoom(s) { gsap.to(img, { scale: s, duration: HOVER_ZOOM.duration, ease: HOVER_ZOOM.ease, overwrite: true }); }
card.addEventListener("mouseenter", function () { zoom(HOVER_ZOOM.scale); });
card.addEventListener("mouseleave", function () { zoom(1); });
});
}
/* 1b. HOVER REVEAL */
if (!reduceMotion && canHover) {
document.querySelectorAll(HOVER_REVEAL.card).forEach(function (card) {
var layer = card.querySelector(HOVER_REVEAL.layer);
if (!layer) return;
gsap.set(layer, { opacity: 0 });
gsap.set(layer.children, { opacity: 0, y: HOVER_REVEAL.rise });
var tl = gsap.timeline({ paused: true })
.to(layer, { opacity: 1, duration: HOVER_REVEAL.fade, ease: "power2.out" })
.to(layer.children, { opacity: 1, y: 0, duration: HOVER_REVEAL.duration, stagger: HOVER_REVEAL.stagger, ease: "power3.out" }, 0.1);
card.addEventListener("mouseenter", function () { tl.play(); });
card.addEventListener("mouseleave", function () { tl.reverse(); });
});
}
/* 1c. ROW HOVER */
if (!reduceMotion && gsap.matchMedia) gsap.matchMedia().add(ROW_HOVER.when, function () {
var undo = [];
document.querySelectorAll(ROW_HOVER.row).forEach(function (row) {
var item = row.querySelector(ROW_HOVER.item), pic = row.querySelector(ROW_HOVER.media), rest = null;
if (!item) return;
function on() {
if (!rest) rest = { w: item.offsetWidth, o: parseFloat(getComputedStyle(item).opacity) };
gsap.set(item, { maxWidth: "none" });
gsap.to(item, { opacity: 1, width: row.clientWidth, duration: ROW_HOVER.duration, ease: "power2.out", overwrite: true });
if (pic) gsap.to(pic, { opacity: 1, duration: ROW_HOVER.duration, ease: "power2.out", overwrite: true });
}
function off() {
if (!rest) return;
gsap.to(item, { opacity: rest.o, width: rest.w, duration: ROW_HOVER.duration, ease: "power2.out", overwrite: true,
onComplete: function () { gsap.set(item, { clearProps: "opacity,width,maxWidth" }); rest = null; } });
if (pic) gsap.to(pic, { opacity: 0, duration: ROW_HOVER.duration, ease: "power2.out", overwrite: true, onComplete: function () { gsap.set(pic, { clearProps: "opacity" }); } });
}
row.addEventListener("mouseenter", on);
row.addEventListener("mouseleave", off);
undo.push(function () { row.removeEventListener("mouseenter", on); row.removeEventListener("mouseleave", off); gsap.set([item, pic].filter(Boolean), { clearProps: "opacity,width,maxWidth" }); });
});
return function () { undo.forEach(function (u) { u(); }); };
});
/* 2. MARQUEE */
function marquee(track, o) {
var items = Array.prototype.slice.call(track.children), clones = [], tween, timer, period, setSize, ref, hovered = false, focused = false;
if (!items.length) return function () {};
var y = o.axis === "y", pos = y ? "offsetTop" : "offsetLeft", size = y ? "offsetHeight" : "offsetWidth";
var unit = items.length % 2 ? 2 : 1;
function hold() { if (tween) gsap.to(tween, { timeScale: hovered || focused ? 0 : 1, duration: MARQUEE.stopDuration, ease: "power2.out", overwrite: true }); }
function enter(e) { if (e.pointerType !== "touch") { hovered = true; hold(); } }
function leave(e) { if (e.pointerType !== "touch") { hovered = false; hold(); } }
function focusIn(e) { if (e.target.matches(":focus-visible")) { focused = true; hold(); } }
function focusOut() { focused = false; hold(); }
function needSets() { return Math.ceil((y ? track.parentElement.clientHeight : Math.max(screen.width, window.innerWidth)) / setSize) + (y ? 1 : 2) * unit; }
function addSet() {
items.forEach(function (it) {
var c = it.cloneNode(true);
c.setAttribute("aria-hidden", "true");
[c].concat(Array.prototype.slice.call(c.querySelectorAll("[style]"))).forEach(function (n) {
["opacity", "transform", "translate", "clip-path"].forEach(function (p) { n.style.removeProperty(p); });
});
clones.push(track.appendChild(c));
});
}
function build() {
if (!y) { track.style.display = "flex"; track.style.width = "max-content"; track.style.alignItems = o.align || "flex-start"; }
if (o.itemWidth) items.forEach(function (it) { it.style.flex = "none"; it.style.width = o.itemWidth; });
var last = items[items.length - 1], span = last[pos] + last[size] - items[0][pos];
if (!(span > 0)) return;
setSize = span + (parseFloat(getComputedStyle(track)[y ? "rowGap" : "columnGap"]) || 0);
for (var s = 1, sets = needSets(); s < sets; s++) addSet();
ref = clones[(unit - 1) * items.length];
period = ref ? ref[pos] - items[0][pos] : 0;
if (!(period > 0) || reduceMotion) return;
var start = y ? 0 : -period, from = {}, to = { duration: period / o.speed, ease: "none", repeat: -1 };
from[o.axis] = o.reverse ? start - period : start;
to[o.axis] = o.reverse ? start : start - period;
tween = gsap.fromTo(track, from, to);
hold();
}
function clear() {
if (tween) tween.kill();
tween = ref = null;
clones.forEach(function (c) { c.remove(); });
clones = [];
gsap.set(track, { clearProps: "transform" });
track.style.display = track.style.width = track.style.alignItems = "";
items.forEach(function (it) { it.style.flex = it.style.width = ""; });
}
function resize() {
clearTimeout(timer);
timer = setTimeout(function () {
if (ref && Math.abs(ref[pos] - items[0][pos] - period) < 1) {
for (var have = clones.length / items.length + 1, want = needSets(); have < want; have++) addSet();
return;
}
clear();
build();
}, 200);
}
build();
if (o.hoverStop) {
track.addEventListener("pointerenter", enter);
track.addEventListener("pointerleave", leave);
track.addEventListener("focusin", focusIn);
track.addEventListener("focusout", focusOut);
if (!track.hasAttribute("tabindex")) {
track.tabIndex = 0;
track.setAttribute("role", "region");
track.setAttribute("aria-label", o.label || "Auto-scrolling list (pauses on hover or focus)");
track.setAttribute("data-marquee-focus", "");
}
}
window.addEventListener("resize", resize);
return function () {
clearTimeout(timer);
window.removeEventListener("resize", resize);
track.removeEventListener("pointerenter", enter);
track.removeEventListener("pointerleave", leave);
track.removeEventListener("focusin", focusIn);
track.removeEventListener("focusout", focusOut);
if (track.hasAttribute("data-marquee-focus")) { ["tabindex", "role", "aria-label", "data-marquee-focus"].forEach(function (a) { track.removeAttribute(a); }); }
clear();
};
}
if (gsap.matchMedia) {
var marqueeMedia = gsap.matchMedia();
MARQUEE.rows.forEach(function (o) {
if (reduceMotion && !o.fillStatic) return;
marqueeMedia.add(o.media || "all", function () {
var undo = Array.prototype.map.call(document.querySelectorAll(o.selector), function (t) { return marquee(t, o); });
return function () { undo.forEach(function (u) { u(); }); };
});
});
}
if (reduceMotion || !hasST) return;
/* helper: wrap each word in an inline-block span */
function splitWords(el) {
var words = [];
(function walk(node) {
Array.prototype.slice.call(node.childNodes).forEach(function (n) {
if (n.nodeType === 3) {
var frag = document.createDocumentFragment();
n.textContent.split(/( +)/).forEach(function (part) {
if (!part) return;
if (/^ +$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
var w = document.createElement("span");
w.style.display = "inline-block";
w.textContent = part;
frag.appendChild(w);
words.push(w);
});
n.parentNode.replaceChild(frag, n);
} else if (n.nodeType === 1 && n.tagName !== "BR") { walk(n); }
});
})(el);
return words;
}
/* 3. SCROLL TEXT */
var greyColor = getComputedStyle(document.documentElement).getPropertyValue(SCROLL_TEXT.fromColorVar).trim() || "#5b5b5b";
document.querySelectorAll(SCROLL_TEXT.selector).forEach(function (el) {
var own = el.getAttribute("data-scroll-text");
var startColor = own ? getComputedStyle(document.documentElement).getPropertyValue(own).trim() || greyColor : greyColor;
var words = splitWords(el);
var finalColors = words.map(function (w) { return getComputedStyle(w).color; });
gsap.set(words, { color: startColor });
var tl = gsap.timeline({ scrollTrigger: { trigger: el, start: SCROLL_TEXT.start, end: SCROLL_TEXT.end, scrub: true } });
words.forEach(function (w, i) { tl.to(w, { color: finalColors[i], duration: 1, ease: "none" }, i * 0.5); });
});
/* 4. COUNTER */
document.querySelectorAll(COUNTER.selector).forEach(function (el) {
var m = el.textContent.trim().match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
if (!m) return;
var prefix = m[1], raw = m[2], suffix = m[3];
var useComma = raw.indexOf(",") > -1, decimals = (raw.split(".")[1] || "").length;
var target = parseFloat(raw.replace(/,/g, "")), state = { v: target };
function render() {
var n = useComma ? state.v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : state.v.toFixed(decimals);
el.textContent = prefix + n + suffix;
}
if (typeof ScrollTrigger !== "undefined") {
  ScrollTrigger.create({
    trigger: el,
    start: COUNTER.start,
    once: true,
    onEnter: function() {
      state.v = 0;
      render();
      gsap.to(state, { v: target, duration: COUNTER.duration, ease: "power2.out", onUpdate: render });
    }
  });
}
});
/* 5. HEADING REVEAL */
function rendered(el) { return el.getClientRects().length > 0; }
document.querySelectorAll(HEADING_REVEAL.selector).forEach(function (h) {
if (h.matches(SCROLL_TEXT.selector) || !rendered(h)) return;
var words = splitWords(h);
gsap.from(words, { y: HEADING_REVEAL.y, opacity: 0, filter: "blur(" + HEADING_REVEAL.blur + "px)", duration: HEADING_REVEAL.duration, stagger: HEADING_REVEAL.stagger, ease: "power3.out", clearProps: "filter", scrollTrigger: { trigger: h, start: HEADING_REVEAL.start, once: true } });
});
/* 6. FADE UP */
var fadeItems = gsap.utils.toArray(FADE_UP.selector).filter(rendered);
fadeItems.forEach(function (el) {
  var rect = el.getBoundingClientRect();
  if (rect.top >= window.innerHeight * 0.95) {
    gsap.set(el, { opacity: 0, y: FADE_UP.y });
  } else {
    gsap.set(el, { opacity: 1, y: 0 });
  }
});
ScrollTrigger.batch(fadeItems, { start: FADE_UP.start, once: true, onEnter: function (batch) {
var passed = batch.filter(function (el) { return el.getBoundingClientRect().bottom < 0; });
if (passed.length) gsap.set(passed, { opacity: 1, y: 0, clearProps: "transform,opacity" });
batch = batch.filter(function (el) { return passed.indexOf(el) < 0; });
if (batch.length) gsap.to(batch, { opacity: 1, y: 0, duration: FADE_UP.duration, stagger: Math.min(FADE_UP.stagger, FADE_UP.maxStagger / batch.length), ease: "power3.out", clearProps: "transform,opacity" });
} });
setTimeout(function() {
  fadeItems.forEach(function(el) {
    if (getComputedStyle(el).opacity === "0") {
      gsap.to(el, { opacity: 1, y: 0, duration: 0.4, clearProps: "transform,opacity" });
    }
  });
}, 1000);
/* 7. IMAGE REVEAL */
gsap.utils.toArray(IMAGE_REVEAL.selector).forEach(function (box) {
gsap.fromTo(box, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: IMAGE_REVEAL.duration, ease: "expo.inOut", clearProps: "clipPath", scrollTrigger: { trigger: box, start: IMAGE_REVEAL.start, once: true } });
});
/* 7b. SLIDE APART */
document.querySelectorAll(SLIDE_APART.selector).forEach(function (row) {
var ends = [row.firstElementChild, row.lastElementChild];
if (!ends[0] || ends[0] === ends[1]) return;
var st = { trigger: row, start: "top bottom", end: "bottom top", scrub: true };
gsap.fromTo(ends[0], { x: -SLIDE_APART.distance }, { x: 0, ease: "none", scrollTrigger: st });
gsap.fromTo(ends[1], { x: SLIDE_APART.distance }, { x: 0, ease: "none", scrollTrigger: st });
});
/* 7c. FOOTER REVEAL */
document.querySelectorAll(FOOTER_REVEAL.footer).forEach(function (footer) {
var cols = footer.querySelectorAll(FOOTER_REVEAL.cols), mark = footer.querySelector(FOOTER_REVEAL.mark),
button = footer.querySelector(FOOTER_REVEAL.button), strip = footer.querySelector(FOOTER_REVEAL.strip);
if (cols.length) gsap.from(cols, { y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out", clearProps: "all",
scrollTrigger: { trigger: cols[0], start: FOOTER_REVEAL.start, once: true } });
var bottom = mark || button;
if (!bottom) return;
var tl = gsap.timeline({ scrollTrigger: { trigger: bottom, start: FOOTER_REVEAL.start, once: true } });
if (mark) {
mark.style.overflow = "hidden";
tl.from(mark.children, { yPercent: 105, duration: 1.3, ease: "expo.out", clearProps: "all" }, 0);
}
if (button) tl.from(button, { scale: 0.3, rotation: -12, opacity: 0, duration: 1.1, ease: "back.out(1.6)", clearProps: "all" }, 0.15);
if (strip) tl.from(strip, { y: 20, opacity: 0, duration: 0.8, ease: "power2.out", clearProps: "all" }, 0.45);
});
/* 8. VIDEO EXPAND */
document.querySelectorAll(VIDEO_EXPAND.selector).forEach(function (el) {
var section = el.closest("section") || el;
var source = document.querySelector(el.getAttribute("data-expand") || VIDEO_EXPAND.growFrom);
gsap.matchMedia().add({ grow: VIDEO_EXPAND.growMedia }, function (ctx) {
if (!ctx.conditions.grow || !source) {
gsap.fromTo(el, { clipPath: "inset(" + VIDEO_EXPAND.fromInset + ")" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: section, start: VIDEO_EXPAND.start, end: VIDEO_EXPAND.end, scrub: true } });
return;
}
function geo() {
var sr = section.getBoundingClientRect(), cr = source.getBoundingClientRect(), w = el.offsetWidth, h = el.offsetHeight;
var s = Math.max(cr.width / w, cr.height / h), ix = (w - cr.width / s) / 2, iy = (h - cr.height / s) / 2;
var r = (parseFloat(getComputedStyle(source).borderTopLeftRadius) || 0) / s;
return { x: cr.left + cr.width / 2 - sr.left - w / 2, y: cr.top + cr.height / 2 - sr.top - h / 2, s: s, clip: "inset(" + iy + "px " + ix + "px " + iy + "px " + ix + "px round " + r + "px)" };
}
var from = source.closest("section");
section.style.zIndex = "1";
section.style.overflowY = "visible";
section.style.backgroundColor = from ? getComputedStyle(from).backgroundColor : "";
source.style.visibility = "hidden";
gsap.fromTo(el,
{ x: function () { return geo().x; }, y: function () { return geo().y; }, scale: function () { return geo().s; }, clipPath: function () { return geo().clip; }, transformOrigin: "50% 50%" },
{ x: 0, y: 0, scale: 1, clipPath: "inset(0px 0px 0px 0px round 0px)", ease: "none", scrollTrigger: { trigger: source, start: VIDEO_EXPAND.growStart, endTrigger: section, end: "top top", scrub: true, invalidateOnRefresh: true } });
return function () { section.style.zIndex = section.style.overflowY = section.style.backgroundColor = source.style.visibility = ""; };
});
});
/* 9. STACK CARDS */
function stackCards() {
if (typeof ScrollTrigger !== "undefined") {
ScrollTrigger.getAll().forEach(function(st) {
if (st.trigger && st.trigger.classList && st.trigger.classList.contains("rt-stack-card")) {
st.kill();
}
});
}
document.querySelectorAll(STACK_CARDS.list).forEach(function (list) {
var cards = Array.prototype.slice.call(list.querySelectorAll(STACK_CARDS.item));
function naturalTop(i) {
var y = list.getBoundingClientRect().top + window.scrollY, gap = parseFloat(getComputedStyle(list).rowGap) || 0;
for (var k = 0; k < i; k++) y += cards[k].offsetHeight + gap;
return y - (parseFloat(getComputedStyle(cards[0]).top) || 0);
}
cards.forEach(function (card, i) {
var last = i === cards.length - 1;
gsap.fromTo(card, { scale: 1 }, { scale: STACK_CARDS.scale, transformOrigin: "50% 50%", ease: "none", scrollTrigger: {
start: function () { return naturalTop(i) - window.innerHeight * STACK_CARDS.start; },
end: function () { return last ? naturalTop(i) + card.offsetHeight : naturalTop(i + 1); },
scrub: true, invalidateOnRefresh: true } });
});
});
}
if (gsap.matchMedia) gsap.matchMedia().add(STACK_CARDS.media, stackCards); else stackCards();
/* 10. GALLERY ZOOM */
if (gsap.matchMedia) gsap.matchMedia().add(GALLERY_ZOOM.media, function () {
var box = document.querySelector(GALLERY_ZOOM.box), wrap = box && box.querySelector(GALLERY_ZOOM.wrap), grid = box && box.querySelector(GALLERY_ZOOM.grid);
if (!grid) return;
var cols = Array.prototype.slice.call(grid.children), tiles = grid.querySelectorAll(GALLERY_ZOOM.target);
var tile = tiles[Math.min(GALLERY_ZOOM.targetIndex, tiles.length - 1)];
if (!tile) return;
var mid = cols.indexOf(tile.parentElement), icon = tile.querySelector(GALLERY_ZOOM.icon);
box.style.overflow = "hidden";
box.style.minHeight = "100vh";
if (wrap) wrap.style.overflow = "visible";
if (box.nextElementSibling && box.nextElementSibling.getAttribute("data-gallery-spacer")) {
box.nextElementSibling.remove();
}
var spacer = document.createElement("div");
spacer.setAttribute("aria-hidden", "true");
spacer.setAttribute("data-gallery-spacer", "true");
box.parentNode.insertBefore(spacer, box.nextSibling);
function zoomLength() { return window.innerHeight * GALLERY_ZOOM.length; }
function coverLength() { return window.innerHeight * GALLERY_ZOOM.cover; }
var footer = document.querySelector("footer"), cover = footer && footer.parentElement;
spacer.style.height = zoomLength() + coverLength() + "px";
function docTop(el) { for (var y = 0; el; el = el.offsetParent) y += el.offsetTop; return y; }
function focusY() { return window.innerHeight / 2 - (docTop(grid) - docTop(box)); }
function lift() { return focusY() - (docTop(tile) - docTop(grid) + tile.offsetHeight / 2); }
function zoom() { return Math.max(box.clientWidth / tile.offsetWidth, window.innerHeight / tile.offsetHeight) * 1.02; }
function resize() { spacer.style.height = zoomLength() + coverLength() + "px"; }
window.addEventListener("resize", resize);
function clipFrom() {
var b = box.getBoundingClientRect(), w = wrap.getBoundingClientRect(), r = parseFloat(getComputedStyle(wrap).borderTopLeftRadius) || 0;
return "inset(" + (w.top - b.top) + "px " + (b.right - w.right) + "px " + (b.bottom - w.bottom) + "px " + (w.left - b.left) + "px round " + r + "px)";
}
var tl = gsap.timeline({ scrollTrigger: { trigger: box, start: "top top", end: function () { return "+=" + (zoomLength() + coverLength() + box.offsetHeight); },
pin: true, pinSpacing: false, scrub: 1, invalidateOnRefresh: true } });
/* play button keeps its size */
tl.to(grid, { scale: zoom, transformOrigin: function () { return "50% " + focusY() + "px"; }, ease: "power1.in", duration: 1,
onUpdate: function () { if (icon) gsap.set(icon, { scale: 1 / gsap.getProperty(grid, "scale") }); } }, 0);
if (wrap) tl.fromTo(box, { clipPath: clipFrom }, { clipPath: "inset(0px 0px 0px 0px round 0px)", ease: "power1.in", duration: 1 }, 0);
tl.to({}, { duration: (box.offsetHeight + coverLength()) / zoomLength() });
if (cover) gsap.fromTo(cover, { y: function () { return -coverLength(); } }, { y: 0, ease: "none", scrollTrigger: { trigger: cover,
start: "top bottom", end: function () { return "top top-=" + coverLength(); }, scrub: true, invalidateOnRefresh: true } });
var L = GALLERY_ZOOM.length;
var drift = gsap.timeline({ scrollTrigger: { trigger: box, start: "top bottom", end: function () { return "+=" + (window.innerHeight + zoomLength()); }, scrub: 1, invalidateOnRefresh: true } });
cols.forEach(function (c, i) {
function travel() { return i === mid ? lift() * (1 + L) / L : tile.offsetHeight * (GALLERY_ZOOM.drift[i] || 0.5); }
drift.fromTo(c, { y: function () { return -travel() / (1 + L); } }, { y: 0, ease: "none", duration: 1 }, 0)
.to(c, { y: function () { return travel() * L / (1 + L); }, ease: "none", duration: L }, 1);
});
return function () {
window.removeEventListener("resize", resize);
spacer.remove();
box.style.overflow = box.style.minHeight = "";
if (wrap) wrap.style.overflow = "";
gsap.set(cols.concat([grid, icon].filter(Boolean)), { clearProps: "transform,opacity" });
gsap.set(box, { clearProps: "clipPath" });
if (cover) gsap.set(cover, { clearProps: "transform" });
};
});
/* 11. BANNER SCROLL */
document.querySelectorAll(INTRO.section).forEach(function (sec) {
var B = BANNER_SCROLL, mtn = sec.querySelector(B.mountain), center = sec.querySelector(B.center), pairs = gsap.utils.toArray(sec.querySelectorAll(B.pairs));
function docTop(el) { for (var y = 0; el; el = el.offsetParent) y += el.offsetTop; return y; }
function mtnRise() { var p = pairs[0], up = mtn.offsetHeight * B.drift; if (!p) return up;
var top = docTop(mtn) + mtn.parentElement.offsetHeight * INTRO.mountainPercent / 100;
return Math.min(0, Math.max(up, docTop(p) - top - mtn.offsetHeight)); }
if (mtn) gsap.fromTo(mtn, { y: 0 }, { y: mtnRise, ease: "none", scrollTrigger: { trigger: sec, start: 0, end: "center top", scrub: B.smooth, invalidateOnRefresh: true } });
if (!center) return;
gsap.matchMedia().add(INTRO.desktop, function () {
var cards = [pairs[0], center].concat(pairs.slice(1)).filter(Boolean), side = pairs[0] && pairs[0].firstElementChild;
cards.forEach(function (c) { c.style.opacity = ""; });
function radius() { return getComputedStyle(center).borderTopLeftRadius; }
function ix() { return side ? (center.offsetWidth - side.offsetWidth) / 2 : 0; }
function clip() { return "inset(" + (side ? center.offsetHeight - side.offsetHeight : 0) + "px " + ix() + "px 0px " + ix() + "px round " + radius() + ")"; }
gsap.set(cards, { opacity: 0, y: B.rise });
gsap.timeline({ scrollTrigger: { start: 0, end: function () { return window.innerHeight * B.length; }, scrub: B.grow, invalidateOnRefresh: true } })
.fromTo(cards, { opacity: 0, y: B.rise }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" }, 0)
.fromTo(center, { clipPath: clip }, { clipPath: function () { return "inset(0px 0px 0px 0px round " + radius() + ")"; }, duration: 0.6, ease: B.ease }, 0.4)
.fromTo(pairs, { x: function (i) { return i ? -ix() : ix(); } }, { x: 0, duration: 0.6, ease: B.ease }, 0.4);
var pic = center.querySelector("img");
if (pic) gsap.fromTo(pic, { scale: B.zoom }, { scale: 1, ease: B.ease, scrollTrigger: { start: function () { return window.innerHeight * B.length * 0.4; },
end: function () { return window.innerHeight * B.length; }, scrub: B.grow, invalidateOnRefresh: true } });
return function () { if (pic) gsap.set(pic, { clearProps: "transform" }); };
});
});
/* 12. BUTTON APPEAR - border draws from the top centre */
document.querySelectorAll(OUTLINE.selector).forEach(function (btn) {
if (!btn.offsetWidth || btn.closest(OUTLINE.skip)) return;
var at = btn.closest(INTRO.section) ? OUTLINE.banner : 0, end = at + OUTLINE.duration;
var line = btn.querySelector(OUTLINE.line + " rect");
var label = Array.prototype.filter.call(btn.children, function (el) { return !el.matches(OUTLINE.line); });
var tl = gsap.timeline(at ? {} : { scrollTrigger: { trigger: btn, start: OUTLINE.start, once: true } });
if (line) {
var w = btn.offsetWidth, h = btn.offsetHeight, r = Math.min(parseFloat(line.getAttribute("rx")) || 0, h / 2, w / 2);
var mid = (w / 2 - r) / (2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r);
tl.set(line, { attr: { stroke: getComputedStyle(btn).borderTopColor, "stroke-dasharray": "0 1", "stroke-dashoffset": -mid } }, 0)
.set(btn, { borderColor: "rgba(255, 255, 255, 0)" }, 0)
.to(line, { attr: { "stroke-dasharray": "1 0", "stroke-dashoffset": 0.5 - mid }, duration: OUTLINE.duration, ease: "power2.inOut" }, at)
.set(btn, { clearProps: "borderColor" }, end)
.set(line, { attr: { "stroke-dasharray": "1 1", "stroke-dashoffset": 1 } }, end);
} else {
tl.from(btn, { borderColor: "rgba(255, 255, 255, 0)", duration: OUTLINE.duration, ease: "power2.inOut", clearProps: "borderColor" }, at);
}
if (label.length) tl.from(label, { yPercent: 100, clipPath: "inset(0% 0% 100% 0%)", duration: 0.9, stagger: 0.08, ease: "power3.out", clearProps: "transform,clipPath" }, at + OUTLINE.duration * 0.4);
});
/* 13. LINE DRAW */
gsap.utils.toArray(LINES.selector).forEach(function (el) {
gsap.fromTo(el, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: LINES.duration, ease: "power2.inOut", clearProps: "clipPath", scrollTrigger: { trigger: el, start: LINES.start, once: true } });
});
/* 14. TITLE RING */
gsap.utils.toArray(RING.selector).forEach(function (ring) {
gsap.from(ring, { borderColor: "rgba(255, 255, 255, 0)", scale: 0.8, duration: RING.duration, delay: RING.delay, ease: "power3.out", clearProps: "borderColor,transform", scrollTrigger: { trigger: ring, start: RING.start, once: true } });
});
/* 15. FLOAT PILLS */
[[PILLS.left, -1], [PILLS.right, 1]].forEach(function (p, i) {
document.querySelectorAll(p[0]).forEach(function (el) {
if (!el.offsetWidth) return;
var box = el.parentElement;
gsap.from(el, { x: p[1] * innerWidth * PILLS.distance, opacity: 0, duration: PILLS.duration, delay: i * PILLS.gap, ease: "power3.out", scrollTrigger: { trigger: box, start: PILLS.start, once: true } });
gsap.fromTo(el, { y: -p[1] * PILLS.drift }, { y: p[1] * PILLS.drift, rotation: "+=" + p[1] * PILLS.tilt, ease: "none", scrollTrigger: { trigger: box, start: "top bottom", end: "bottom top", scrub: 1 } });
});
});
/* 16. SPIN */
if (document.querySelector(SPIN.selector)) gsap.to(SPIN.selector, { rotation: 360, duration: SPIN.duration, ease: "none", repeat: -1 });
/* 17. CALL HOVER */
if (canHover) document.querySelectorAll(CALL.link).forEach(function (a) {
var label = a.querySelector(CALL.label), dot = a.querySelector("circle"), rest = parseFloat(getComputedStyle(a).paddingLeft);
if (!label) return;
function go(on) {
var o = { duration: 0.45, ease: "power3.out", overwrite: true };
gsap.to(label, Object.assign({ maxWidth: on ? label.scrollWidth : 0, opacity: on, marginLeft: on ? CALL.gap : 0 }, o));
gsap.to(a, Object.assign({ paddingLeft: on ? CALL.pad : rest, paddingRight: on ? CALL.pad : rest }, o));
if (dot) gsap.to(dot, { opacity: on ? 0 : 1, duration: 0.2 });
}
a.addEventListener("mouseenter", function () { go(1); });
a.addEventListener("mouseleave", function () { go(0); });
});
}


  // Expose globally on window
  window.INTRO = typeof INTRO !== "undefined" ? INTRO : null;
  window.bentroIntro = typeof bentroIntro === "function" ? bentroIntro : null;
  window.bentroBannerPhotos = typeof bentroBannerPhotos === "function" ? bentroBannerPhotos : null;
  window.bentroInit = typeof bentroInit === "function" ? bentroInit : null;

  window.triggerBentro = function() {
    initPlugins();
    try {
      if (typeof bentroIntro === "function" && !introHasRun) bentroIntro();
    } catch(e) { console.warn("bentroIntro error:", e); }
    try {
      if (typeof bentroBannerPhotos === "function") bentroBannerPhotos();
    } catch(e) { console.warn("bentroBannerPhotos error:", e); }
    try {
      if (typeof bentroInit === "function") bentroInit();
    } catch(e) { console.warn("bentroInit error:", e); }
    try {
      if (typeof stackCards === "function") stackCards();
    } catch(e) {}
    try {
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
    } catch(e) {}
  };

  // Auto initialize on DOM ready or immediately if already ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.triggerBentro);
  } else {
    setTimeout(window.triggerBentro, 50);
  }
  window.addEventListener("load", function() {
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  });
})();
