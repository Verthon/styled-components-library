import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
  title: 'ui/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Unchecked = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  value: 'on',
}

export const DisabledUnchecked = Template.bind({})
DisabledUnchecked.args = {
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  disabled: true,
  value: 'on',
}
