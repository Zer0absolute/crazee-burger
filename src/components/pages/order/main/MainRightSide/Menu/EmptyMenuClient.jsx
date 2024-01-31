import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyMenuClient() {
    return (
        <EmptyMenuClientStyled>
            <h1 className="title">Victime de notre succès ! :D</h1>
            <h1 className="description">De nouvelles recettes sont en cours de préparation.</h1>
            <h1 className="description">À très vite !</h1>
        </EmptyMenuClientStyled>
    )
}

const EmptyMenuClientStyled = styled.div`
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
`;