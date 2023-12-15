import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

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
                <div className='input-container'>
                    <input
                        value={inputValue}
                        onChange={handleChange}
                        type="text"
                        placeholder='Entrez votre prénom'
                        required 
                    />
                    <BsPersonCircle />
                </div>
                <button>
                    Accéder à mon espace
                    <IoIosArrowForward />
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

    h2 {
        font-size: ${theme.fonts.P4};
        line-height: 46px;
    }

    hr { 
        width: 100%;
        border: 1px solid #F56A2C;
    }

    
    
    .form-container { 
        display: flex;
        flex-direction: column;
        gap: 12.8px;
        width: 400px;
        
        .input-container {
            width: 100%;
            position: relative;

            input { 
                width:  100%;
                height: 55px;
                border-radius: ${theme.borderRadius.round};
                border: transparent;
                color: ${theme.colors.dark};
                padding: 18px 24px 18px 52px;
                

                &:focus-visible {
                    outline: none;
                }

                &::placeholder { 
                    color:#D3D3D3;
                }
            }

            svg {
                position: absolute;
                color: #747B91;
                left: 24px;
                bottom: 20px;
            }
        }
        
        button { 
            width: 100%;
            height: 55px;
            border-radius: ${theme.borderRadius.round};
            border: transparent;
            background-color: ${theme.colors.primary_burger};
            color: ${theme.colors.white};
            
            &:hover {
                background: ${theme.colors.white};
                color: ${theme.colors.primary_burger};
                border: 1px solid ${theme.colors.primary_burger};
            }
            
            svg { 
                margin-left: 10px;
                margin-bottom: -3.5px;
            }
        }
    }
    
`;