import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
  title: 'ui/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
