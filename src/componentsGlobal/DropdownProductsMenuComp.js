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
  // const addToMenu = (product, Menu, setOfSubmenu) => {
  //   const subCategory = product.subCategory;
  //   const idx = Menu.findIndex(
  //     (object) => object.submenu.title === subCategory
  //   );
  //   console.log(Menu.indexOf((item) => item.title === product.mainCategory));

  //   for (let some in subCategory) {
  //     if (idx === -1 && setOfSubmenu.has(subCategory[some])) {
  //       console.log(some);
  //       if (some === "0") {
  //         Menu.find((item) => item.title === product.mainCategory).submenu.push(
  //           {
  //             title: subCategory[some],
  //             linkTo: "/product" + product.category + product.id,
  //             submenu: [],
  //           }
  //         );
  //         setOfSubmenu.delete(subCategory[some]);
  //       } else {
  //         console.log("this is here" + some);
  //         addToMenu(product, Menu, setOfSubmenu);
  //       }
  //     }
  //   }
  // };

  const findAndAddToMenu = (product) => {
    let depthlevel;
    for (let some of product){
      console.log();
    }

    productsMenu.push{
      title: "Products",
      linkTo: "#",
      submenu: [],
    },
  };

  useEffect(() => {
    for (const product of products) {
      findAndAddToMenu(product);
    }

    // if (category !== product) {
    //   productsMenu[0].submenu.push({
    //     title: category,
    //     linkTo: "/product" + product.category + product.id,
    //   });
    //   console.log(category);
    // }
  }, [products]);

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
