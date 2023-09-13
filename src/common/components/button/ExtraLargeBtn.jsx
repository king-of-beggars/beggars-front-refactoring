import React from 'react'
import styled, { useTheme } from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function ExtraLargeBtn({ color, children }) {
  const theme = useTheme()
  const actualColor = color || theme.color.grayscale[900]

  return (
  <ExtraLargeBtnStyle color={actualColor}>{children}</ExtraLargeBtnStyle>
  )
}

const ExtraLargeBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.xl}; 
`

export default ExtraLargeBtn