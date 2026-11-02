// Builds the qBraid Award slide decks:
//   template/qbraid-award-template.pptx  (blank, for teams to fill in)
//   template/qbraid-award-example.pptx   (filled in for a made-up team)
//
// Needs: npm install pptxgenjs react react-dom react-icons sharp
// Run:   node scripts/build-slides.js   (set APPLY_THEME=/path/to/apply_theme.js to write theme colors)

const path = require("path");
const pptxgen = require("pptxgenjs");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa6");

const OUT = path.join(__dirname, "..", "template");

const THEME = {
  name: "qBraid Award",
  headFontFace: "Arial",
  bodyFontFace: "Arial",
  colors: {
    dk1: "1A1530", lt1: "FFFFFF", dk2: "2A1846", lt2: "F3EFFC",
    accent1: "6A3BE4", accent2: "E0457B", accent3: "C9B8F5", accent4: "1F9D8B",
    accent5: "F2A93B", accent6: "6B6680", hlink: "6A3BE4", folHlink: "4B2AA8",
  },
};
const HEX = THEME.colors;

async function icon(Comp, color) {
  const svg = renderToStaticMarkup(React.createElement(Comp, { color: "#" + color, size: 256 }));
  const buf = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

// Feature tiles for slide 1. `ai: true` gets the highlighted "Encouraged" treatment.
const FEATURES = [
  { key: "hw", name: "Quantum hardware", hint: "IonQ, IQM, Rigetti, Quantinuum", icon: fa.FaMicrochip },
  { key: "sim", name: "Simulators", hint: "GPU state vector, tensor network", icon: fa.FaCubes },
  { key: "lab", name: "qBraid Lab", hint: "Notebooks, environments", icon: fa.FaLaptopCode },
  { key: "ai", name: "qBraid AI", hint: "AI Chat, Agent mode, MCP server", icon: fa.FaRobot, ai: true },
  { key: "tr", name: "Transpiler", hint: "Qiskit, Cirq, Braket, OpenQASM", icon: fa.FaShuffle },
  { key: "jobs", name: "Jobs and results", hint: "Jobs page, job IDs, plots", icon: fa.FaChartColumn },
  { key: "cli", name: "CLI and compute", hint: "qbraid CLI, GPU instances", icon: fa.FaTerminal },
  { key: "other", name: "Something else", hint: "Your own idea", icon: fa.FaLightbulb },
];

async function buildDeck(mode) {
  const ex = mode === "example";
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.title = ex ? "qBraid Award entry (example)" : "qBraid Award entry";
  const C = pres.SchemeColor;

  const footer = ex ? "qBraid Award  ·  Example: made-up team, illustrative numbers" : "qBraid Award  ·  Most Creative Use of qBraid";
  pres.defineSlideMaster({
    title: "QB_CONTENT",
    background: { color: "FFFFFF" },
    margin: [0.5, 0.6, 0.6, 0.6],
    objects: [
      { placeholder: { options: { name: "eyebrow", type: "body", x: 0.6, y: 0.42, w: 12.13, h: 0.32, fontSize: 12, bold: true, color: C.accent1, charSpacing: 2, margin: 0, valign: "middle" }, text: "" } },
      { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 0.78, w: 12.13, h: 0.75, fontSize: 34, bold: true, color: C.text1, margin: 0, valign: "top", align: "left" }, text: "" } },
      { text: { text: footer, options: { x: 0.6, y: 6.98, w: 9, h: 0.3, fontSize: 10, color: C.accent6, margin: 0, isTextBox: true } } },
    ],
    slideNumber: { x: 12.23, y: 6.98, w: 0.5, h: 0.3, fontSize: 10, color: HEX.accent6, align: "right" },
  });

  const icons = {};
  for (const f of FEATURES) {
    icons[f.key] = { white: await icon(f.icon, "FFFFFF"), violet: await icon(f.icon, HEX.accent1) };
  }
  const smallIcons = {
    shows: await icon(fa.FaEye, "FFFFFF"),
    ai: await icon(fa.FaRobot, "FFFFFF"),
    surprise: await icon(fa.FaBolt, "FFFFFF"),
    proof: await icon(fa.FaCircleCheck, "FFFFFF"),
    links: await icon(fa.FaLink, "FFFFFF"),
    cost: await icon(fa.FaCoins, "FFFFFF"),
    image: await icon(fa.FaImage, HEX.accent3),
  };

  const iconCircle = (slide, x, y, d, img, fill, name) => {
    slide.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { type: "none" }, objectName: name + " circle" });
    const pad = d * 0.25;
    slide.addImage({ data: img, x: x + pad, y: y + pad, w: d - 2 * pad, h: d - 2 * pad, objectName: name + " icon", altText: name });
  };

  // ---------- Slide 1: qBraid features we used ----------
  pres.addSection({ title: "Required" });
  let s = pres.addSlide({ masterName: "QB_CONTENT", sectionTitle: "Required" });
  s.addText(ex ? "QBRAID AWARD  ·  GRID GUARDIANS  ·  SECURE THE GRID" : "QBRAID AWARD  ·  [TEAM NAME]  ·  [TRACK]", { placeholder: "eyebrow" });
  s.addText("qBraid features we used", { placeholder: "title" });
  s.addText(
    ex ? "We built an eavesdropper alarm for a power-grid control link, using the BB84 quantum key protocol."
       : "[What we built, in one sentence]",
    { x: 0.6, y: 1.58, w: 12.13, h: 0.45, fontSize: 18, color: ex ? C.text1 : C.accent6, margin: 0, isTextBox: true, objectName: "project line" }
  );

  const exampleUse = {
    hw: "IQM Garnet and IonQ Forte 1: 2 jobs each, clean link vs. eavesdropper",
    sim: "GPU state vector: tuned the alarm line on 30 qubits before touching hardware",
    lab: "One shared notebook for the team, with a Launch on qBraid button",
    ai: "An agent drafted our batched circuit, and AI Chat compared device prices",
    tr: "Wrote it once in Qiskit, and qBraid converted it for each device",
    jobs: "Pulled job IDs from the Jobs page and plotted all three backends together",
  };
  const tiles = ex ? FEATURES.filter((f) => exampleUse[f.key]) : FEATURES;
  const cols = ex ? 3 : 4;
  const gap = 0.3, gx = 0.6, gy = 2.3, gw = 12.13, gh = 4.4;
  const tw = (gw - gap * (cols - 1)) / cols, th = (gh - gap) / 2;
  tiles.forEach((f, i) => {
    const x = gx + (i % cols) * (tw + gap), y = gy + Math.floor(i / cols) * (th + gap);
    const hi = !!f.ai;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: tw, h: th, rectRadius: 0.12, fill: { color: hi ? HEX.accent1 : HEX.lt2 }, line: { type: "none" }, objectName: f.name + " tile" });
    iconCircle(s, x + 0.25, y + 0.25, 0.56, hi ? icons[f.key].violet : icons[f.key].white, hi ? HEX.lt1 : HEX.accent1, f.name);
    s.addText(f.name, { x: x + 0.95, y: y + 0.25, w: tw - 1.15, h: 0.56, fontSize: 16, bold: true, color: hi ? C.background1 : C.text1, margin: 0, valign: "middle", isTextBox: true, objectName: f.name + " name" });
    if (hi) {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + tw - 1.4, y: y - 0.16, w: 1.25, h: 0.32, rectRadius: 0.16, fill: { color: HEX.accent2 }, line: { type: "none" }, objectName: "Encouraged pill" });
      s.addText("Encouraged", { x: x + tw - 1.4, y: y - 0.16, w: 1.25, h: 0.32, fontSize: 11, bold: true, color: C.background1, align: "center", valign: "middle", margin: 0, isTextBox: true, objectName: "Encouraged label" });
    }
    s.addText(f.hint, { x: x + 0.25, y: y + 0.92, w: tw - 0.5, h: 0.3, fontSize: 11, color: hi ? C.accent3 : C.accent6, margin: 0, isTextBox: true, objectName: f.name + " hint" });
    s.addText(ex ? exampleUse[f.key] : "[How we used it, or delete this tile]", {
      x: x + 0.25, y: y + 1.25, w: tw - 0.5, h: th - 1.4, fontSize: 14, color: hi ? C.background1 : (ex ? C.text1 : C.accent6), margin: 0, valign: "top", isTextBox: true, objectName: f.name + " use",
    });
  });
  s.addNotes(ex
    ? "Example. The team kept the six tiles for features they really used and deleted the other two."
    : "Fill in a tile for every qBraid feature you used, and delete the tiles you didn't use. Drag the rest so the grid has no gaps. qBraid AI is encouraged: say what you asked it to do and where you stepped in.");

  // ---------- Slide 2: Our best qBraid moment ----------
  s = pres.addSlide({ masterName: "QB_CONTENT", sectionTitle: "Required" });
  s.addText(ex ? "QBRAID AWARD  ·  GRID GUARDIANS" : "QBRAID AWARD  ·  [TEAM NAME]", { placeholder: "eyebrow" });
  s.addText(ex ? "Our alarm works on real quantum hardware" : "Our best qBraid moment", { placeholder: "title" });

  const vx = 0.6, vy = 1.75, vw = 7.45, vh = 4.95;
  if (ex) {
    // A picture, not a native chart: it's what teams will paste (a plot_histogram or matplotlib screenshot),
    // and Keynote/Google Slides drop pptxgenjs charts on import.
    const chartPng = await sharp(path.join(__dirname, "..", "template", "example-chart.svg"), { density: 300 }).png().toBuffer();
    const iw = vw, ih = vw / 1.6;
    s.addImage({ data: "image/png;base64," + chartPng.toString("base64"), x: vx, y: vy + (vh - ih) / 2, w: iw, h: ih, objectName: "Error rate chart", altText: "Bar chart: error rate with and without an eavesdropper on the qBraid GPU simulator, IQM Garnet and IonQ Forte 1, with an alarm line at 11%" });
  } else {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: vx, y: vy, w: vw, h: vh, rectRadius: 0.12, fill: { color: HEX.lt2 }, line: { color: HEX.accent3, width: 1.5, dashType: "dash" }, objectName: "Visual placeholder" });
    s.addImage({ data: smallIcons.image, x: vx + vw / 2 - 0.45, y: vy + 1.35, w: 0.9, h: 0.9, objectName: "Visual placeholder icon", altText: "Image placeholder" });
    s.addText([
      { text: "Paste your chart or screenshot here", options: { bold: true, fontSize: 18, color: C.text1, breakLine: true } },
      { text: "Simulator vs. hardware, or one device vs. another, works great", options: { fontSize: 14, color: C.accent6 } },
    ], { x: vx + 0.5, y: vy + 2.45, w: vw - 1, h: 1.0, align: "center", valign: "top", margin: 0, isTextBox: true, objectName: "Visual placeholder text" });
  }

  const rx = 8.45, rw = 4.28;
  const rows = [
    { k: "shows", label: "What it shows", t: ex ? "Noise alone stays under our 11% alarm line. An eavesdropper pushes every backend past 25%." : "[One or two sentences someone outside quantum can follow]" },
    { k: "ai", label: "Where AI helped", t: ex ? "An agent drafted the batched circuit in minutes. It mixed up which bits to keep, and we caught it on the simulator." : "[What you asked qBraid AI or another AI tool to do, and where you stepped in]" },
    { k: "surprise", label: "What surprised us", t: ex ? "IQM Garnet ran noisier than IonQ, but still left a wide margin under 11%." : "[Optional: anything you didn't expect]" },
  ];
  rows.forEach((r, i) => {
    const y = 1.75 + i * 1.7;
    iconCircle(s, rx, y, 0.5, smallIcons[r.k], r.k === "ai" ? HEX.accent2 : HEX.accent1, r.label);
    s.addText(r.label, { x: rx + 0.68, y, w: rw - 0.68, h: 0.5, fontSize: 16, bold: true, color: C.text1, margin: 0, valign: "middle", isTextBox: true, objectName: r.label + " label" });
    s.addText(r.t, { x: rx + 0.68, y: y + 0.55, w: rw - 0.68, h: 1.0, fontSize: 14, color: ex ? C.text1 : C.accent6, margin: 0, valign: "top", isTextBox: true, objectName: r.label + " text" });
  });
  s.addNotes(ex
    ? "Example. One chart, a plain-English takeaway, and an honest note on where AI helped and where the team stepped in."
    : "Replace the placeholder with one chart or screenshot. Keep 'What it shows' to a sentence or two. 'Where AI helped' is encouraged; 'What surprised us' is optional.");

  // ---------- Slide 3: Check it (optional) ----------
  pres.addSection({ title: "Optional" });
  s = pres.addSlide({ masterName: "QB_CONTENT", sectionTitle: "Optional" });
  s.addText(ex ? "QBRAID AWARD  ·  GRID GUARDIANS  ·  OPTIONAL" : "QBRAID AWARD  ·  [TEAM NAME]  ·  OPTIONAL", { placeholder: "eyebrow" });
  s.addText("Check it", { placeholder: "title" });
  const cards = [
    { k: "proof", label: "Proof", lines: ex
      ? ["IQM Garnet: <ID 1>, <ID 2>", "IonQ Forte 1: <ID 3>, <ID 4>", "Job IDs copied from the Jobs page in our qBraid account"]
      : ["[Job IDs: from the Jobs page in your qBraid account, or print(job.id)]", "[Devices and simulators you used]"] },
    { k: "links", label: "Links", lines: ex
      ? ["Screen recording (1:45): <link>", "qBraid notebook: <link>", "Repo with a Launch on qBraid button: <link>"]
      : ["[Screen recording, 2 minutes max]", "[qBraid notebook, project, job or artifact]", "[Repo with a Launch on qBraid button]"] },
    { k: "cost", label: "Cost and next", lines: ex
      ? ["About 1,100 credits (about $11), 4% of our budget", "Batched every key bit into one circuit per run: 4 hardware jobs in total", "Next: run the alarm on Quantinuum"]
      : ["[Credits used, roughly]", "[How you kept the cost low]", "[What you'd try next]"] },
  ];
  const cw = (12.13 - 0.6) / 3, cy = 1.85, ch = 3.4;
  cards.forEach((c, i) => {
    const x = 0.6 + i * (cw + 0.3);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: cy, w: cw, h: ch, rectRadius: 0.12, fill: { color: HEX.lt2 }, line: { type: "none" }, objectName: c.label + " card" });
    iconCircle(s, x + 0.3, cy + 0.3, 0.56, smallIcons[c.k], HEX.accent1, c.label);
    s.addText(c.label, { x: x + 1.0, y: cy + 0.3, w: cw - 1.3, h: 0.56, fontSize: 18, bold: true, color: C.text1, margin: 0, valign: "middle", isTextBox: true, objectName: c.label + " title" });
    s.addText(c.lines.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < c.lines.length - 1, paraSpaceAfter: 10 } })), {
      x: x + 0.3, y: cy + 1.15, w: cw - 0.6, h: ch - 1.4, fontSize: 14, color: ex ? C.text1 : C.accent6, margin: 0, valign: "top", isTextBox: true, objectName: c.label + " lines",
    });
  });
  s.addText("Spending more credits doesn't score. A careful, cheap run beats an expensive one.", { x: 0.6, y: 5.55, w: 12.13, h: 0.35, fontSize: 12, italic: true, color: C.accent6, margin: 0, isTextBox: true, objectName: "Cost note" });
  s.addNotes(ex
    ? "Example. This slide is optional, but it makes it easy for judges to confirm the work ran on qBraid."
    : "Optional. Anything here helps judges confirm your work ran on qBraid. Make sure every link opens for anyone.");

  const file = path.join(OUT, ex ? "qbraid-award-example.pptx" : "qbraid-award-template.pptx");
  await pres.writeFile({ fileName: file });
  if (process.env.APPLY_THEME) {
    const { applyTheme } = require(process.env.APPLY_THEME);
    await applyTheme(file, THEME);
  }
  console.log("wrote", file);
}

(async () => {
  await buildDeck("template");
  await buildDeck("example");
})();
