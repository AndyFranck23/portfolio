import fs from "fs";
import path from "path";

// Vos routes React Router
const routes = [
  "/", // Accueil
  "/Home", // Exemple de route supplémentaire
];

// Générer le contenu du fichier sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
        <url>
          <loc>https://andy23portfolio.netlify.app/${route}</loc>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join("")}
</urlset>`;

// Sauvegarder le fichier dans le dossier public
const outputPath = path.resolve("public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemapContent);

console.log("Sitemap généré avec succès :", outputPath);
