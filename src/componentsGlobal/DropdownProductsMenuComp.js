import { productsMenu } from "../dropdownProducts";
import {
  Menus,
  StyledArrowSpan,
  StyledDropdown,
  StyledMenuItems,
} from "./DropdownProductsMenuStyled";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "./../img/Menu.svg";
import Products from "../ProductLists";
import Categories from "../CategoryList";

//mainComponent
const DropdownMenu = () => {
  const setAllProductsToMenu = (
    submenu,
    Menu,
    productCategory,
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5
  ) => {
    switch (submenu) {
      case "0":
        if (JSON.stringify(Menu).indexOf(productCategory[submenu]) > -1) {
        } else {
          Categories.push("/category/" + productCategory[submenu]);
          Menu.push(
            productsObject(
              productCategory[submenu],
              "/category/" + productCategory[submenu],
              []
            )
          );
        }
        break;
      case "1":
        if (JSON.stringify(Menu1).indexOf(productCategory[submenu]) > -1) {
        } else {
          Categories.push(
            "/category/" + productCategory[0] + "/" + productCategory[submenu]
          );
          Menu1.push(
            productsObject(
              productCategory[submenu],
              "/category/" +
                productCategory[0] +
                "/" +
                productCategory[submenu],
              []
            )
          );
        }
        break;
      case "2":
        if (JSON.stringify(Menu2).indexOf(productCategory[submenu]) > -1) {
        } else {
          Categories.push(
            "/category/" +
              productCategory[0] +
              "/" +
              productCategory[1] +
              "/" +
              productCategory[submenu]
          );
          Menu2.push(
            productsObject(
              productCategory[submenu],
              "/category/" +
                productCategory[0] +
                "/" +
                productCategory[1] +
                "/" +
                productCategory[submenu],
              []
            )
          );
        }
        break;
      case "3":
        if (JSON.stringify(Menu3).indexOf(productCategory[submenu]) > -1) {
        } else {
          Categories.push(
            "/category/" +
              productCategory[0] +
              "/" +
              productCategory[1] +
              "/" +
              productCategory[2] +
              "/" +
              productCategory[submenu]
          );
          Menu3.push(
            productsObject(
              productCategory[submenu],
              "/category/" +
                productCategory[0] +
                "/" +
                productCategory[1] +
                "/" +
                productCategory[2] +
                "/" +
                productCategory[submenu],
              []
            )
          );
        }
        break;
      case "4":
        if (JSON.stringify(Menu4).indexOf(productCategory[submenu]) > -1) {
        } else {
          Categories.push(
            "/category/" +
              productCategory[0] +
              "/" +
              productCategory[1] +
              "/" +
              productCategory[2] +
              "/" +
              productCategory[3] +
              "/" +
              productCategory[submenu]
          );
          Menu4.push(
            productsObject(
              productCategory[submenu],
              "/category/" +
                productCategory[0] +
                "/" +
                productCategory[1] +
                "/" +
                productCategory[2] +
                "/" +
                productCategory[3] +
                "/" +
                productCategory[submenu],
              []
            )
          );
        }
        break;
      case "5":
        if (JSON.stringify(Menu5).indexOf(productCategory[submenu]) > -1) {
        } else {
          Categories.push(
            "/category/" +
              productCategory[0] +
              "/" +
              productCategory[1] +
              "/" +
              productCategory[2] +
              "/" +
              productCategory[3] +
              "/" +
              productCategory[4] +
              "/" +
              productCategory[submenu]
          );
          Menu5.push(
            productsObject(
              productCategory[submenu],
              "/category/" +
                productCategory[0] +
                "/" +
                productCategory[1] +
                "/" +
                productCategory[2] +
                "/" +
                productCategory[3] +
                "/" +
                productCategory[4] +
                "/" +
                productCategory[submenu],
              []
            )
          );
        }
        break;
      default:
        console.log("to Many subCategories max: 6 current: " + submenu);
        break;
    }
  };

  const productsObject = (title, linkTo, submenu) => {
    const object = {
      title: title,
      linkTo: "/my-shop" + linkTo,
      submenu: submenu,
    };
    return object;
  };

  const findAllProducts = (Products) => {
    for (const product of Products) {
      const productCategory = product.category.split("/").filter((n) => n);
      let Menu1;
      let Menu2;
      let Menu3;
      let Menu4;
      let Menu5;

      for (const submenu in productCategory) {
        const Menu = productsMenu[0].submenu;

        if (submenu === "0") {
          setAllProductsToMenu(submenu, Menu, productCategory);
        } else if (submenu === "1") {
          Menu1 = Menu.findIndex((obj) => obj.title === productCategory[0]);
          setAllProductsToMenu(
            submenu,
            Menu,
            productCategory,
            Menu[Menu1].submenu
          );
        } else if (submenu === "2") {
          Menu2 = Menu[Menu1].submenu.findIndex(
            (obj) => obj.title === productCategory[1]
          );
          setAllProductsToMenu(
            submenu,
            Menu,
            productCategory,
            Menu1,
            Menu[Menu1].submenu[Menu2].submenu
          );
        } else if (submenu === "3") {
          Menu3 = Menu[Menu1].submenu[Menu2].submenu.findIndex(
            (obj) => obj.title === productCategory[2]
          );
          setAllProductsToMenu(
            submenu,
            Menu,
            productCategory,
            Menu1,
            Menu[Menu1].submenu[Menu2].submenu,
            Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu
          );
        } else if (submenu === "4") {
          Menu4 = Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu.findIndex(
            (obj) => obj.title === productCategory[3]
          );
          setAllProductsToMenu(
            submenu,
            Menu,
            productCategory,
            Menu1,
            Menu[Menu1].submenu[Menu2].submenu,
            Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu,
            Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu[Menu4].submenu
          );
        } else if (submenu === "5") {
          Menu5 = Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu[
            Menu4
          ].submenu.findIndex((obj) => obj.title === productCategory[4]);
          setAllProductsToMenu(
            submenu,
            Menu,
            productCategory,
            Menu1,
            Menu[Menu1].submenu[Menu2].submenu,
            Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu,
            Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu[Menu4].submenu,
            Menu[Menu1].submenu[Menu2].submenu[Menu3].submenu[Menu4].submenu[
              Menu5
            ].submenu
          );
        } else if (submenu === "6") {
          setAllProductsToMenu(submenu);
        }
      }
    }
  };

  useEffect(() => {
    findAllProducts(Products);
  }, []);

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
    window.innerWidth > 450 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 450 && setDropdown(false);
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
          {depthLevel > 0 && items.submenu.length !== 0 ? (
            <StyledArrowSpan>{">"}</StyledArrowSpan>
          ) : (
            <StyledArrowSpan className="arrow"></StyledArrowSpan>
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
