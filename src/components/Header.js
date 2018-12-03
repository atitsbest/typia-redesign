// http://imagedb.trodat.co.uk/CommonPictures/Logos/uTypia-Logo[1].jpg

import React from "react";
import styled from "styled-components";
import SearchIcon from "mdi-react/SearchIcon";
import PermIdentityIcon from "mdi-react/PermIdentityIcon";
import ShoppingCartIcon from "mdi-react/ShoppingCartIcon";
import HamburgerMenu from "react-hamburger-menu";
import { typography } from "../utils/typography";
import { media } from "../utils/styles";

export const Header = () => (
  <Wrapper>
    <UserActions>
      <MobileMenu>
        <HamburgerMenu isOpen={false} height={16} width={24} />
      </MobileMenu>
      <Search>
        <SearchIcon />
        <SearchField value="Suche" />
      </Search>
    </UserActions>
    <Logo>
      <Img
        src="https://dccsit-my.sharepoint.com/personal/smeissner_dccsintra_net/Documents/F%C3%BCr%20jeden%20freigegeben/trodat-logo.png"
        height="50px"
        alt="logo"
      />
    </Logo>
    <UserActions>
      <SignIn>
        <PermIdentityIcon />
        Sign in
      </SignIn>
      <Cart>
        <ShoppingCartIcon />
        Cart
      </Cart>
    </UserActions>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  padding: ${typography.rhythm(0.5)} 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 0 2em;

  ${media.tablet`
    margin-bottom: ${typography.rhythm(0.5)};
    align-items: center;
  `}
`;

const MobileMenu = styled.li`
  && {
    display: none;
    ${media.tablet`display: flex;`}
  }
`;

const Logo = styled.div`
  flex: 1 0 33.33%;
  display flex;
  justify-content: center;
  margin: ${typography.rhythm(0.5)};
`;

const Img = styled.img`
  margin: 0;
`;

const Search = styled.li`
  flex: 1 1 33.33%;
  color: #000;
  font-size: 0.93em;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const SearchField = styled.input`
  border: none;
`;

const UserActions = styled.ul`
  display: flex;
  flex: 1 0 33.33%;
  list-style-type: none;
  justify-content: flex-end;
  padding: 0;
  margin: 0;

  > li {
    margin: 0 1em;
    color: #000;
    font-size: 0.93em;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
`;

const SignIn = styled.li``;

const Cart = styled.li``;
