import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './index.vue'

describe('Tooltip', () => {
  it('renders properly', async () => {
    const wrapper = mount(Tooltip, { props: { title: 'This is tooltip' } })
    expect(wrapper).toBeDefined()

    expect(wrapper.find('[data-testid="tooltip"]').exists()).toBeTruthy()
  })
})
