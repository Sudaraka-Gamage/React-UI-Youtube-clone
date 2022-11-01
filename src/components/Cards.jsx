import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "340px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "110px" : "202px"};
    background-color: #999;
    flex: 1;
`; 

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  margin-left: ${(props) => props.type === "sm" && "10px"};
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text};
`;

const Cards = ({ type }) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image type={type} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
      <Details type={type}>
        <ChannelImage type={type} src="https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg" />
        <Texts type={type}>
          <Title>Test Video</Title>
          <ChannelName>Sumo Dev</ChannelName>
          <Info>660,908 views . 1 day ago</Info>  
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Cards