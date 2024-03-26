// Sitemap.js
import React from "react";

const Sitemap = () => {
  const xmlContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://itelmobile.tech/</loc>
        <lastmod>2023-12-28</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <!-- Add more URLs as needed -->
    </urlset>
  `;

  return <React.Fragment>{xmlContent}</React.Fragment>;
};

export default Sitemap;
