function samplePromise() {
  return Promise.resolve("Fahmi Idris");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
