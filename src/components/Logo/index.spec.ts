import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Logo from './index.vue'

describe('Logo', () => {
  it('renders properly', () => {
    const wrapper = mount(Logo, { props: { width: 100 } })
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBeTruthy()
  })
})
