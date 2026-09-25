import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Details from './Details'

const TEXT = /lorem ipsum/i

describe('Details', () => {
  it('starts with the text hidden', () => {
    render(<Details />)

    const button = screen.getByRole('button', { name: 'Show details' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    // Removed from the DOM, not just visually hidden
    expect(screen.queryByText(TEXT)).not.toBeInTheDocument()
  })

  it('shows the text when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<Details />)

    await user.click(screen.getByRole('button', { name: 'Show details' }))

    expect(screen.getByText(TEXT)).toBeInTheDocument()
    const button = screen.getByRole('button', { name: 'Hide details' })
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('hides the text again on a second click', async () => {
    const user = userEvent.setup()
    render(<Details />)

    const button = screen.getByRole('button')
    await user.click(button)
    await user.click(button)

    expect(screen.queryByText(TEXT)).not.toBeInTheDocument()
    expect(button).toHaveTextContent('Show details')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('points aria-controls at the text', async () => {
    const user = userEvent.setup()
    render(<Details />)

    const button = screen.getByRole('button')
    await user.click(button)

    const text = screen.getByText(TEXT)
    expect(text.id).not.toBe('')
    expect(button).toHaveAttribute('aria-controls', text.id)
  })
})
