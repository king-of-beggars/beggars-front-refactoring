import React from 'react'
import styled from 'styled-components'

function LabeledInput({ label, placeholder }) {
  return (
    <LabeledInputStyle>

    </LabeledInputStyle>
  )
}

const LabeledInputStyle = styled.div`
    width: ${props => props.theme.input.modal.width};
    height: ${props => props.theme.input.modal.height};
    border-radius: ${props => props.theme.input.modal.borderRadius};
    border: 1px solid ${props => props.theme.color.grayscale[200]};
`

export default LabeledInput