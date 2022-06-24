import gsap from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";
import useCountUp from "../../../hooks/useCountUp";
import useOpacityAnimation from "../../../hooks/useOpacityAnimation";

export default function MainInfo() {
  const infoRef = useRef(null);

  const travelerCount = useCountUp(2, 350, 345);
  const reviewCount = useCountUp(2, 21, 18);
  const scheduleCount = useCountUp(2, 650, 643);

  useOpacityAnimation({ element: infoRef, duration: 0.7, delay: 0.2 });

  return (
    <div ref={infoRef}>
      <StyledMainInfoText>
        <strong>{travelerCount}만 명</strong>의 사용자
      </StyledMainInfoText>
      <StyledMainInfoText>
        <strong>{reviewCount}만 개</strong>의 리뷰
      </StyledMainInfoText>
      <StyledMainInfoText>
        <strong>{scheduleCount}만 개</strong>의 저장
      </StyledMainInfoText>
    </div>
  );
}

const StyledMainInfoText = styled.p`
  font-size: 36px;
  color: rgb(58, 58, 58);
  padding-bottom: 10px;
  strong {
    font-weight: bold;
  }
`;
