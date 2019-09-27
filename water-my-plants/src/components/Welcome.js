import React from 'react'
import styled from 'styled-components'
import image from '../assets/sapling.png'

const WelcomeDiv = styled.div`
    margin: 0 auto;
    padding-top: 5rem;
    text-align: center;
`
const Image = styled.img`
    height: 20rem;
`

export default function Welcome() {
    return (
        <WelcomeDiv>
            <h1>Welcome</h1>
            <h2>Let's Grow Your Garden</h2>
            <Image src={image} />
        </WelcomeDiv>
    )
}