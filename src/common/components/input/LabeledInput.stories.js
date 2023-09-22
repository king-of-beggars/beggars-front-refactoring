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
    placeholder: "ModalBtn-sm",
}