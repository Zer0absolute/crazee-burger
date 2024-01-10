import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
    return (
        <AdminPanelStyled>
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
`;