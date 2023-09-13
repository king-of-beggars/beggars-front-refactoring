import React from 'react';

import { ModalBtn } from '@common-components/button';

export default {
    component: ModalBtn,
    title: "Button/Modal Button",
    argTypes: {
        color: { control: "color" }
    }
}

const Template = (args) => <ModalBtn {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "Default",
    size: "sm",
    label: "ModalBtn-sm",
    color: undefined
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
    title: "Extra Large",
    size: "xl",
    label: "ModalBtn-xl",
    color: undefined
}

export const Large = Template.bind({})
Large.args = {
    title: "Large",
    size: "lg",
    label: "ModalBtn-lg",
    color: undefined
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
    title: "Extra Small",
    size: "xs",
    label: "ModalBtn-xs",
    color: undefined
}