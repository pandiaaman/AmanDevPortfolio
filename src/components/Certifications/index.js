import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificationCard from "../Cards/CertificationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;
const DivWithBlockDisplay = styled.div`
  display: block;
`;
const Wrapper = styled.div`
  position: relative;
  display: block;

  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const index = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Certifications</Title>

        <DivWithBlockDisplay>
          <Slider {...settings}>
            {certifications.map((certificate, index) => (
              <CertificationCard certificate={certificate} />
            ))}
          </Slider>
        </DivWithBlockDisplay>
      </Wrapper>
    </Container>
  );
};

export default index;
