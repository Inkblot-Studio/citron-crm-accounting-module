const inkblotSvgRaw = "<svg viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <!-- Background -->\r\n  <rect width=\"120\" height=\"120\" fill=\"#2563EB\" rx=\"8\" ry=\"8\"/>\r\n\r\n  <defs>\r\n    <polygon id=\"tri\" points=\"0,0 80,40 0,80\"/>\r\n  </defs>\r\n\r\n  <!-- Centered group with scale -->\r\n  <g fill=\"white\" transform=\"translate(60,60) scale(0.4) translate(-60,-130)\">\r\n    <!-- first triangle -->\r\n    <use href=\"#tri\" x=\"20\" y=\"0\"/>\r\n    <!-- second triangle, flipped horizontally -->\r\n    <use href=\"#tri\" x=\"20\" y=\"60\" transform=\"scale(-1,1) translate(-120,0)\"/>\r\n    <!-- third triangle -->\r\n    <use href=\"#tri\" x=\"20\" y=\"120\"/>\r\n    <!-- fourth triangle, flipped -->\r\n    <use href=\"#tri\" x=\"20\" y=\"180\" transform=\"scale(-1,1) translate(-120,0)\"/>\r\n  </g>\r\n</svg>\r\n";

function svgRawToDataUri(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
const inkblotDataUri = svgRawToDataUri(inkblotSvgRaw);
const BUNDLED_LOGO_BY_ASSET_PATH = {
  "/svg/inkblotstudio_logo.svg": inkblotDataUri
};
function accountingPublicOrigin() {
  return "";
}
function resolveBrandingLogoSrc(p) {
  if (!p) return "";
  const asset = typeof p.logoAssetPath === "string" ? p.logoAssetPath.trim() : "";
  if (asset.startsWith("/")) {
    const bundled = BUNDLED_LOGO_BY_ASSET_PATH[asset];
    if (bundled) return bundled;
    const origin = accountingPublicOrigin();
    if (origin) return `${origin}${asset}`;
    return asset;
  }
  const url = typeof p.logoUrl === "string" ? p.logoUrl.trim() : "";
  return url;
}

export { resolveBrandingLogoSrc as r };
