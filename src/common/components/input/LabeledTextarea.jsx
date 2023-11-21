import React from 'react'
import styled from 'styled-components'

function LabeledTextarea({ label, placeholder, text, changeHandler }) {
    return (
      <LabeledTextareaStyle>
        <label for="labeledTextarea">{label}</label>
        <textarea
          id="labeledTextarea"
          type="text"
          rows="10"
          value={text}
          autoComplete="off"
          onChange={changeHandler}
        />
        <div class="placeholder">{placeholder}</div>
      </LabeledTextareaStyle>
    )
  }

  const LabeledTextareaStyle = styled.div`
  display: flex;
  width: ${props => props.theme.input.modal.width};
  position: relative;

  label, textarea {
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.font.size.sm};
    font-family: ${props => props.theme.font.sans};
    font-size: ${props => props.theme.font.size.sm};
  }
  
  label {
    justify-content: center;
    width: ${props => props.theme.input.modal.labelWidth};
    border-radius: ${props => props.theme.input.modal.borderRadius} 0 0 ${props => props.theme.input.modal.borderRadius};
    background-color: ${props => props.theme.color.grayscale[600]};
    color: ${props => props.theme.color.grayscale[0]};
  }

  textarea {
    width: calc(100% - ${props => props.theme.input.modal.labelWidth});
    border-radius: 0 ${props => props.theme.input.modal.borderRadius} ${props => props.theme.input.modal.borderRadius} 0;
    border-top: 1px solid ${props => props.theme.color.grayscale[200]};
    border-right: 1px solid ${props => props.theme.color.grayscale[200]};
    border-bottom: 1px solid ${props => props.theme.color.grayscale[200]};
    border-left: none;
    padding: ${props => props.theme.modal.padding.sm};
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${props => props.theme.color.grayscale[200]};
    }
    &:focus + .placeholder {
      display: none;
    }
  }

  .placeholder {
    position: absolute;
    top: 50%;
    left: calc(${props => props.theme.input.modal.labelWidth} + ${props => props.theme.modal.padding.sm});
    transform: translateY(-50%);
    pointer-events: none;
    font-size: ${props => props.theme.font.size.sm};
    font-family: ${props => props.theme.font.sans};
    font-size: ${props => props.theme.font.size.sm};
    color: ${props => props.theme.color.grayscale[200]};
  }
`

export default LabeledTextarea