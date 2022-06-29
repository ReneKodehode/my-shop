// import img from "../img/profile.svg";
import {
  ProductShowCase,
  ProductShowCaseDiv,
} from "../componentsGlobal/StyledComponentsGlobal";
import {
  LandingPageContentDiv,
  StyledDecrementButton,
  StyledIncrementButton,
  StyledLabel,
} from "./landingPage/LandingPageStyle";

export default function LandingPage() {
  return (
    <LandingPageContentDiv>
      <ProductShowCaseDiv>
        <ProductShowCase productName={"Galaxy watch"}></ProductShowCase>
        <ProductShowCase productName={"Galaxy watch"}></ProductShowCase>
        <ProductShowCase productName={"Galaxy watch"}></ProductShowCase>
      </ProductShowCaseDiv>
      {/* <StyledDecrementButton />
      <StyledLabel />
      <StyledIncrementButton /> */}
    </LandingPageContentDiv>
  );
}
