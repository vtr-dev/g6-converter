import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100dvh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f5f;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 75%;
  overflow: auto;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  background-color: #111;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
