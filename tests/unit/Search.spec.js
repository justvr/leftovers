// test/Search.spec.js

// Libraries
// import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import Search from '@/components/Search'

// Utilities
import { mount } from '@vue/test-utils'

describe('Search.vue', () => {
  let vuetify = new Vuetify()
  const wrapper = mount(Search, {
    vuetify,
    data() {
      return {
        items: [
          {
            ingredient: [
              'tomato',
              'potato',
              'sweet potato',
              'egg plant',
              'corn flour',
              'salmon',
              'pork',
              'cheese',
              'yoghurt',
              'eggs',
              'onion',
              'garlic',
              'milk',
              'bell pepper',
              'brocolli',
              'rice',
              'schupfnudeln',
              'tomato puree',
              'Spinach',
              'sausage',
              'lentils'
            ]
          }
        ],
        search: 'tomato',
        selectedIngredients: ['tomato']
      }
    }
  })

  it('has a chip with content', () => {
    expect(wrapper.find('.v-chip__content').text()).toEqual('tomato')
  })
})
