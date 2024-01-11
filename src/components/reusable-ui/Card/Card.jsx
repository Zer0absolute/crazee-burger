import styled from "styled-components"
import { theme } from "../../../theme";
import TextInfo from "./TextInfo";
import Image from "./Image";

export default function Card({ title, imageSource, leftDescription }) {
    return (
        <CardStyled>
            <Image imageSource={imageSource} title={title}/>
            <TextInfo title={title} leftDescription={leftDescription}/>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    display: grid;
    grid-template-rows: 65% 1fr;
    align-items: center;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
`;