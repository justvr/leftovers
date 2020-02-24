import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader.vue test', () => {
  it('renders content of a recipe', () => {
    // render the component
    const wrapper = shallowMount(TheHeader, {
      data() {
        return {
          drawer: true
        }
      }
    })

    // check the name of the component
    expect(wrapper.name()).toMatch('TheHeader')

    // check the static content is set
    expect(wrapper.html()).toContain('<h1>Leftovers</h1>')
    expect(wrapper.html()).toContain('<h2>Why?</h2>')

    // see if the drawer is there
    // expect(wrapper.contains('nav')).toBe(true)

    // update the `drawer` and assert nav is no longer rendered
    wrapper.setData({ drawer: false })
    expect(wrapper.contains('nav')).toBe(false)
  })
})
