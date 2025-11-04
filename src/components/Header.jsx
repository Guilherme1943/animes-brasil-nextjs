"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import LoginModal from "./LoginModal";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo href="/">Encontre os Melhores Jogos </Logo>

          <Nav>
            <NavLink href="/">Menu</NavLink>
            <NavLink href="/animes">Jogos</NavLink>
            <NavLink href="/animes/novo">cadastre-se aqui!</NavLink>

            <LoginButton onClick={() => setShowLogin(true)}>
              <FaUserCircle size={26} />
            </LoginButton>
          </Nav>
        </HeaderContent>
      </HeaderContainer>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

// 💅 Estilos do Header
const HeaderContainer = styled.header`
  background color rgba(255, 0, 0, 1)
  color: rgba(0, 31, 206, 1);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 6px rgba(35, 255, 35, 1);
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #01d7fdff;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap; /* evita que o conteúdo estoure em telas pequenas */
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #18bd02ff;
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #eeff00ff;
  }
`;
