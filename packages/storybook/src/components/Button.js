import styled from "styled-components";

export const Button = styled.button`
  height: 50px;
  width: ${props => props.width || "300 px"}};
  border-width: 5px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${props => props.borderColor || "transparent"}};
  background-color: ${({ primary }) => (primary ? "dodgerblue" : "gray")};
  font-size: 1em;
`;

export default Button;
