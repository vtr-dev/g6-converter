import { extractNumVertices } from "./extractNumVertices";
import { g6ToBinary } from "./g6ToBinary";

export function g6ToAdjacencyMatrix(g6: string) {
  const vertices = extractNumVertices(g6);
  const binList = g6ToBinary(g6);

  const adjMatrix = Array.from({ length: vertices }, () =>
    Array(vertices).fill(0)
  );

  let count = 0;
  for (let i = 0; i < vertices; ++i) {
    for (let j = i + 1; j < vertices; ++j) {
      adjMatrix[i][j] = adjMatrix[j][i] = parseInt(binList[count++], 10);
    }
  }

  return adjMatrix;
}
