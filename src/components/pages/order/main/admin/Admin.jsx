import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";

export default function Admin() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    
    return (
        <AdminStyled>
            <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
            {!isCollapsed && <AdminPanel />}
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    left: 0;
    right: 0;
    bottom: 0px;
    position: absolute;
`;