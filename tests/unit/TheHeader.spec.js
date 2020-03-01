import Vuetify from 'vuetify'

import TheHeader from '@/components/TheHeader'

import { mount } from '@vue/test-utils'

describe('TheHeader.vue', () => {
  let vuetify = new Vuetify()
  const wrapper = mount(TheHeader, {
    vuetify
  })

  it('has h1 with content Leftovers', () => {
    expect(wrapper.contains('h1')).toBe(true)
    expect(wrapper.vm.title).toMatch('Leftovers')
  })

  it('has h2', () => {
    expect(wrapper.contains('h2')).toBe(true)
  })

  it('checks if the drawer is opening', () => {
    wrapper.setData({ drawer: true })
    expect(wrapper.contains('.v-navigation-drawer--open')).toBe(true)
  })

  it('checks if the drawer is closing', () => {
    wrapper.setData({ drawer: false })
    expect(wrapper.contains('.v-navigation-drawer--open')).toBe(false)
  })
})
