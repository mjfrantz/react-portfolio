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
            <PortfolioImage></PortfolioImage>
            <PortfolioTitle>{title}</PortfolioTitle>
            <PortfolioDescription>{description}</PortfolioDescription>
            <PortfolioSummary>{summary}</PortfolioSummary>
            <PortfolioGithub href={githubLink}> {githubLink}</PortfolioGithub>
            <PortfolioWebsite href={websiteLink}> {websiteLink}</PortfolioWebsite>
        </PortfolioCardContainer>
    );
};

export default PortfolioItem;

{/* {links.map(link => (
                <a key={link.website} href={link.github}>{links}</a>
            ))} */}