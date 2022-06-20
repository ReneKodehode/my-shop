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
  img {
    justify-content: center;
    border: none;
    margin: 0;
    padding: 0;
    width: 32px;
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
`;

export const StyledDropdown = styled.ul`
  position: absolute;
  top: 4rem;
  min-width: 10 rem;
  list-style: none;
  background-color: #242526;
  color: #dadce1;
  margin-left: 1px;
  display: none;
  border-radius: 8px;
  transition: height 500ms ease;

  a:hover {
    transition: background 500ms;
    background-color: #525357;
    border-radius: 8px;
  }
  &.show {
    display: block;
  }
  &.dropdown-submenu {
    position: absolute;
    left: 100%;
    height: inherit;
    top: 0;
  }
`;
