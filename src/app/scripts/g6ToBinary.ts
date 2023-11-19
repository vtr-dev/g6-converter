export function g6ToBinary(g6: string) {
  let binList = "";

  for (let i = 1; i < g6.length; ++i) {
    binList += (g6.charCodeAt(i) - 63).toString(2).padStart(6, "0");
  }

  return binList;
}
