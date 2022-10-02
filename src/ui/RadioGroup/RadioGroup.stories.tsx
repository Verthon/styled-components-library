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
      <div style={{ margin: '0.5rem 0' }}>
        <Radio value="Greek" />
      </div>
      <div style={{ margin: '0.5rem 0' }}>
        <Radio value="Phoenician" />
      </div>
      <div style={{ margin: '0.5rem 0' }}>
        <Radio value="Yamato" />
      </div>
      <div style={{ margin: '0.5rem 0' }}>
        <Radio value="Shang" />
      </div>
    </>
  ),
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: (
    <>
      <div style={{ margin: '0.5rem 0' }}>
        <Radio disabled checked value="Palmyran" />
      </div>
      <div style={{ margin: '0.5rem 0' }}>
        <Radio disabled value="Macedonian" />
      </div>
    </>
  ),
}
