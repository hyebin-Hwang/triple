import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function MainInfo() {
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      infoRef.current!,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.2 }
    );
  }, []);

  return (
    <div ref={infoRef}>
      <StyledMainInfoText>
        <strong>700만 명</strong>의 여행자
      </StyledMainInfoText>
      <StyledMainInfoText>
        <strong>100만 개</strong>의 여행 리뷰
      </StyledMainInfoText>
      <StyledMainInfoText>
        <strong>470만 개</strong>의 여행 일정
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
