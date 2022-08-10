import { useEffect, useRef, useState } from "react";
import supIcon from "./../img/Support.svg";
import { SupportDropDownDiv } from "./StyledComponentsGlobal";

export const SupportComp = () => {
  const [supportActive, setSupportActive] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSupportActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div>
      <img
        width="38"
        src={supIcon}
        onClick={() => setSupportActive(true)}
      ></img>
      <div ref={wrapperRef}>
        <SupportCOntainer isActive={supportActive}></SupportCOntainer>
      </div>
    </div>
  );
};

export const SupportCOntainer = ({ isActive }) => {
  if (isActive) {
    return (
      <SupportDropDownDiv>
        <h2>Support</h2>
        <hr color="white"></hr>
        <h2>call: </h2>
        <h2>999 999 999</h2>
        <h2>email: some@email.com</h2>
      </SupportDropDownDiv>
    );
  }
};
