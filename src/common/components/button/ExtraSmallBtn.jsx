import React from 'react'
import styled, { useTheme } from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function ExtraSmallBtn({ color, children }) {
  const theme = useTheme()
  const actualColor = color || theme.color.grayscale[900]

  return (
  <ExtraSmallBtnStyle color={actualColor}>{children}</ExtraSmallBtnStyle>
  )
}

const ExtraSmallBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.xs};
`

export default ExtraSmallBtn