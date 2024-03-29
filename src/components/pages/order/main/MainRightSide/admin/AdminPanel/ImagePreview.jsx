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
    grid-area: 1 / 1 / 5 / 2;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    .empty-image {
        display: flex;
        line-height: 1.5;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 1px solid ${theme.colors.greyLight};
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.greySemiDark};
        font-size: ${theme.fonts.size.P0};
    }
`;