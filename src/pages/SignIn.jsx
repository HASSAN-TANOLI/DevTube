import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme})=> theme.text};

`

const Title = styled.h1`
font-size: 24px;
margin-top: 20px;

`
const Subtitle = styled.h2`
font-size: 20px;
font-weight: 300;
margin-Bottom: 30px;

`
const Input = styled.input`
border: 1px solid ${({theme})=> theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;


`
const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({theme})=> theme.soft};
color: ${({theme})=> theme.textSoft};
`
const More = styled.div`
display: flex;
font-size: 12px;
margin-top: 10px;
color:  ${({theme})=> theme.textSoft};


`
const Links = styled.div`
margin-left: 50px;`
const Link = styled.span`
margin-left: 30px;`


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 50px;
    background-color: ${({theme})=> theme.bgLighter};
    border: 1px solid ${({theme})=> theme.bgLighter};
    gap: 10px;

`

const SignIn = () => {
  return (
    <Container>
        <Wrapper> 
            <Title>
                SignIn
            </Title>
            <Subtitle>
                To Continue to DevTube
            </Subtitle>
            <Input placeholder='username'/>
            <Input type="password" placeholder='password'/>
            <Button> SignIn</Button>

            <Title> or </Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type="password" placeholder='password'/>
            <Button> SignUp</Button>
             </Wrapper>
             <More>
                English(USA)
                <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
                </Links>
             </More>
    </Container>
  )
}

export default SignIn