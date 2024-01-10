import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
    
    return (
        <AdminStyled>
            <AdminTabs />
            <AdminPanel />
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    left: 0;
    right: 0;
    bottom: 0px;
    position: absolute;
`;
