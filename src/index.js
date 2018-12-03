import React from "react";
import ReactDOM from "react-dom";
import { TypographyStyle, GoogleFont } from "react-typography";
import { typography } from "./utils/typography";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HeroSlider } from "./components/HeroSlider";
import { Sales } from "./components/Sales";
import { ShopByCategory } from "./components/ShopByCategory";
import { ShopByTemplate } from "./components/ShopByTemplate";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <TopHeader />
      <Container>
        <Header />
        <Nav />
      </Container>
      <HeroSlider>
        <Hero background="#f5f5f5" color="#000" />
        <Hero background="#000" color="#fff" />
        <Hero background="#aa2e34" color="#fff" />
        <Hero background="#308e26" color="#fff" />
      </HeroSlider>
      <Sales />
      <ShopByTemplate background="#f5f5f5" />
      <ShopByCategory background="#fff" />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
