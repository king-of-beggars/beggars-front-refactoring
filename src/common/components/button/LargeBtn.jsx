import React from 'react'
import styled, { useTheme } from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function LargeBtn({ color, children }) {
  const theme = useTheme()
  const actualColor = color || theme.color.grayscale[900]

  return (
  <LargeBtnStyle color={actualColor}>{children}</LargeBtnStyle>
  )
}

const LargeBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.lg};
`

export default LargeBtn