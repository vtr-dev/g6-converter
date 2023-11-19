import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 75%;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px;
`;

export const Title = styled.div`
  display: flex;
  width: 75%;
  height: 10%;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  background-color: #282828;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  background-color: #fff;
`;

export const Input = styled.input`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #282828;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #282828;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
`;
