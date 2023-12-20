import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import TextInput from '../../reusable-ui/TextInput';

export default function LoginForm() {
    
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        setInputValue("")
        navigate(`order/${inputValue}`)
    }

    const handleChange = (event) => { 
        setInputValue(event.target.value)
    }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connectez-vous</h2>
            </div>
            <div className='form-container'>
                <TextInput 
                    value={inputValue} 
                    onChange={handleChange} 
                    placeholder={'Entrez votre prénom'}
                    Icon={<BsPersonCircle className='Icon'/>}
                    required 
                />
                <button>
                    <span>Accéder à mon espace</span>
                    <IoIosArrowForward className='Icon'/> 
                </button>
            </div>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};

    h1, h2 { 
        font-family: Amatic SC;
        text-align: center;
        font-weight: ${theme.weights.bold}
    }

    h1 {
        font-size: ${theme.fonts.P5};
        line-height: 61px;
    }

    hr { 
        width: 100%;
        border: 1px solid #F56A2C;
        margin-bottom: 40px;
    }

    h2 {
        font-size: ${theme.fonts.P4};
        line-height: 46px;
        margin: 20px 10px 10px;
    }
    
    .form-container { 
        display: flex;
        flex-direction: column;
        gap: 12.8px;
        width: 400px;
        
        button { 
            width: 100%;
            height: 55px;
            border-radius: ${theme.borderRadius.round};
            border: transparent;
            background-color: ${theme.colors.primary_burger};
            color: ${theme.colors.white};
            cursor: pointer;
            
            &:hover {
                background: ${theme.colors.white};
                color: ${theme.colors.primary_burger};
                border: 1px solid ${theme.colors.primary_burger};
            }

            &:focus-visible {
                outline: none;
            }

            &:focus {
                background-color: ${theme.colors.primary_burger};
                color: ${theme.colors.white};
            }
            
            .Icon { 
                margin-left: 10px;
                margin-bottom: -3.5px;
            }
        }
    }
`;