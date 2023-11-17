import React from 'react';

import { LabeledTextarea } from '@common-components/input';

export default {
    component: LabeledTextarea,
    title: "Input/Labeled Textarea",
}

const Template = (args) => <LabeledTextarea {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "Labeled Textarea",
    label: "라벨",
    placeholder: "placeholder로 넣은 문구가 들어갑니다.",
}