import React, { FC } from "react";
import styled from "styled-components";

// Components
import BackgroundImage from "./BackgroundImage";

// Styles
const StyledHero = styled.div`
  height: 50vh;
  margin: 82 auto 0;
  max-width: 2200px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    height: calc(100vh - 80px);
  }
`;

const Content = styled.div`
  bottom: 0;
  left: 0;
  padding: 1.5rem 0;
  /* TODO: pass text-align as property */
  text-align: left;
  width: 100vw;

  @media (min-width: 576px) {
    padding: 3rem 1rem;
  }

  h1 {
    @media (max-width: 767px) {
      font-size: 1.525rem !important;
    }
  }
`;

const Heading = styled.h1`
  @media (max-width: 767px) {
    font-size: 1.525rem !important;
  }
`;

// Types
interface HeroProps {
  image: any;
  title: string;
}

const Hero: FC<HeroProps> = ({ image, title }) => {
  return (
    <StyledHero>
      <BackgroundImage image={image} />
      <Content className="position-absolute">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-8 col-xl-6">
              <Heading className="mb-0 text-white">{title}</Heading>
            </div>
          </div>
        </div>
      </Content>
    </StyledHero>
  );
};

export default Hero;
