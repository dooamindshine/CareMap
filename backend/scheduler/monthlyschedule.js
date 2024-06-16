require("dotenv").config();
const db = require("../db");
var request = require("request");

const monthlySchedule = function () {
  const schools_url =
    "https://opendata.arcgis.com/api/v3/datasets/4c331993dab54b49bbc9debfc5928ec3_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1";
  const kindergarden_url =
    "https://opendata.arcgis.com/api/v3/datasets/7bac27e65a9a49abacbe6bfc06c8f75a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1";
  const socialchild_url =
    "https://opendata.arcgis.com/api/v3/datasets/0b9fc5dead0647ada3ea099c0c3bce7f_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1";
  const socialteenager_url =
    "https://opendata.arcgis.com/api/v3/datasets/ac80baa5f2b44f2799a45935e75a64ec_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1";
  const urls = [
    schools_url,
    kindergarden_url,
    socialchild_url,
    socialteenager_url,
  ];
  try {
    urls.forEach(async (fileUrl) => {
      request(fileUrl, async (error, response, body) => {
        if (!error && response.statusCode == 200) {
          var data = JSON.parse(body);
          
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
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = monthlySchedule;
