"use client";
import * as S from "./styles";
import { g6ToAdjacencyMatrix } from "./scripts/g6ToAdjacencyMatrix";
import { createGraph } from "./scripts/createGraph";
import { useState } from "react";

export default function Home() {
  const [adjacencyMatrix, setAdjacencyMatrix] = useState<any[][]>([]);
  function handleSubmit(event: any) {
    event.preventDefault();
    const graphInput = document.getElementById(
      "graph-input"
    ) as HTMLInputElement;
    const adjacencyMatrix = g6ToAdjacencyMatrix(graphInput.value);
    setAdjacencyMatrix(adjacencyMatrix);
    const graph = createGraph(adjacencyMatrix);
  }

  return (
    <S.Container>
      <S.Title>G6 FORMAT CONVERTER</S.Title>
      <S.Content>
        <S.Header>
          <form
            style={{ display: "flex", gap: "10px" }}
            onSubmit={handleSubmit}
          >
            <S.Input
              id="graph-input"
              type="text"
              placeholder="Insira o grafo"
            />
            <S.Button type="submit">Plotar</S.Button>
          </form>
        </S.Header>
        <S.Body id="graph-content"></S.Body>
      </S.Content>
    </S.Container>
  );
}
