import React from 'react'
import styled, { useTheme } from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function SmallBtn({ color, children }) {
  const theme = useTheme()
  const actualColor = color || theme.color.grayscale[900]

  return (
  <SmallBtnStyle color={actualColor}>{children}</SmallBtnStyle>
  )
}

const SmallBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.sm};
`

export default SmallBtn