import styled from "styled-components";

export const Menus = styled.ul`
  display: flex;
  list-style: none;
  box-sizing: border-box;
`;

export const StyledMenuItems = styled.li`
  display: flex;
  list-style: none;
  justify-content: left;
  box-sizing: border-box;
  justify-self: center;
  img {
    justify-content: center;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
  }

  a {
    display: block;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    text-align: left;
    padding: 1rem 2rem;
    width: 100%;
  }
  a:hover {
    display: block;
  }
`;

export const StyledArrowSpan = styled.span`
  align-self: center;
  position: absolute;
  right: 0;

  &.arrow {
  }
`;

export const StyledDropdown = styled.ul`
  position: absolute;
  top: 4rem;
  height: 2rem;
  list-style: none;
  background-color: black;
  color: white;
  margin-left: 0.9px;
  display: none;
  border-radius: 8px;

  a:hover {
    transition: background 500ms;
    background-color: #525357;
    border-radius: 8px;
    filter: brightness(1.2);
  }
  &.show {
    display: block;
    height: fit-content;
  }
  &.dropdown-submenu {
    min-height: 100%;
    position: absolute;
    left: 100%;
    top: 0;
  }
`;
