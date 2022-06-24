import { useRef } from 'react'
import styled from 'styled-components'

import useCountUp from '../../../hooks/useCountUp'
import useOpacityAnimation from '../../../hooks/useOpacityAnimation'

const StyledMainInfoText = styled.p`
  font-size: 36px;
  color: rgb(58, 58, 58);
  padding-bottom: 10px;
  strong {
    font-weight: bold;
  }
`

export default function MainInfo() {
  const infoRef = useRef(null)

  const travelerCount = useCountUp({ second: 2, end: 350, slowPoint: 345 })
  const reviewCount = useCountUp({ second: 2, end: 21, slowPoint: 18 })
  const scheduleCount = useCountUp({ second: 2, end: 650, slowPoint: 643 })

  useOpacityAnimation({ element: infoRef, duration: 0.7, delay: 0.2 })

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
  )
}
