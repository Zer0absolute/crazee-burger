import styled from "styled-components"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"
import { theme } from "../../../../theme";

export default function Card({ title, imageSource, leftDescription }) {
    return (
        <CardStyled>
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="text-info">
                <div className="title">{title}</div>
                <div className="left-description">
                    {leftDescription}
                    <div className="right-description">
                        <PrimaryButton className="primary-button" label="Ajouter" />
                    </div>
                </div>
            </div>
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
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    
    .image {
        width: 200px;
        height: 145px;
        margin-top: 50px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    
    .text-info {
        width: 200px;
        height: 110px;
        
        .title {
            font-size: ${theme.fonts.P4};
            font-family: Amatic SC;
            font-weight: ${theme.weights.bold};
            padding: 0px, 5px, 5px, 5px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            height: 46px;
        }
        
        .left-description {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            color: ${theme.colors.primary};
            
            .right-description {
                width: 90px;
                height: 38px;
                font-weight: ${theme.weights.bold};
                font-size: ${theme.fonts.XS};
            }
        }
    }
`;