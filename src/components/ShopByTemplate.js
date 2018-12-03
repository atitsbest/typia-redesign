import React from "react";
import styled from "styled-components";
import { typography } from "../utils/typography";
import { Container } from "./Container";
import { SectionHeadline } from "./SectionHeadline";

const categories = [
  {
    title: "Monogram A01 Round Stamp",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage/ShowCWImage?key=96491&imageType=s&imageTable=template&useCache=1&webpath=%2F"
  },
  {
    title: "MONOGRAM A01 ROUND STAMP",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage/ShowCWImage?key=96491&imageType=s&imageTable=template&useCache=1&webpath=%2F"
  },
  {
    title: "Text Stamps",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage/ShowCWImage?key=96491&imageType=s&imageTable=template&useCache=1&webpath=%2F"
  },
  {
    title: "Text Stamps",
    src:
      "https://businessnext.utypia.com/UI/de-DE/_Shared/ShowImage/ShowCWImage?key=96491&imageType=s&imageTable=template&useCache=1&webpath=%2F"
  }
];

export const ShopByTemplate = ({ background }) => (
  <Wrapper background={background}>
    <Container>
      <SectionHeadline>Shop by Template</SectionHeadline>
      <List>
        {categories.map((cat, idx) => (
          <Item key={idx}>
            <Img src={cat.src} />
            <Title>{cat.title}</Title>
            <Description>40,6 mm x 40,6 mm</Description>
          </Item>
        ))}
      </List>
    </Container>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(2)} 1em ${typography.rhythm(2)};
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
  background: ${props => props.background};
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  justify-content: center;
`;

const Item = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  padding: ${typography.rhythm(2)};
  padding-bottom: ${typography.rhythm(0.5)};
  border: 1px solid #d8d8d8;
  margin-right: 1em;
  width: 17rem;
`;

const Img = styled.img``;

const Title = styled.strong`
  margin-top: ${typography.rhythm(1)};
  font-size: 1.15em;
`;
const Description = styled.span``;