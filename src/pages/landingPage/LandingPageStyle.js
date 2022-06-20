import styled from "styled-components";
import {
  DecrementButton,
  IncrementButton,
  Label,
} from "./LandingPageComponents";

export const LandingPageContentDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIncrementButton = styled(IncrementButton)`
  color: green;
`;

export const StyledDecrementButton = styled(DecrementButton)`
  color: red;
`;

export const StyledLabel = styled(Label)`
  color: BLACK;
  margin-left: 1rem;
  margin-right: 1rem;
`;
