import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ColorSelect from './index.vue'
import { PRODUCT_WIDGET_COLOR } from '@/resources/constants'

describe('ColorSelect', () => {
  it('renders properly', async () => {
    const options = Object.entries(PRODUCT_WIDGET_COLOR).map(([key, colors]) => ({
      color: colors.color,
      value: key
    }))
    const wrapper = mount(ColorSelect, { props: { options } })
    expect(wrapper).toBeDefined()

    const buttons = wrapper.findAll('[data-testid="color-option"]')
    expect(buttons.length).toBe(options.length)

    await buttons[0].trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue', [[options[0].value]])
  })
})
