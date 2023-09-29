const fs = require("fs");
const http = require("http");
const https = require("https");
const urlModule = require("url");

if (process.argv.length !== 3) {
  console.error("Usage: node urls.js FILENAME");
  process.exit(1);
}

const fileName = process.argv[2];

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${fileName}: ${err.message}`);
    process.exit(1);
  }

  const urls = data.split("\n");

  urls.forEach((url) => {
    if (!url) return;

    const parsedUrl = urlModule.parse(url);
    const hostname = parsedUrl.hostname;
    const protocol = parsedUrl.protocol;

    const httpClient = protocol === "https:" ? https : http;

    httpClient
      .get(url, (response) => {
        let html = "";

        response.on("data", (chunk) => {
          html += chunk;
        });

        response.on("end", () => {
          const outputFileName = `${hostname}.html`;
          fs.writeFile(outputFileName, html, (err) => {
            if (err) {
              console.error(
                `Error writing to ${outputFileName}: ${err.message}`
              );
            } else {
              console.log(`Wrote to ${outputFileName}`);
            }
          });
        });
      })
      .on("error", (err) => {
        console.error(`Error downloading ${url}: ${err.message}`);
      });
  });
});
