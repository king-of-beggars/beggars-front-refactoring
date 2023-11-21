import React from 'react'
import styled from 'styled-components'

function LabeledInput({ label, placeholder, text, changeHandler }) {
  return (
    <LabeledInputStyle>
      <label for="labeledInput">{label}</label>
      <input
        id="labeledInput"
        type="text"
        value={text}
        placeholder={placeholder}
        autoComplete="off"
        onChange={changeHandler}
      />
    </LabeledInputStyle>
  )
}

const LabeledInputStyle = styled.div`
  display: flex;
  width: ${props => props.theme.input.modal.width};
  height: ${props => props.theme.input.modal.height};

  label, input {
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.font.size.sm};
    font-family: ${props => props.theme.font.sans};
    font-size: ${props => props.theme.font.size.sm};
  }
  
  label {
    justify-content: center;
    width: ${props => props.theme.input.modal.labelWidth};
    height: 100%;
    border-radius: ${props => props.theme.input.modal.borderRadius} 0 0 ${props => props.theme.input.modal.borderRadius};
    background-color: ${props => props.theme.color.grayscale[600]};
    color: ${props => props.theme.color.grayscale[0]};
  }

  input {
    width: calc(100% - ${props => props.theme.input.modal.labelWidth});
    border-radius: 0 ${props => props.theme.input.modal.borderRadius} ${props => props.theme.input.modal.borderRadius} 0;
    border-top: 1px solid ${props => props.theme.color.grayscale[200]};
    border-right: 1px solid ${props => props.theme.color.grayscale[200]};
    border-bottom: 1px solid ${props => props.theme.color.grayscale[200]};
    border-left: none;
    padding: 0 ${props => props.theme.modal.padding.sm};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${props => props.theme.color.grayscale[200]};
    }
  }
`

export default LabeledInput