import { shallowMount } from '@vue/test-utils'
import Recipe from '@/App.vue'

describe('Recipe.vue', () => {
  it('renders content of a recipe', () => {
    const wrapper = shallowMount(Recipe)
    expect(wrapper.html()).toContain('<h1>Leftovers</h1>')
  })
})
