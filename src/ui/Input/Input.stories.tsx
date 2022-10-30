import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'ui/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Default',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled',
}

export const WithHelper = Template.bind({})
WithHelper.args = {
  placeholder: 'With helper text',
  helperText: 'Something useful here',
}
