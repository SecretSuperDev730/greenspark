import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoCircle from './index.vue'

describe('InfoCircle', () => {
  it('renders properly', () => {
    const wrapper = mount(InfoCircle)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBeTruthy()
  })
})
