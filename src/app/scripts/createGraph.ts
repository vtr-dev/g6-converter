import cytoscape from "cytoscape";

export function createGraph(adjacencyMatrix: any[][]) {
  const nodes = [];
  const edges = [];

  for (let i = 0; i < adjacencyMatrix.length; ++i) {
    nodes.push({
      data: { id: `${i + 1}` },
      position: { x: Math.random() * 300, y: Math.random() * 300 },
    });
  }

  for (let i = 0; i < adjacencyMatrix.length; ++i) {
    for (let j = i + 1; j < adjacencyMatrix.length; ++j) {
      if (adjacencyMatrix[i][j] === 1) {
        edges.push({
          data: {
            id: `edge-${i + 1}-${j + 1}`,
            source: `${i + 1}`,
            target: `${j + 1}`,
          },
        });
      }
    }
  }

  const cy = cytoscape({
    container: document.getElementById("graph-content"),
    elements: {
      nodes,
      edges,
    },
    minZoom: 1, // Define o nível mínimo de zoom
    maxZoom: 1, // Define o nível máximo de zoom
    style: [
      {
        selector: "node",
        style: {
          height: 80,
          width: 80,
          "background-color": "#282828",
          content: "data(id)",
          "text-valign": "center",
          "text-halign": "center",
          color: "#fff",
          "font-size": 16,
        },
      },
      {
        selector: "edge",
        style: {
          width: 5,
          "line-color": "#666",
        },
      },
    ],
    layout: {
      name: "cose",
      padding: 15000000,
    },
  });

  return cy;
}
