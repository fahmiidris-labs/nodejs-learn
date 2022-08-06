import { URL } from "url";

const fahmiidris = new URL("https://www.fahmiidris.dev/blog?q=hi-world");

console.info(fahmiidris.toString());
console.info(fahmiidris.href);
console.info(fahmiidris.protocol);
console.info(fahmiidris.host);
console.info(fahmiidris.pathname);
console.info(fahmiidris.searchParams);