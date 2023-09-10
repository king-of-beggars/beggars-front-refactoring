import React from 'react'
import styled from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function LargeBtn({ children }) {
  return (
  <LargeBtnStyle>{children}</LargeBtnStyle>
  )
}

const LargeBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.lg};
`

export default LargeBtn