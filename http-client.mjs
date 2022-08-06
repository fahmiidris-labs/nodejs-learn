import https from "https";

const url = "https://hookb.in/JKpkLNkqVOUg1WBgVZzo"

const req = https.request(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
}, (res) => {
  res.addListener("data" , (data) => {
    console.info(`Receive data : ${data.toString()}`);
  })
});

const body = JSON.stringify({
  firstName: "Fahmi",
  lastName: "Idris",
});

req.write(body);
req.end();
