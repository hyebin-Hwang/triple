import React from "react";
import styled from "styled-components";

export default function MainInfo() {
  return (
    <div>
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
