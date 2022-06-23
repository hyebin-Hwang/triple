import React, { ReactNode } from "react";
import styled from "styled-components";

type MainAwardsListType = {
  children: ReactNode;
  imageName: string;
  image: string;
};

export default function MainAwards() {
  return (
    <StyledMainAwardsContainer>
      <MainAwardsList
        image="image/play-store2x.png"
        imageName="playstore badge"
      >
        <p className="mainAwardsListBadgeInfo">2018 구글 플레이스토어</p>
        <p>올해의 앱 최우수상 수상</p>
      </MainAwardsList>
      <MainAwardsList image="image/badge-apple4x.png" imageName="apple badge">
        <p className="mainAwardsListBadgeInfo">2018 애플 앱스토어</p>
        <p>오늘의 여행앱 선정</p>
      </MainAwardsList>
    </StyledMainAwardsContainer>
  );
}

function MainAwardsList({ image, imageName, children }: MainAwardsListType) {
  return (
    <StyledMainAwardsListWrapper>
      <div className="awardsListImgWrapper">
        <img src={image} alt={imageName} />
      </div>
      <div className="awardsListTextWrapper">{children}</div>
    </StyledMainAwardsListWrapper>
  );
}

const StyledMainAwardsContainer = styled.div`
  display: flex;
  padding-top: 40px;
  .mainAwardsListBadgeInfo {
    padding-bottom: 3px;
  }
`;

const StyledMainAwardsListWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  flex: 0 0 50%;
  img {
    width: 54px;
    height: 54px;
  }
  .awardsListImgWrapper {
    margin-right: 10px;
    width: 54px;
    height: 54px;
  }
  .awardsListTextWrapper {
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
    font-size: 14px;
  }
`;
