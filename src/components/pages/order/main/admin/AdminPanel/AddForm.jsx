import { useContext } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../../context/AdminContext";

export default function AddForm() {
    const { handleAddProduct } = useContext(AdminContext)
    
    const newProduct = {
        id : new Date().getTime(),
        title : "new product",
        imageSource : "https://img.freepik.com/vecteurs-premium/logo-burger-vecteur-illustration-dessin-anime-icone_23987-764.jpg?w=1480",
        price : 2.5,
    }

    const handleSubmit = (event) => { 
        event.preventDefault()
        handleAddProduct(newProduct)
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
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