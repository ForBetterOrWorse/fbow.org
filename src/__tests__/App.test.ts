import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App.vue', () => {
  it('renders the main heading', () => {
    const wrapper = mount(App)
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('For Better or Worse')
  })

  it('renders the intro text', () => {
    const wrapper = mount(App)
    const intro = wrapper.find('.intro')
    expect(intro.exists()).toBe(true)
    expect(intro.text()).toContain('This page exists because a group of daydreamers')
  })

  it('contains the tagline', () => {
    const wrapper = mount(App)
    const tagline = wrapper.find('.tagline')
    expect(tagline.exists()).toBe(true)
    expect(tagline.text()).toBe('for better or worse')
  })
})