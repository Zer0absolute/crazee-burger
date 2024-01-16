import { useContext, useState } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../../context/AdminContext";
import {FiCheck} from "react-icons/fi";

const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

export default function AddForm() {
    const { handleAddProduct } = useContext(AdminContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    const handleSubmit = (event) => { 
        event.preventDefault()
        const newProductToAdd = {
            id : crypto.randomUUID(),
            ...newProduct
        }
        handleAddProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        displaySuccessMessage()
    }

    const displaySuccessMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2500)
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
                    type="text" 
                    placeholder="Nom du produit (ex: Super Burger)" 
                    onChange={handleChange}
                    />
                <input 
                    name="imageSource" 
                    value={newProduct.imageSource} 
                    type="text" 
                    placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
                    onChange={handleChange}
                />
                <input 
                    name="price" 
                    value={newProduct.price ? newProduct.price : ""} 
                    type="number" 
                    placeholder="Prix" 
                    onChange={handleChange}
                />
            </div>
            <div className="submit">
                <button className="submit-button">
                    Submit-button
                </button>
                {isSubmitted && <div className="submit-message">
                    <FiCheck />
                    <span>Ajouté avec succès !</span>
                </div>}
            </div>
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

    .submit {
        background: yellow;
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;

        .submit-button {
            width: 50%;
        }

        .submit-message {
            border: 1px solid red;
        }
    }
`;