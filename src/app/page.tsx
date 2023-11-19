"use client";
import * as S from "./styles";

function handleSubmit(event: any) {
  event.preventDefault();
}

export default function Home() {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" />
            <button type="submit">Plotar</button>
          </form>
        </S.Header>
        <S.Body></S.Body>
      </S.Content>
    </S.Container>
  );
}
