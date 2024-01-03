import styled from 'styled-components';
import PrimaryButton from '../PrimaryButton';
import { theme } from '../../../theme';

export default function TextInfo({ title, leftDescription }) {
    return (
        <TextInfoStyled>
            <div className="title">{title}</div>
            <div className="left-description">
                {leftDescription}
                <div className="right-description">
                    <PrimaryButton className="primary-button" label="Ajouter" />
                </div>
            </div>
        </TextInfoStyled>
    )
}

const TextInfoStyled = styled.div`
    width: 200px;
    height: 110px;
    
    .title {
        font-size: ${theme.fonts.P4};
        font-family: Amatic SC;
        font-weight: ${theme.weights.bold};
        padding: 0px, 5px, 5px, 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        height: 46px;
    }
    
    .left-description {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        color: ${theme.colors.primary};
        
        .right-description {
            width: 90px;
            height: 38px;
            font-weight: ${theme.weights.bold};
            font-size: ${theme.fonts.XS};
        }
    }
`;