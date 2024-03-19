import React from "react";
import Header from "../Header/Header";
import RoutesConfig from "../../Routes/RoutesConfig";
import { Box } from "@mui/material";
import "./Footer.css";

const Footer = function() {
    return(
        <footer className="footer">
            <div className="footer__line"></div>
            <Box sx={{textAlign: "center"}}>
                &copy; 2024, Abinaya - Ecommerce Application. All rights reserved
            </Box>
        </footer>
    )
}
export default Footer;