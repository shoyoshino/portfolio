import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <main>
      <Firstview>
        <h2>HOME</h2>
      </Firstview>
    </main>
  );
};

export default Home;

const Firstview = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
