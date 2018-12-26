// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from './counter'
import MyApp from './myapp'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})

describe('MyApp', () => {
  const wrapper = mount(MyApp)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="number">99</span>')
  })

  it('has add button', () => {
    expect(wrapper.contains('#add-btn')).toBe(true)
  })

  it('has minus button', () => {
    expect(wrapper.contains('#minus-btn')).toBe(true)
  })

  it('add button should increment the number', () => {
    // access data value in vm instance
    expect(wrapper.vm.number).toBe(99)

    const addButton = wrapper.find('#add-btn')

    addButton.trigger('click')
    expect(wrapper.vm.number).toBe(100)

    addButton.trigger('click')
    expect(wrapper.vm.number).toBe(101)
  })

  it('minus button should decrement the number', () => {
    // access data value in vm instance
    expect(wrapper.vm.number).toBe(101)

    const minusButton = wrapper.find('#minus-btn')

    minusButton.trigger('click')
    expect(wrapper.vm.number).toBe(100)

    minusButton.trigger('click')
    expect(wrapper.vm.number).toBe(99)
  })

  it('power button should power the number by 2', () => {
    // access data value in vm instance
    expect(wrapper.vm.number).toBe(99)

    const minusButton = wrapper.find('#power-btn')

    minusButton.trigger('click')
    expect(wrapper.vm.number).toBe(9801)

  })
})
