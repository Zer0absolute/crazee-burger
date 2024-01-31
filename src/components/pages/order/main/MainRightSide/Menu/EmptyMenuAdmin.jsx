import styled from "styled-components";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton.jsx";
import { theme } from "../../../../../../theme/index.jsx";

export default function EmptyMenuAdmin({ onReset }) {
    return (
        <EmptyMenuAdminStyled>
            <h1 className="title">Le menu est vide ?</h1>
            <h1 className="description">Cliquez ci-dessous pour le réinitialiser</h1>
            <PrimaryButton
                onClick={onReset}
                label={"Générer de nouveaux produits"}
                version={"normal"}
            />
        </EmptyMenuAdminStyled>
    )
}

const EmptyMenuAdminStyled = styled.div`
    background-color: ${theme.colors.background_white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${theme.shadows.strong};

    .title,
    .description {
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
    }

    .title {
        font-weight: ${theme.fonts.weights.bold};
    }

    .description {
        font-weight: ${theme.fonts.weights.light};
        margin-top: 0;
    }

    button {
        width: auto;
        height: 50px;
    }
`;












































































// background-color: ${theme.colors.background_white};
//     box-shadow: ${theme.shadows.strong};
//     border-bottom-right-radius: ${theme.borderRadius.extraRound};
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center; // permet de diminuer la largeur du bouton resetMenu

//     .title,
//     .description {
//         text-align: center;
//         font-family: "Amatic SC", cursive;
//         color: ${theme.colors.greyBlue};
//     }

//     .title {
//         font-size: ${theme.fonts.size.P4};
//         font-weight: ${theme.fonts.weights.semiBold};
//     }

//     .description {
//         font-size: ${theme.fonts.size.P4};
//         font-weight: ${theme.fonts.weights.light};
//         margin-top: 20px;
//     }

//     button {
//         margin-top: 30px;
//         font-size: ${theme.fonts.size.XS};
//         width: auto;
//         height: 50px;
//     }