import React from 'react'
import styled from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function ExtraSmallBtn({ children }) {
  return (
  <ExtraSmallBtnStyle>{children}</ExtraSmallBtnStyle>
  )
}

const ExtraSmallBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.xs};
`

export default ExtraSmallBtn