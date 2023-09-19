import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Hedaer";
import Main from "./components/Main";
function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}
export const Container = styled.div`
  background-color: rgba(0, 248, 125, 0.4);
  position: relative;
  height: 100vh;
  padding: 5rem 8rem;
`;
export default App;
