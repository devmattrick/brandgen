import DomainHackFuzzer from "./fuzzers/DomainHackFuzzer";
import Name from "./model/Name";

async function main() {
  const fuzzer = new DomainHackFuzzer();

  const fuzzes = await fuzzer.fuzz(new Name("litcom"));

  console.log(fuzzes);
}

main();
