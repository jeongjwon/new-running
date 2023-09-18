// import Board from "../Board/Board";
import React, { useState } from "react";
// import Calendar from "../Calendar/Calendar";
import styled from "styled-components";

// import useLocalStorage from "../../hooks/useLocalStorage";

const Main = () => {
  //   const [records, setRecords] = useLocalStorage("records", []);

  return (
    <MainContainer>
      <MainItem>{/* <Calendar records={records} /> */}</MainItem>

      <MainItem>
        {/* <Board records={records} setRecords={setRecords} /> */}
      </MainItem>
    </MainContainer>
  );
};
const MainContainer = styled.main`
  display: flex;
  width: 100%;
  background-color: aliceblue;
  border: 0.3rem solid #2e2e2e;
  border-radius: 0 0 2rem 2rem;
  border-top: none;
  /* overflow-y: hidden; */
  box-sizing: border-box;
`;
const MainItem = styled.div`
  padding: 1rem;
  :nth-child(1) {
    flex-grow: 3;
  }
  :nth-child(2) {
    flex-grow: 1;
    background-color: lightgray;
    border-radius: 0 0 1.6rem 0;
  }
`;
export default Main;
