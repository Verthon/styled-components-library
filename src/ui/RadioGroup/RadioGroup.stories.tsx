import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio, RadioGroup } from './RadioGroup'

export default {
  title: 'ui/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'Phoenician',
  children: (
    <>
      <Radio value="Greek" />
      <Radio value="Shang" />
      <Radio value="Phoenician" />
    </>
  ),
}

// export const Disabled = Template.bind({})
// Disabled.args = {
//   disabled: true,
// }
