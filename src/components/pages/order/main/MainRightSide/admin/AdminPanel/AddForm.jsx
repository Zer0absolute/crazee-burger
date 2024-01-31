import { useContext, useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { AdminContext } from "../../../../../../../context/AdminContext";
import { theme } from "../../../../../../../theme/index.jsx";
import TextInput from "../../../../../../reusable-ui/TextInput.jsx";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton.jsx";
import ImagePreview from "./ImagePreview.jsx";

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
    return (
        <AddFormStyled onSubmit={handleSubmit}>
            <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
            <div className="input-fields">
                <TextInput 
                    name="title"
                    value={newProduct.title} 
                    placeholder="Nom du produit (ex: Super Burger)" 
                    onChange={handleChange}
                    Icon={<FaHamburger />}
                    version="minimalist"
                    />
                <TextInput 
                    name="imageSource" 
                    value={newProduct.imageSource} 
                    placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
                    onChange={handleChange}
                    Icon={<BsFillCameraFill />}
                    version="minimalist"
                />
                <TextInput 
                    name="price" 
                    value={newProduct.price ? newProduct.price : ""} 
                    placeholder="Prix" 
                    onChange={handleChange}
                    Icon={<MdOutlineEuro />}
                    version="minimalist"
                />
            </div>
            <div className="submit">
                <PrimaryButton 
                    label={"Ajouter un nouveau produit au menu"}
                    version="success"
                />
                {isSubmitted && <div className="submit-message">
                    <FiCheck className="icon"/>
                    <span className="message">Ajouté avec succès !</span>
                </div>}
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

        .submit-message {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${theme.colors.success};
            margin-left: 15px;

            .icon {
                border-radius: ${theme.borderRadius.circle};
                border: 1px solid ;
                margin-right: 5px;
                width: 1em;
                height: 1em;
            }

            .message {
                font-size: ${theme.fonts.size.SM};
            }
        }
    }
`;