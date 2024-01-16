import { useContext, useState } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../../context/AdminContext";

const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

export default function AddForm() {
    const { handleAddProduct } = useContext(AdminContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    
    const handleSubmit = (event) => { 
        event.preventDefault()
        const newProductToAdd = {
            id : crypto.randomUUID(),
            ...newProduct
        }
        handleAddProduct(newProductToAdd)
    }

    const handleChange = (event) => {
        setNewProduct({...newProduct, [event.target.name]:event.target.value})
    }
    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <div className="image-preview">{newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div>Aucune image</div>}</div>
            <div className="input-fields">
                <input 
                    name="title"
                    value={newProduct.title} 
                    type="Nom" 
                    placeholder="nom" 
                    onChange={handleChange}
                    />
                <input 
                    name="imageSource" 
                    value={newProduct.imageSource} 
                    type="Nom" 
                    placeholder="image" 
                    onChange={handleChange}
                />
                <input 
                    name="price" 
                    value={newProduct.price ? newProduct.price : ""} 
                    type="Nom" 
                    placeholder="prix" 
                    onChange={handleChange}
                />
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
        grid-area: 1 / 1 / 4 / 2;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
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