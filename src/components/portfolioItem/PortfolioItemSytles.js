import styled from 'styled-components';

export const PortfolioCardContainer = styled.div`
    background: #ffff;
    display: block;
    float: left;
    width:25%;
    border: 2px solid;
    padding: 15px 15px 50px;
    margin: 0;
    position:relative;
`;
export const PortfolioTitle = styled.h1`
    color: black
    text-align: center`; 
export const PortfolioDescription = styled.p``;
export const PortfolioSummary = styled.p``;
export const PortfolioGithub = styled.a``;
export const PortfolioWebsite = styled.a``;
export const PortfolioImage = styled.img`
width: 100%;
 `;
export const ModalDiv = styled.div`
position: absolute;`

export const Modal = styled.div`
position: absolute;
`
export const ModalButton = styled.span`
color: #D2D2D2;
position: relative;
font-size: 40px;
bottom: 0;
right: 0;

&:hover,
&:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}`;

 