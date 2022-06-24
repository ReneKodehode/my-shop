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

//mainComponent
const DropdownMenu = () => {
  const setAllProductsToMenu = (
    submenu,
    Menu,
    productCategory,
    MenuMainCategoryIndex
  ) => {
    switch (submenu) {
      case "0":
        if (JSON.stringify(Menu).indexOf(productCategory[submenu]) > -1) {
          console.log("here");
        } else {
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
        if (
          JSON.stringify(Menu[MenuMainCategoryIndex].submenu).indexOf(
            productCategory[submenu]
          ) > -1
        ) {
          console.log("there");
        } else {
          Menu[MenuMainCategoryIndex].submenu.push(
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
        if (
          JSON.stringify(Menu[MenuMainCategoryIndex].submenu).indexOf(
            productCategory[submenu]
          ) > -1
        ) {
          console.log("way");
        } else {
          Menu[MenuMainCategoryIndex].submenu.push(
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
        if (
          JSON.stringify(Menu[MenuMainCategoryIndex].submenu).indexOf(
            productCategory[submenu]
          ) > -1
        ) {
          console.log("there");
        } else {
          Menu[MenuMainCategoryIndex].submenu.push(
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
      case "4":
        if (
          JSON.stringify(Menu[MenuMainCategoryIndex].submenu).indexOf(
            productCategory[submenu]
          ) > -1
        ) {
          console.log("there");
        } else {
          Menu[MenuMainCategoryIndex].submenu.push(
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
      case "5":
        if (
          JSON.stringify(Menu[MenuMainCategoryIndex].submenu).indexOf(
            productCategory[submenu]
          ) > -1
        ) {
          console.log("there");
        } else {
          Menu[MenuMainCategoryIndex].submenu.push(
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
      default:
        console.log("to Many subCategories");
        break;
    }
  };

  const productsObject = (title, linkTo, submenu) => {
    const object = {
      title: title,
      linkTo: linkTo,
      submenu: submenu,
    };
    return object;
  };

  const findAllProducts = (Products) => {
    for (const product of Products) {
      const productCategory = product.category.split("/").filter((n) => n);

      for (const submenu in productCategory) {
        const Menu = productsMenu[0].submenu;
        const MenuSecondIndex = Menu.findIndex(
          (obj) => obj.title === productCategory[0]
        );
        if (submenu === "0") {
          setAllProductsToMenu(submenu, Menu, productCategory);
        } else if (submenu === "1") {
          const MenuMainCategoryIndex = Menu.findIndex(
            (obj) => obj.title === productCategory[0]
          );
          setAllProductsToMenu(
            submenu,
            Menu,
            productCategory,
            MenuMainCategoryIndex
          );
        } else if (submenu === "2") {
          const MenuMainCategoryIndex = Menu[MenuSecondIndex].submenu.findIndex(
            (obj) => obj.title === productCategory[1]
          );
          console.log(MenuMainCategoryIndex);
          setAllProductsToMenu(
            submenu,
            Menu,
            productCategory,
            MenuMainCategoryIndex
          );
        }
        // else if (submenu === "3") {
        //   const MenuMainCategoryIndex = Menu.findIndex(
        //     (obj) => obj.title === productCategory[0]
        //   );
        //   setAllProductsToMenu(
        //     submenu,
        //     Menu,
        //     productCategory,
        //     MenuMainCategoryIndex
        //   );
        // } else if (submenu === "4") {
        //   const MenuMainCategoryIndex = Menu.findIndex(
        //     (obj) => obj.title === productCategory[0]
        //   );
        //   setAllProductsToMenu(
        //     submenu,
        //     Menu,
        //     productCategory,
        //     MenuMainCategoryIndex
        //   );
        // } else if (submenu === "5") {
        //   const MenuMainCategoryIndex = Menu.findIndex(
        //     (obj) => obj.title === productCategory[0]
        //   );
        //   setAllProductsToMenu(
        //     submenu,
        //     Menu,
        //     productCategory,
        //     MenuMainCategoryIndex
        //   );
        // }

        // this is for subcategorys

        // if (
        //   JSON.stringify(Menu[MenuMainCategoryIndex].submenu).indexOf(
        //     productCategory[submenu]
        //   ) > -1
        // ) {
        //   console.log("there");
        // } else {
        //   Menu[MenuMainCategoryIndex].submenu.push(
        //     productsObject(
        //       productCategory[0],
        //       "/category/" + product.mainCategory + "/" + productCategory[0],
        //       []
        //     )
        //   );
        // }
      }
    }
  };

  useEffect(() => {
    findAllProducts(Products);

    //   productsMenu[0].submenu.push({
    //     title: category,
    //     linkTo: "/product" + product.category + product.id,
    //   });

    // const idx = Menu.findIndex((object) => object.submenu.title === subCategory);
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
