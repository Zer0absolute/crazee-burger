import { useContext, useState } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../../../context/AdminContext";
import TextInput from "../../../../../../reusable-ui/TextInput.jsx";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton.jsx";
import ImagePreview from "./ImagePreview.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import { getInputTextsConfig } from "./inputTextConfig"

export const EMPTY_PRODUCT = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

export default function AddForm() {
    const { handleAddProduct, newProduct, setNewProduct } = useContext(AdminContext)
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(),
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

    const inputTexts = getInputTextsConfig(newProduct)

    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
            <div className="input-fields">
                {inputTexts.map((input => (
                    <TextInput {...input} key={input.id} onChange={handleChange} />
                )))}
            </div>
            <div className="submit">
                <PrimaryButton 
                    label={"Ajouter un nouveau produit au menu"}
                    version="success"
                />
                {isSubmitted && <SubmitMessage />}
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    height: 100%;
    width: 70%;

    .input-fields {
        grid-area: 1 / 2 / -2 / 3;
        display: grid;
        grid-row-gap: 8px;
    }

    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
    }
`;