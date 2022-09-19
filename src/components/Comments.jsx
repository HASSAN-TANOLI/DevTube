import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
    

`

const NewComment = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;`

const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme}) => theme.soft};
background-color: transparent;
padding: 5px;
outline: none;
width: 100%;
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src = "https://www.creatopy.com/blog/wp-content/uploads/2018/01/Youtube-Channel-Template-Final-1.png"/> 
              <Input placeholder="Add a Comment.."/>  
            
        </NewComment>

    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>

    </Container>
  )
}

export default Comments