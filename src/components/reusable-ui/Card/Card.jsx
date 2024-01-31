import styled from "styled-components"
import { theme } from "../../../theme";
import TextInfo from "./TextInfo";
import Image from "./Image";
import { TiDelete } from "react-icons/ti"

export default function Card({ title, imageSource, leftDescription, hasDeleteButton, onDelete }) {
    return (
        <CardStyled>
            {hasDeleteButton && <button className="delete-button" aria-label="delete-button" onClick={onDelete}>
                <TiDelete/>
            </button>}
            <Image imageSource={imageSource} title={title}/>
            <TextInfo title={title} leftDescription={leftDescription}/>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    width: 240px;
    display: grid;
    height: 330px;
    padding-left: 20px;
    position: relative;
    align-items: center;
    padding-right: 20px;
    padding-bottom: 10px;
    grid-template-rows: 65% 1fr;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};

    .delete-button {
        top: 15px;
        padding: 0;
        right: 15px;
        width: 30px;
        height: 30px;
        border: none;
        cursor: pointer;
        font-size: 30px;
        background: none;
        position: absolute;
        color: ${theme.colors.primary};

        &:hover {
            color: ${theme.colors.red};
        }

        &:active {
            color: ${theme.colors.primary};
        }
    }
`;