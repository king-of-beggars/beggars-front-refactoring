import React from 'react';

import { ExtraLargeBtn } from '@common-components/button';

export default {
    component: ExtraLargeBtn,
    title: "Button/Extra Large Button",
    argTypes: {
        color: { control: "color" }
    }
}

const Template = (args) => <ExtraLargeBtn {...args}>{args.children}</ExtraLargeBtn> 

export const Default = Template.bind({})
Default.args = {
    id: "1",
    title: "Default",
    children: "가장 큰 버튼입니다.",
    color: undefined
}