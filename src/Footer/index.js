import styled from "styled-components";
import React from "react";

const Img = styled.img`
    width: 100%;
    display: none;
    @media (max-width: 768px) {
        display: initial;
        line-height: 0px;
        position: absolute;
        bottom: 0px;
    }
`

const Detalle = styled.div`
    background: #213142;
    height: 1rem;
    text-align: center;
    color: white;
    padding: 2rem;
    font-family: 'Comfortaa', cursive;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`

const Footer = () => {
    return(<>
        <Img src={"/footer-mobile.png"}/>
        <Detalle>Desarrollado por Gonzalo Emiliano Villalba</Detalle>
    </>)


}

export default Footer;