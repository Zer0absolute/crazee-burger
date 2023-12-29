import styled from "styled-components"
import PrimaryButton from "../../../reusable-ui/PrimaryButton"

export default function Card({ title, imageSource, leftDescription }) {
    return (
        <CardStyled>
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="text-info">
                <div className="title">{title}</div>
                <div className="left-description">{leftDescription}</div>
                <div className="right-description">
                    <PrimaryButton className="primary-button" label="Ajouter"/>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    background: red;
    width: 240px;
    height: 330px;
    .image {
        width: 100px;
        height: auto;
        border: 1px solid purple;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .text-info {
        border: 1px solid purple;
        
        .title {
            border: 1px solid purple;
        }

        .left-description {
            border: 1px solid purple;
        }

        .right-description {
            border: 1px solid green;

            .primary-button {
                border: 1px solid purple;
            }
        }
    }
`;