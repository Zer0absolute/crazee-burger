import { useContext, useState } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../../context/AdminContext";

export default function AddForm() {
    const { handleAddProduct } = useContext(AdminContext)
    const [title, setTitle] = useState("")
    const [imageSource, setImageSource] = useState("")
    const [price, setPrice] = useState(0)
    
    const newProduct = {
        id : new Date().getTime(),
        title,
        imageSource,
        price,
    }

    const handleSubmit = (event) => { 
        event.preventDefault()
        handleAddProduct(newProduct)
        setTitle("")
        setImageSource("")
        setPrice("")
    }

    const handleTitle = (event) => { 
        setTitle(event.target.value)
    }
    const handleImage = (event) => { 
        setImageSource(event.target.value)
    }
    const handlePrice = (event) => { 
        setPrice(event.target.value)
    }

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">
                Aucune image
            </div>
            <div className="input-fields">
                <input value={title} type="Nom" placeholder="nom" onChange={handleTitle}/>
                <input value={imageSource} type="Nom" placeholder="image" onChange={handleImage}/>
                <input value={price ? price : ""} type="Nom" placeholder="prix" onChange={handlePrice}/>
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