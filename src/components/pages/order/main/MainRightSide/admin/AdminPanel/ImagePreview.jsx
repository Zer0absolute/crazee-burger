import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function ImagePreview({ imageSource, title }) {
    return (
        <ImagePreviewStyled>
            {imageSource ? <img src={imageSource} alt={title} /> : <div className="empty-image">Aucune image</div>}
        </ImagePreviewStyled>
    )
}

const ImagePreviewStyled = styled.div`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 200px;
        height: 200px;
        object-fit: contain;
        object-position: center;
        margin-top: 50px;
    }

    .empty-image {
        display: flex;
        line-height: 1.5;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        margin-top: 50px;
        border: 1px solid ${theme.colors.greyLight};
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.greySemiDark};
        font-size: ${theme.fonts.size.P0};
    }
`;