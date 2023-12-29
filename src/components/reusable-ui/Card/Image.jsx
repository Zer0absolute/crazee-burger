import styled from "styled-components";

export default function Image({ imageSource, title }) {
    return (
        <ImageStyled>
            <img src={imageSource} alt={title} />
        </ImageStyled>
    )
}

const ImageStyled = styled.div`
    width: 200px;
    height: 145px;
    margin-top: 50px;
        
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;