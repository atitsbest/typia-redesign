import styled from "styled-components";
import { media, sizes } from "../utils/styles";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  ${media.giant`
    max-width: ${sizes.giant}rem;
  `}

  ${media.desktop`
    max-width: ${sizes.desktop}rem;
  `}

  ${media.tablet`
    max-width: ${sizes.tablet}rem;
  `}

  ${media.mobile`
    max-width: ${sizes.mobile}rem;
  `}
`;
