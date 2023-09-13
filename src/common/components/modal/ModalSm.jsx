import React from 'react'
import styled from 'styled-components'

import { DarkBackOverlay } from "@common-styles"

function ModalSm({ label, leftBtn, rightBtn }) {
  return (
    <DarkBackOverlay>
        <ModalSmStyle>
            <div className="modal-text">{label}</div>
            <div className="modal-btns">
                {leftBtn}
                {rightBtn}
            </div>
        </ModalSmStyle>
    </DarkBackOverlay>
  )
}

const ModalSmStyle = styled.div`
    width: ${props => props.theme.modal.minSize.sm.width};
    min-height: ${props => props.theme.modal.minSize.sm.height};
    padding: ${props => props.theme.modal.padding.lg} ${props => props.theme.modal.padding.sm} ${props => props.theme.modal.padding.sm} ${props => props.theme.modal.padding.sm};
    font-family: ${props => props.theme.font.serif};
    font-size: ${props => props.theme.font.size.default};
    background-color: ${props => props.theme.color.grayscale[0]};
    border-radius: ${props => props.theme.modal.radius};

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: ${props => props.theme.modal.gap.md};

    > .modal-text {
        width: inherit;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    > .modal-btns {
        display: flex;
        flex-grow: 0;
        gap: ${props => props.theme.button.gap.modal};
    }
`

export default ModalSm