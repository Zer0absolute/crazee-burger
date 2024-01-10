import styled from 'styled-components';
import { useState } from 'react';
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from '../../../../theme';
import Card from '../../../reusable-ui/Card/Card';
import { formatPrice } from "../../../../utils/maths"

export default function Menu() {
    const [menu, setMenu] = useState(fakeMenu2)

    return (
        <MenuStyled>
            {menu.map(({id, title, imageSource, price}) => {
                return <Card key={id} title={title} imageSource={imageSource} leftDescription={formatPrice(price)}></Card>
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    grid-row-gap: 60px;
    overflow-y: scroll;
    justify-items: center;
    padding: 50px 50px 150px;
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;