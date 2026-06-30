const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

const config = {
  // Scan CMS block markdown too, so utility classes authored in content blocks
  // are detected and generated. Only cms/blocks holds class-bearing HTML; pages
  // and config are frontmatter-only, so they're excluded to keep builds fast.
  content: ["./src/**/*.{html,js,svelte,ts}", "./cms/blocks/**/*.md"],

  // Guaranteed palette for CMS authors: these are always generated even before
  // first use, so adding one to a block is predictable. The long tail (anything
  // else used in cms/**) is still picked up by content scanning above.
  safelist: [
    // text & typography
    "text-left", "text-center", "text-right", "text-justify", "text-start", "text-end",
    "italic", "not-italic", "underline", "line-through", "no-underline",
    "uppercase", "lowercase", "capitalize", "normal-case",
    { pattern: /^font-(light|normal|medium|semibold|bold|extrabold)$/ },
    // display & flex/grid
    "block", "inline-block", "inline", "flex", "inline-flex", "grid", "hidden",
    { pattern: /^flex-(row|col|wrap|nowrap|auto|none|1)$/ },
    { pattern: /^items-(start|center|end|stretch|baseline)$/ },
    { pattern: /^justify-(start|center|end|between|around|evenly)$/ },
    { pattern: /^gap-(0|1|2|3|4|5|6|8|10|12)$/ },
    // spacing (margin allows auto; padding does not)
    { pattern: /^m[trblxy]?-(0|1|2|3|4|5|6|8|10|12|16|auto)$/ },
    { pattern: /^p[trblxy]?-(0|1|2|3|4|5|6|8|10|12|16)$/ },
    // sizing
    { pattern: /^w-(full|auto|fit|min|max|1\/2|1\/3|2\/3|1\/4|3\/4)$/ },
    { pattern: /^max-w-(xs|sm|md|lg|xl|2xl|prose|full|none)$/ },
    // borders & effects
    { pattern: /^rounded(-(sm|md|lg|xl|2xl|full))?$/ },
    { pattern: /^shadow(-(sm|md|lg|xl))?$/ },
  ],

  theme: {
    extend: {},
  },

  plugins: [forms, typography, daisyui],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};

module.exports = config;
