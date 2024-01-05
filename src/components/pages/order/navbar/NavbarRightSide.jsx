import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";

export default function NavbarRightSide({ username }) {
    const [ isModeAdmin, setIsModeAdmin] = useState(false)

    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setIsModeAdmin(!isModeAdmin)
    }
    return (
        <NavbarRightSideStyled>
            <div className="admin-button">
                <ToggleButton 
                    labelIfChecked="DÉSACTIVER LE MODE ADMIN" 
                    labelIfUnchecked="ACTIVER LE MODE ADMIN"
                    onToggle={displayToastNotification}
                />
            </div>
            <Profile username={username} />
            <ToastAdmin />
        </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    .admin-button { 
        margin-right: 50px;
        font-family: 'Open Sans', sans-serif;
    }
`;