import React from 'react';
import { 
    PortfolioCardContainer,
    PortfolioImage,
    PortfolioTitle,
    PortfolioDescription,
    PortfolioSummary,
    PortfolioGithub,
    PortfolioWebsite
} from './PortfolioItemSytles';

const PortfolioItem = ({ id, title, description, summary, githubLink, websiteLink, image }) => {
    return (
        <PortfolioCardContainer>
            <PortfolioTitle>{title}</PortfolioTitle>
            <PortfolioDescription>{description}</PortfolioDescription>
            <PortfolioSummary>{summary}</PortfolioSummary>
            <PortfolioGithub href={githubLink}> {githubLink}</PortfolioGithub>
            <PortfolioWebsite href={websiteLink}> {websiteLink}</PortfolioWebsite>
            <PortfolioImage src={image} alt='image' ></PortfolioImage>
        </PortfolioCardContainer>
    );
};

export default PortfolioItem;

