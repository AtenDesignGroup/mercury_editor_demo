const postcssPresetEnv = require("postcss-preset-env");
const postcssInlineSvg = require("postcss-inline-svg");
const cssnano = require("cssnano");

// SVG encoding function for inline SVG
function encode(code) {
  return code
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s/g, "%20")
    .replace(/!/g, "%21")
    .replace(/\*/g, "%2A")
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/;/g, "%3B")
    .replace(/:/g, "%3A")
    .replace(/@/g, "%40")
    .replace(/&/g, "%26")
    .replace(/=/g, "%3D")
    .replace(/\+/g, "%2B")
    .replace(/,/g, "%2C")
    .replace(/\//g, "%2F")
    .replace(/\?/g, "%3F")
    .replace(/#/g, "%23")
    .replace(/\[/g, "%5B")
    .replace(/\]/g, "%5D");
}

module.exports = {
  plugins: [
    // Inline SVG support
    postcssInlineSvg({
      encode,
      paths: ["./images/icons"],
    }),

    // Modern CSS features
    postcssPresetEnv({
      stage: 1,
      features: {
        "custom-properties": false, // Keep custom properties for IE compatibility
        "focus-within-pseudo-class": false, // Prevent duplicate rules
      },
    }),

    // CSS optimization for production
    process.env.NODE_ENV === "production"
      ? cssnano({
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
            },
          ],
        })
      : false,
  ].filter(Boolean),
};
