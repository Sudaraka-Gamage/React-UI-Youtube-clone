import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
    font-size: 12px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`;
const Text = styled.span`
    font-size: 13px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src="https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg"/>
        <Details>
            <Name>
                John Doe <Date>1 day ago</Date>
            </Name>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Labore accusantium repudiandae cupiditate non 
                officia illum similique ab et, eos nulla, porro id
            </Text>
        </Details>
    </Container>
  )
}

export default Comment