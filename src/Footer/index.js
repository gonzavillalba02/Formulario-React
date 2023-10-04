import styled from "styled-components";
import React from "react";

const Img = styled.img`
    width: 100%;
    display: none;
    margin: 0;
    @media (max-width: 768px) {
        display: block;
        line-height: 0px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        margin-bottom: -70px;
    }
`

const Footer = () => {
    return(<>
        <Img src={"/footer-mobile.png"}/>
    </>)


}

export default Footer;