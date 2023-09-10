import React from 'react'
import styled from 'styled-components'

import CommonBtnStyle from "@common-components/button/CommonBtnStyle"

function ExtraLargeBtn({ children }) {
  return (
  <ExtraLargeBtnStyle>{children}</ExtraLargeBtnStyle>
  )
}

const ExtraLargeBtnStyle = styled(CommonBtnStyle)`
    width: ${props => props.theme.button.width.xl}; 
`

export default ExtraLargeBtn