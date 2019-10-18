import React from 'react';
import backgroundImage from '../static/background.png';
import styled from 'styled-components';
import TextLoop from "react-text-loop";

const Wrapper = styled.div``;
const Container = styled.div`
position: relative;
text-align: center;`;
const Title = styled.h1`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);`;

const Home = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <img src={backgroundImage} alt="pencil"></img>
											<Title>
												<TextLoop>
																<span>Hello,</span>
																<span>Hola,</span>
																<span>你好,</span>
																{/* <span>Kamusta,</span> */}
														</TextLoop>{" "}I'm Michael Frantz. I am a full-stack web developer.
											</Title>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Home