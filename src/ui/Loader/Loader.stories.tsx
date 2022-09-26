import { ComponentStory, ComponentMeta } from '@storybook/react'

import Loader from './Loader'

export default {
  title: 'ui/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})

export const CustomDimensions = Template.bind({})
CustomDimensions.args = {
  width: 100,
  height: 100,
}

export const CustomThickness = Template.bind({})
CustomThickness.args = {
  thickness: 5,
}
