import styled, { css } from "styled-components"
import { color, typography } from "styled-system"
import { string } from "prop-types"

const defaultProps = {
  backgroundColor: "grey2"
}

const propTypes = {
  variant: string
}

const NormalInputStyle = css`
  border-bottom: solid 1px ${props => props.theme.colors.grey8};
  height: 32px;
  padding-left: 2px;
  padding-right: 5px;
`

const OutlinedInputStyle = css`
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.grey8};
  height: 42px;
  padding: 6px 18px;
  &:hover {
    border-color: ${props => props.theme.colors.grey9};
  }
  &:focus {
    border: solid 2px ${props => props.theme.colors.blue5};
    outline: none;
    padding: 5px 17px;
  }
`

const Input = styled.input`
  ${color};
  ${typography};
  border: none;
  ${props => props.variant && props.variant === "normal" && NormalInputStyle};
  ${props =>
    props.variant && props.variant === "outlined" && OutlinedInputStyle};
  transition: all 100ms;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  ::placeholder {
    color: ${props => props.theme.colors.grey10};
  }
  width: 100%;
`

Input.defaultProps = defaultProps
Input.propTypes = propTypes
Input.displayName = "Input"

export default Input
