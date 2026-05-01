const ICONS = {
  "code-2": "{}",
  coffee: "JV",
  terminal: ">_",
  braces: "{ }",
  database: "DB",
  "message-square-text": "NL",
  brain: "AI",
  "table-2": "TB",
  sigma: "SG",
  "line-chart": "LC",
  atom: "RC",
  server: "SV",
  palette: "TW",
  cloud: "CL",
  container: "DK",
  "git-branch": "GT",
  "hard-drive": "OC",
  "building-2": "SP",
  code: "</>",
  squircle: "PY",
  layers: "IJ",
  "file-text": "PDF",
  wallet: "$",
  clapperboard: "MV",
  "scan-text": "OCR",
  sparkles: "AI",
  "graduation-cap": "ED",
};

export function getIconLabel(key) {
  return ICONS[key] || "{}";
}
