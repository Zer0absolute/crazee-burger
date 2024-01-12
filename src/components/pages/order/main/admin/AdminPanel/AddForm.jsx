import styled from "styled-components";

export default function AddForm() {
    return (
        <AddFormStyled>
            <div className="image-preview">
                image
            </div>
            <div className="input-fields">
                <input type="Nom" placeholder="nom"/>
                <input type="Nom" placeholder="image"/>
                <input type="Nom" placeholder="prix"/>
            </div>
            <button className="submit-button">
                Submit-button
            </button>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
    background: red;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;
    
    .image-preview {
        background: purple;
        grid-area: 1 / 1 / 4 / 2;
    }

    .input-fields {
        border: 1px solid blue;
        grid-area: 1 / 2 / -2 / 3;
        display: grid;
    }

    .submit-button {
        background: yellow;
        grid-area: 4 / -2 / -1 / -1;
        width: 50%;
    }
`;