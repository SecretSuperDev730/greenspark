import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckBox from './index.vue'

describe('CheckBox', () => {
  it('renders properly', () => {
    const wrapper = mount(CheckBox)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBeTruthy()
  })
})
