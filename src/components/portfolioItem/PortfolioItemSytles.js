import styled from 'styled-components';

export const PortfolioWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const PortfolioCardContainer = styled.div`
    background: #ffff;
    display: flex;
    float: left;
    width:25%;
    position:relative;
    
`;
export const PortfolioTitle = styled.h1`
    color: black
    text-align: center`; 
export const PortfolioDescription = styled.p``;
export const PortfolioSummary = styled.p``;
export const PortfolioGithub = styled.a`
    background-color: #1B242D;
    color: #FFF
    font-size: 1em;
    // margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #1B242D;
    border-radius: 3px;
    text-decoration: none;
    // display: space-between;
    align:left;

    &:hover,
    &:focus {
    background-color: #FFF;
    color: #1B242D;
    text-decoration: none;
    cursor: pointer;
    `
export const PortfolioWebsite = styled.a`background-color: #1B242D;
    color: #FFF
    font-size: 1em;
    margin-left: 0.5em;
    padding: 0.25em 1em;
    border: 2px solid #1B242D;
    border-radius: 3px;
    text-decoration: none;
    
    &:hover,
    &:focus {
    background-color: #FFF;
    color: #1B242D;
    text-decoration: none;
    cursor: pointer;`

export const PortfolioImage = styled.img`
    width: 100%;
 `;
export const ModalDiv = styled.div`
    position: absolute;
`

export const Modal = styled.div`
    position: absolute;
`
export const ModalButton = styled.span`
    color: #D2D2D2;
    position: absolute;
    font-size: 40px;
    bottom: 0px;
    right: 10px;

    &:hover,
    &:focus {
    color: #1B242D;
    text-decoration: none;
    cursor: pointer;
}`;

 