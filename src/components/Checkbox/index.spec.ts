import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from './index.vue'

describe('Checkbox', () => {
  it('renders blank checkbox properly', async () => {
    const wrapper = mount(Checkbox)
    expect(wrapper).toBeDefined()

    expect(wrapper.find('[data-testid="unchecked"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="checked"]').exists()).toBeFalsy()

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue', [[true]])
  })

  it('renders checked checkbox properly', async () => {
    const wrapper = mount(Checkbox, { props: { modelValue: true } })
    expect(wrapper).toBeDefined()

    expect(wrapper.find('[data-testid="unchecked"]').exists()).toBeFalsy()
    expect(wrapper.find('[data-testid="checked"]').exists()).toBeTruthy()

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue', [[false]])
  })
})
