import styled from "styled-components";
import React from "react";

const Img = styled.img`
    width: 100%;
    display: none;
    margin: 0;
    @media (max-width: 768px) {
        display: block;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`


const Footer = () => {
    return(<>
        <Img src={"/footer-mobile.png"}/>
    </>)


}

export default Footer;