import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Fahmi\n");
writer.write("Idris\n");

writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
  console.info(data.toString());
})
