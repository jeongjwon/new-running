import Board from "./Board";
import Calendar from "./Calendar";
import React, { useState } from "react";

import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStroage";

const Main = () => {
  const [records, setRecords] = useLocalStorage("records", []);

  return (
    <MainContainer>
      <MainItem>
        <Calendar records={records} />
      </MainItem>

      <MainItem>
        <Board records={records} setRecords={setRecords} />
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
  box-sizing: border-box;
`;
const MainItem = styled.div`
  padding: 1rem;
  &:first-child {
    flex: 3;
  }
  &:last-child {
    flex: 1;
    background-color: lightgray;
    border-radius: 0 0 1.6rem 0;
  }
`;
export default Main;
