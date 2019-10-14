import React from 'react';
import { 
    PortfolioCardContainer,
    PortfolioImage,
    PortfolioTitle,
    PortfolioDescription,
    PortfolioSummary,
    PortfolioGithub,
    PortfolioWebsite,
		ModalButton,
		ModalDiv
} from './PortfolioItemSytles';
import ToggleContent from '../../components/ToggleContent';
import Modal from "../../components/Modal";

const PortfolioItem = ({ id, title, description, summary, githubLink, websiteLink, image }) => {
    return (
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
                            <PortfolioGithub href={githubLink}> {githubLink}</PortfolioGithub>
                            <PortfolioWebsite href={websiteLink}> {websiteLink}</PortfolioWebsite>
                            <ModalButton onClick={hide}>&times;</ModalButton>
                        </ModalDiv>
                    </Modal>
                )}
                />
        </PortfolioCardContainer>
    );
};

export default PortfolioItem;

