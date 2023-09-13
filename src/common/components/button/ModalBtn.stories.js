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
    id: "1",
    title: "Default",
    size: "sm",
    children: "ModalBtn-sm",
    color: undefined
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
    id: "2",
    title: "Extra Large",
    size: "xl",
    children: "ModalBtn-xl",
    color: undefined
}

export const Large = Template.bind({})
Large.args = {
    id: "3",
    title: "Large",
    size: "lg",
    children: "ModalBtn-lg",
    color: undefined
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
    id: "4",
    title: "Extra Small",
    size: "xs",
    children: "ModalBtn-xs",
    color: undefined
}