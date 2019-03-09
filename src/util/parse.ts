export function parseNewlineString(input: string): string[] {
  return input.toLowerCase().split("\n").filter((line) => {
    return !line.startsWith("#") && line !== "";
  });
}
