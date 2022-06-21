import { productsMenu } from "../dropdownProducts";
import {
  Menus,
  StyledArrowSpan,
  StyledDropdown,
  StyledMenuItems,
} from "./DropdownProductsMenuStyled";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "./../img/Menu.svg";

//mainComponent
const DropdownMenu = ({ products }) => {
  const [list, setList] = useState([]);

  //populate

  useEffect(
    () => {
      let mySet = new Set();

      for (const product of products) {
        let string = product.category;
        let split = string.split("/");
        let array1 = [];
        let array2 = [];

        for (let some of split) {
          if (some !== "") {
            array1.push(some);
          }
        }
        mySet.add(array1[0]);
        mySet.add(array1);
      }
      let array4 = [];
      let array5 = [];

      for (let some of mySet) {
        if (typeof some === "string") {
          array4.push(some);
        } else {
          array5.push(some);
        }
      }
      console.log(array4);
      console.log(array5);
      for (let some of array4) {
        let answer = Array.prototype.flatMap(array5, some);
        console.log(answer);
      }

      console.log(mySet);
      setList(mySet);
      // if (category !== product) {
      //   productsMenu[0].submenu.push({
      //     title: category,
      //     linkTo: "/product" + product.category + product.id,
      //   });
      //   console.log(category);
      // }
    },
    [products],
    list
  );

  console.log(list);
  return (
    <Menus>
      {productsMenu.map((menu, index) => {
        const depthLevel = 0;
        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
      })}
    </Menus>
  );
};

//handle events and setup for dropdown
const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <StyledMenuItems
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          {items.title === "Products" ? (
            <a>
              <img src={MenuIcon} alt="menu"></img>
            </a>
          ) : (
            <a href={items.linkTo} onClick={() => setDropdown((prev) => !prev)}>
              {items.title}
            </a>
          )}

          {depthLevel > 0 ? (
            <StyledArrowSpan>{">"}</StyledArrowSpan>
          ) : (
            <span className="arrow" />
          )}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href={items.linkTo}> {items.title} </a>
      )}
    </StyledMenuItems>
  );
};

//handle from optionFile "menuItems.js"
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <StyledDropdown className={` ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {" "}
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </StyledDropdown>
  );
};

export default DropdownMenu;