import React from "react"

import { ModalSm } from "@common-components/modal"
import { ModalBtn } from '@common-components/button'

export default {
    title: "Modal/Small Modal",
    component: ModalSm
}

const Template = (args) => <ModalSm {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "default",
    label: "Small Modal Test",
    leftBtn: <ModalBtn size="sm" label="btn 01" />,
    rightBtn: <ModalBtn size="sm" label="btn 02" />
}