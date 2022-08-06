function samplePromise() {
  return Promise.resolve("Fahmi Idris");
}

const name = await samplePromise();
console.info(name);
