// import img from "../img/profile.svg";
import {
  ProductShowCase,
  ProductShowCaseDiv,
} from "../componentsGlobal/StyledComponentsGlobal";
import {
  LandingPageContentDiv,
  ShowCaseDiv,
} from "./landingPage/LandingPageStyle";

export default function LandingPage() {
  return (
    <LandingPageContentDiv>
      <ShowCaseDiv>
        <h2>Most Sold Products:</h2>
      </ShowCaseDiv>
      <ProductShowCaseDiv>
        <ProductShowCase productName={"Galaxy watch"}></ProductShowCase>
        <ProductShowCase productName={"Galaxy watch"}></ProductShowCase>
        <ProductShowCase productName={"Galaxy watch"}></ProductShowCase>
      </ProductShowCaseDiv>
    </LandingPageContentDiv>
  );
}
