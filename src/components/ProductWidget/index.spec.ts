import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductWidget from './index.vue'
import type { IProductWidget } from '@/resources/interfaces'

describe('ProductWidget', () => {
  it('renders properly', () => {
    const widget: IProductWidget = {
      id: 1,
      type: 'plastic bottles',
      amount: 100,
      action: 'collects',
      active: true,
      linked: true,
      selectedColor: 'green'
    }
    const wrapper = mount(ProductWidget, { props: { widget } })
    expect(wrapper).toBeTruthy()
  })
})
