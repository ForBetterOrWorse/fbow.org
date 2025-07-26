import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import App from './App.vue'

describe('App.vue', () => {
  it('should render correctly', () => {
    render(App)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('For Better or Worse')
  })
})
