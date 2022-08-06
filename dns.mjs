import dns from "dns/promises";

const address = await dns.lookup("www.fahmiidris.dev")

console.info(address.address);
console.info(address.family);
