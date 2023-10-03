import styled from "styled-components";

export const MainSpace = styled.div`
  width: 100%;
`;

export const FormSpace = styled.div`
  width: 100%;
`;

export const LogoSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
  @media (max-width: 768px) {
    padding: 2rem 0 2rem 0;
    margin-bottom: 2rem;
    background-color: #e61919;
    border-radius: 5px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;
