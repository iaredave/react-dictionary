import styled from "styled-components"
import { layout, shadow, typography } from "styled-system"
import { NoSelect } from "styles/Helpers"

const defaultProps = {
  boxShadow: 1,
  height: "30px",
  width: "auto"
}

const Button = styled.div`
  ${layout};
  ${shadow};
  ${typography};
  ${NoSelect};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.grey2};
  border: none;
  border-radius: 2px;
  color: ${props => props.theme.colors.textPrimary};
  height: ${props => props.height};
  width: ${props => props.width};
  line-height: 36px;
  padding: 0 16px;
  text-align: center;
  vertical-align: middle;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.grey4};
    transition: background-color 0.2s;
  }
  &:active {
    background-color: ${props => props.theme.colors.grey6};
    background-size: 100%;
    transition: background 0s;
  }
`

Button.defaultProps = defaultProps

export default Button
