import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 20px;
margin: 30px 0px;
`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme})=> theme.text}
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme}) => theme.textSoft};
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
`

const Comment = () => {
  return (
    <Container><Avatar src='https://www.creatopy.com/blog/wp-content/uploads/2018/01/Youtube-Channel-Template-Final-1.png'/>
    <Details>
        <Name> Hassan <Date> 2 day ago </Date> </Name>
        <Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Blanditiis, aspernatur sed adipisci distinctio quia temporibus minima corporis corrupti 
            laborum, recusandae est ad earum beatae, deserunt porro aut dolorem voluptate laboriosam!</Text>
    </Details>
    
    </Container>
  )
}

export default Comment