import React from 'react'
import styled from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function SmallBtn({ children }) {
  return (
  <SmallBtnStyle>{children}</SmallBtnStyle>
  )
}

const SmallBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.sm};
`

export default SmallBtn