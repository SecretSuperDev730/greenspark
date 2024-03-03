import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckBoxOutline from './index.vue'

describe('CheckBoxOutline', () => {
  it('renders properly', () => {
    const wrapper = mount(CheckBoxOutline)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBeTruthy()
  })
})
