import React from 'react';

import { ModalBtn } from '@common-components/button';

export default {
    component: ModalBtn,
    title: "Button/Modal Button",
    argTypes: {
        color: { control: "color" }
    }
}

const Template = (args) => <ModalBtn {...args}>{args.children}</ModalBtn> 

export const Default = Template.bind({})
Default.args = {
    title: "Default",
    size: "sm",
    children: "ModalBtn-sm",
    color: undefined
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
    title: "Extra Large",
    size: "xl",
    children: "ModalBtn-xl",
    color: undefined
}

export const Large = Template.bind({})
Large.args = {
    title: "Large",
    size: "lg",
    children: "ModalBtn-lg",
    color: undefined
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
    title: "Extra Small",
    size: "xs",
    children: "ModalBtn-xs",
    color: undefined
}