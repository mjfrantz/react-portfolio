import React from 'react';
import { 
    PortfolioCardContainer,
    PortfolioImage,
    PortfolioTitle,
    PortfolioDescription,
    PortfolioSummary,
    PortfolioGithub,
		PortfolioWebsite,
		PortfolioWrapper,
		ModalButton,
		ModalDiv
} from './PortfolioItemSytles';
import ToggleContent from '../../components/ToggleContent';
import Modal from "../../components/Modal";

const PortfolioItem = ({ id, title, description, summary, githubLink, websiteLink, image }) => {
    return (
        <PortfolioWrapper>
            <PortfolioCardContainer>
                <ToggleContent
                    toggle={show => <PortfolioImage src={image} alt='item' onClick={show}/>}
                    content={hide => (
                        <Modal>
                            <ModalDiv>
                                <PortfolioImage src={image} alt='item'/>
                                <PortfolioTitle>{title}</PortfolioTitle>
                                <PortfolioDescription>{description}</PortfolioDescription>
                                <PortfolioSummary>Made with: {summary}</PortfolioSummary>
                                <PortfolioGithub href={websiteLink} target="_blank"> Visit Site</PortfolioGithub>
                                <PortfolioWebsite href={githubLink} target="_blank"> Github</PortfolioWebsite>
                                <ModalButton onClick={hide}>&times;</ModalButton>
                            </ModalDiv>
                        </Modal>
                    )}
                    />
            </PortfolioCardContainer>
        </PortfolioWrapper>
    );
};

export default PortfolioItem;

