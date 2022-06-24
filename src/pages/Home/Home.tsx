import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
import useOpacityAnimation from "../../hooks/useOpacityAnimation";
import MainAwards from "./MainAwards/MainAwards";
import MainInfo from "./MainInfo/MainInfo";

export default function Home() {
  const imgWrapperRef = useRef(null);

  useOpacityAnimation({ element: imgWrapperRef, duration: 0.7, delay: 0.1 });

  return (
    <StyledHomeContainer>
      <StyledImgWrapper ref={imgWrapperRef}>
        <img src="image/triple2x.png" alt="main triple" />
      </StyledImgWrapper>
      <div>
        <MainInfo />
        <MainAwards />
      </div>
    </StyledHomeContainer>
  );
}

const StyledImgWrapper = styled.div`
  width: 100%;
  img {
    width: 400px;
    height: 338px;
  }
`;

const StyledHomeContainer = styled.section`
  display: grid;
  width: 1040px;
  margin: 100px auto;
  grid-template-columns: 1fr 0.8fr;
`;
