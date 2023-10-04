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
        margin-bottom: -40px;
    }
`

const Detalle = styled.div`
    background: #213142;
    height: 1rem;
    text-align: center;
    color: white;
    padding: 4rem 0 2rem 0;
    font-family: 'Comfortaa', cursive;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`

const Footer = () => {
    return(<>
        <Img src={"/footer-mobile.png"}/>
        <Detalle>Desarrollado por Gonzalo Emiliano Villalba.</Detalle>
    </>)


}

export default Footer;