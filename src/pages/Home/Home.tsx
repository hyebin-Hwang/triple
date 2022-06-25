import { useRef } from 'react'
import styled from 'styled-components'

import useOpacityAnimation from '../../hooks/useOpacityAnimation'

import MainAwards from './MainAwards/MainAwards'
import MainInfo from './MainInfo/MainInfo'

const StyledImgWrapper = styled.div`
  width: 100%;
  img {
    width: 400px;
    height: 338px;
  }
`

const StyledHomeContainer = styled.section`
  display: grid;
  margin: 100px auto;
  width: 1200px;
  flex-wrap: nowrap;
  grid-template-columns: 1fr 1fr;
`

export default function Home() {
  const imgWrapperRef = useRef(null)

  useOpacityAnimation({ element: imgWrapperRef, duration: 0.7, delay: 0.1 })

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
  )
}
