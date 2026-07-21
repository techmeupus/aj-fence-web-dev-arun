// next.config.js
/**
 * Next.js configuration to allow dev origins for network access.
 */
module.exports = {
  // Export a static site for Hostinger
  output: "export",
  images: { unoptimized: true },
  // Adjust the origin if your IP changes.
  trailingSlash: true,
};
