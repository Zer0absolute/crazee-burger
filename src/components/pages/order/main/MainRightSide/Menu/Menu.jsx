import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import Card from '../../../../../reusable-ui/Card/Card';
import { formatPrice } from "../../../../../../utils/maths"
import { useContext } from 'react';
import { AdminContext } from '../../../../../../context/AdminContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {

    const { menu, isModeAdmin, handleDelete, resetMenu } = useContext(AdminContext)

    if(menu.length === 0) {
        if(!isModeAdmin) return <EmptyMenuClient />
        return isModeAdmin && <EmptyMenuAdmin onReset={resetMenu}/>
    }

    return (
        <MenuStyled>
            {menu.map(({id, title, imageSource, price}) => {
                return (
                    <Card
                        key={id} 
                        title={title} 
                        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT} 
                        leftDescription={formatPrice(price)}
                        hasDeleteButton={isModeAdmin}
                        onDelete={() => handleDelete(id)}
                    />
                )
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
    box-shadow: ${theme.shadows.strong};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;