import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from './index.vue'

describe('Switch', () => {
  it('renders properly', async () => {
    const wrapper = mount(Switch)
    expect(wrapper).toBeDefined()

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue', [[true]])
  })
})
