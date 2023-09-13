import React from 'react'
import { useTheme } from "styled-components"

import { ModalBtnStyle } from "@common-styles"

function ModalBtn({ color, size, label }) {
    const theme = useTheme()
    const actualColor = color || theme.color.grayscale[900]
    let actualSize;
    switch(size) {
        default:
            actualSize = theme.button.width.sm
            break
        case "xl":
            actualSize = theme.button.width.xl
            break
        case "lg":
            actualSize = theme.button.width.lg
            break
        case "xs":
            actualSize = theme.button.width.xs
            break
    }

    return (
        <ModalBtnStyle color={actualColor} width={actualSize}>{label}</ModalBtnStyle>
    )
}

export default ModalBtn