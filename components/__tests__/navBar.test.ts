/**
 * @vitest-environment jsdom
 */

import { expect, it, describe } from 'vitest'

import { mount } from '@vue/test-utils'

import navBar from '../navBar.vue'

describe('Teste do componente Navbar ', () => {
    it('verifica o render ', () => {
        const wrapper =  mount(navBar)
        expect(wrapper.text()).toContain('home')
    })
})