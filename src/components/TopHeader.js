import React from "react";
import styled from "styled-components";
import { typography } from "../utils/typography";

export const TopHeader = () => (
  <Wrapper>
    <span>Cyber Sale: 25% Off - Use Code: CYBERMONDAY</span>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(0.33)} 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #000;
  color: #fff;
  font-weight: 700;
`;
