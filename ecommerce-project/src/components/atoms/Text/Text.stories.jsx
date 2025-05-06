import React from 'react';
import Text from './Text';

export default {
    title: 'atoms/Text',
    component: Text,
};

const Template = (args) => {
    return <Text {...args} />
}

const heading1Data = {
    content: 'This is heading 1',
    variant: 'h1'
}

const heading2Data = {
    content: 'This is heading 2',
    variant: 'h2'
}

const heading3Data = {
    content: 'This is heading 3',
    variant: 'h3'
}

const heading4Data = {
    content: 'This is heading 4',
    variant: 'h4'
}

const heading5Data = {
    content: 'This is heading 5',
    variant: 'h5'
}

const heading6Data = {
    content: 'This is heading 6',
    variant: 'h6'
}

const subTitle1Data = {
    content: 'This is subtitle 1.',
    variant: 'subtitle1'
}

const subTitle2Data = {
    content: 'This is subtitle 2.',
    variant: 'subtitle2'
}

const body1Data = {
    content: 'This is body 1.',
    variant: 'body1'
}

const body2Data = {
    content: 'This is body 2.',
    variant: 'body2'
}

const captionData = {
    content: 'This is a caption.',
    variant: 'caption'
}

const overlineData = {
    content: 'This is an overline.',
    variant: 'overline'
}

export const Heading1 = Template.bind({})
Heading1.args = {
    ...heading1Data,
}

export const Heading2 = Template.bind({})
Heading2.args = {
    ...heading2Data,
}

export const Heading3 = Template.bind({})
Heading3.args = {
    ...heading3Data,
}

export const Heading4 = Template.bind({})
Heading4.args = {
    ...heading4Data,
}

export const Heading5 = Template.bind({})
Heading5.args = {
    ...heading5Data,
}

export const Heading6 = Template.bind({})
Heading6.args = {
    ...heading6Data,
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
    ...subTitle1Data,
}

export const Subtitle2 = Template.bind({})
Subtitle2.args = {
    ...subTitle2Data,
}

export const Body1 = Template.bind({})
Body1.args = {
    ...body1Data,
}

export const Body2 = Template.bind({})
Body2.args = {
    ...body2Data,
}

export const Caption = Template.bind({})
Caption.args = {
    ...captionData,
}

export const Overline = Template.bind({})
Overline.args = {
    ...overlineData,
}