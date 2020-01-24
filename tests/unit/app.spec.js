import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders content of a recipe', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.html()).toContain('<h1>Leftovers</h1>')
  })
})
