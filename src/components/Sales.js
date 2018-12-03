import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";

import { typography } from "../utils/typography";
import { Container } from "./Container";
import { SectionHeadline } from "./SectionHeadline";

const categories = [
  {
    title: "Original Printy 4.0 - 4913",
    src:
      "https://dccsit-my.sharepoint.com/personal/smeissner_dccsintra_net/Documents/F%C3%BCr%20jeden%20freigegeben/ShowImage.jpg"
  },
  {
    title: "Original Printy 4.0 - 4915-2",
    src:
      "https://dccsit-my.sharepoint.com/personal/smeissner_dccsintra_net/Documents/F%C3%BCr%20jeden%20freigegeben/ShowImage.jpg"
  },
  {
    title: "Original Printy 4.0 - 4913",
    src:
      "https://dccsit-my.sharepoint.com/personal/smeissner_dccsintra_net/Documents/F%C3%BCr%20jeden%20freigegeben/ShowImage.jpg"
  },
  {
    title: "Original Printy 4.0 - 4913",
    src:
      "https://dccsit-my.sharepoint.com/personal/smeissner_dccsintra_net/Documents/F%C3%BCr%20jeden%20freigegeben/ShowImage.jpg"
  }
];

export const Sales = ({ background }) => (
  <Wrapper background={background}>
    <Container>
      <SectionHeadline>Special Offers</SectionHeadline>
      <List>
        <ActionItem>
          <ChevronLeftIcon size={38} />
        </ActionItem>
        {categories.map((cat, idx) => (
          <Item key={idx}>
            <ImgWrapper>
              <Img src={cat.src} />
            </ImgWrapper>
            <Title>{cat.title}</Title>
            <Price>&euro;49,99</Price>
          </Item>
        ))}
        <ActionItem>
          <ChevronRightIcon size={38} />
        </ActionItem>
      </List>
    </Container>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(2)} 1em ${typography.rhythm(2)};
  display: flex;
  flex-direction: column;
  background: ${props => props.background};
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  list-style-type: none;
`;

const ImgWrapper = styled.div`
  height: 15rem;
  width: 17rem;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  padding-bottom: ${typography.rhythm(0.5)};
  margin: 0 0.75em;
  cursor: pointer;
`;

const ActionItem = styled.li`
  height: 15rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img``;

const Title = styled.strong`
  margin-top: ${typography.rhythm(0.25)};
  font-size: 1.15em;
`;

const Price = styled.span``;
