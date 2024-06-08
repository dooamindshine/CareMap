require("dotenv").config();
const db = require("../db");
var fs = require("fs");
const path = require("path");

const seedData = function () {
  try {
    const dataDir = path.join(__dirname, "./data");
    const files = fs.readdirSync(dataDir);
    console.log(files);
    files.forEach(async (jsonFile) => {
      const filePath = path.join(dataDir, jsonFile);
      if (path.extname(filePath) === ".geojson") {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const data = JSON.parse(fileContent);
        const type = data.name;
        const features = data.features;
        const bulk = [];
        features.forEach(async (feature) => {
          const props = feature.properties;
          const geometry = feature.geometry;
          const lat = geometry?.coordinates[0];
          const lang = geometry?.coordinates[1];
          const name = props?.KURZBEZEICHNUNG;
          const carries = props?.TRAEGER;
          const services = props?.LEISTUNGEN;
          const designation = props?.BEZEICHNUNG;
          const address = props?.STRASSE;
          const zipcode = props?.PLZ;
          const ort = props?.ORT;
          const telephone = props?.TELEFON;
          const email = props?.EMAIL;
          const fax = props?.FAX;
          const url = props?.URL ? props?.URL : props?.WWW;
          const sprachen = props?.SPRACHEN;

          bulk.push([
            lat,
            lang,
            name,
            type,
            carries,
            services,
            designation,
            address,
            zipcode,
            ort,
            telephone,
            email,
            fax,
            url,
            sprachen,
          ]);
        });
        const placeholders = bulk
          .map((row) => `(${new Array(row.length).fill("?").join(",")})`)
          .join(",");
        const finalList = bulk.flat();
        let sql = `INSERT INTO locations (lat, lang, name, type, carrier, services, designation , address, zipcode, ort, telephone, email, fax, url, language) VALUES ${placeholders}`;

        const [results, fields] = await db.query(sql, finalList);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedData;
