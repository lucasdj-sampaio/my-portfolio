import styled from "styled-components";

export const Bar = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  left: 0;
  padding: 0 50px;

  label {
    color: var(--textColor);
    font-size: 14px;
    margin-left: 10px;
  }
`

export const UserPhoto = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-around;
`

export const NavItems = styled.ul`  
  display: flex;
  align-items: center;

  li {
    display: inline;   
  }

  a {
    color: var(--textColor);
    font-size: 14px;
    margin-right: 12px;
    outline: none;
  }
`