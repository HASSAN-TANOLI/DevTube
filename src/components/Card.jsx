import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 350px;
margin-bottom: 35px;
cursor: pointer;
`;

const Image = styled.img`
width: 100%;
height: 202px;
border-color: #999;
`;

const Details = styled.div`
display: flex;
margin-top: 10px;

gap: 12px;

`;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
margin-top: 10px;


`;

const Texts = styled.div`
`;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme}) => theme.text};

`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme}) => theme.textSoft};
margin: 10px 0px;
`;
const Info = styled.div`
font-size: 14px;
color: ${({theme})=> theme.textSoft};
margin-top: 10px 0px;
`;
const Card = () => {

  return (
    <Container>
     <Image src="https://cdn.windowsreport.com/wp-content/uploads/2022/04/Untitled-design-2-2.jpg"/>

      <Details>
        <ChannelImage src="https://www.creatopy.com/blog/wp-content/uploads/2018/01/Youtube-Channel-Template-Final-1.png "/>
        <Texts>
          <Title>
            Test Video
          </Title>
          <ChannelName>Hassan Tech</ChannelName>
          <Info> 660,9980 views . 1 day ago </Info>
        </Texts>
      </Details>

    </Container>
  )


}


export default Card;
