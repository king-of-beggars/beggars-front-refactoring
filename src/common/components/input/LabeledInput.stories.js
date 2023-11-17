import React from 'react';

import { LabeledInput } from '@common-components/input';

export default {
    component: LabeledInput,
    title: "Input/Labeled Input",
}

const Template = (args) => <LabeledInput {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "Default",
    label: "라벨",
    placeholder: "placeholder로 넣은 문구가 들어갑니다.",
}