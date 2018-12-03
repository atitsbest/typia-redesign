import React from "react";
import { Container } from "./Container";
import styled from "styled-components"
import { typography } from "../utils/typography";

export const Footer = () => <footer>
    <Container>
        <Wrapper>
        <Logo>
            <img src="http://imagedb.trodat.co.uk/CommonPictures/Logos/uTypia-Logo[1].jpg" height="32" alt="logo" />
        </Logo>
        <Links>
            <Item><Link>AGB</Link></Item>
            <Item><Link>Impressum</Link></Item>
            <Item><Link>Contact us</Link></Item>
        </Links>
        <Links>
            <Item><Link>Privacy Policy &amp; Cookies</Link></Item>
            <Item><Link>Terms and Conditions</Link></Item>
        </Links>
        <Links>
            <Item><Link>Orders and retuns</Link></Item>
            <Item><Link>Shipping and Payment</Link></Item>
        </Links>
        <Links>
            <Item><Link>utypia.com</Link></Item>
            <Item><Link>uTypia Shop for Add Ons</Link></Item>
        </Links>
        <Copyright>
© copyright 2018, Trodat GmbH<br/> all rights reserved
</Copyright>
</Wrapper>
    </Container>
</footer>;

const Wrapper = styled.div`
    display: flex;
    align-items: felx-start;
    justify-content: space-between;
    padding: ${typography.rhythm(2)} 0 ${typography.rhythm(1)};
`;
const Logo = styled.div``;
const Links = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const Item = styled.li`
    list-style-type: none;
`;
const Link = styled.a`
    font-weight: bold;
`;
const Copyright = styled.div`
    color: #999;
`;
