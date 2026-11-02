/* ==================================================
 *  GLOBALS AND PLUGINS
 * ================================================== */
const repoDir = "/GA-Undergrad-Student-Work-26-27/COMP302-303-2424395-Devlog";


/* ==================================================
 *  ELEVENTY CONFIGURATION
 * ================================================== */
export default async function (eleventyConfig, options = {}) {

  // URL prefix based on environment
  const pathPrefix = process.env.ELEVENTY_ENV === "production" ? repoDir : "/";

  // Images and videos
  eleventyConfig.addPassthroughCopy("src/assets");

  // GLOBAL DATA : Path prefix for URLs
  eleventyConfig.addGlobalData("pathPrefix", pathPrefix);

  // TRANSFORM : Add path prefix to all URLs in HTML output
  eleventyConfig.addTransform("fix-all-asset-paths", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html") && pathPrefix !== "/") {
      console.log(`Applying path prefix ${pathPrefix} to assets in ${outputPath}`);
      
      const assetRegex = /(src|href|poster)=(["'])(\/?(?:assets\/[^"']+))\2/gi;
      
      return content.replace(assetRegex, function(match, attr, quote, path) {
        // If already has the prefix, do nothing
        if (path.startsWith(pathPrefix)) {
          return match;
        }
        
        // Remove leading slash if present
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        
        // Add the prefix
        const newPath = `${pathPrefix}${cleanPath}`;
        console.log(`  ${attr}: ${path} -> ${newPath}`);
        
        return `${attr}=${quote}${newPath}${quote}`;
      });
    }
    return content;
  });

  // FILTER : URLs
  eleventyConfig.addFilter("addPathPrefix", function(url) {
    if (!url || pathPrefix === "/" || !url.startsWith('/')) return url;
    if (url.startsWith(pathPrefix)) return url;
    return `${pathPrefix}${url.slice(1)}`;
  });

  

  // COLLECTION : Posts
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("post");
  });

  // RETURN
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    pathPrefix: pathPrefix,
    templateFormats: ["njk", "md", "html", "liquid", "11ty.js"],
  };

}