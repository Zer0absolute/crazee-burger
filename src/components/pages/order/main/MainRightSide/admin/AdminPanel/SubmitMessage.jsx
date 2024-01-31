import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../../theme";

export default function SubmitMessage() {
    return (
        <SubmitMessageStyled>
            <FiCheck className="icon"/>
            <span className="message">Ajouté avec succès !</span>
        </SubmitMessageStyled>
    )
}

const SubmitMessageStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.success};
    margin-left: 15px;

    .icon {
        border-radius: ${theme.borderRadius.circle};
        border: 1px solid ;
        margin-right: 5px;
        width: 1em;
        height: 1em;
    }

    .message {
        font-size: ${theme.fonts.size.SM};
    }
`;
