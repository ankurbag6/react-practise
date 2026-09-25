import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Counter from './Counter'

describe('Counter', () => {
  it('starts at 0 with a step of 1', () => {
    render(<Counter />)

    expect(screen.getByRole('heading', { name: 'Counter: 0' })).toBeInTheDocument()
    expect(screen.getByLabelText('Step:')).toHaveValue(1)
  })

  it('increments and decrements by the step', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByRole('button', { name: '+' }))
    await user.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByRole('heading')).toHaveTextContent('Counter: 2')

    await user.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByRole('heading')).toHaveTextContent('Counter: 1')
  })

  it('uses a custom step', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    fireEvent.change(screen.getByLabelText('Step:'), { target: { value: '5' } })
    await user.click(screen.getByRole('button', { name: '+' }))

    expect(screen.getByRole('heading')).toHaveTextContent('Counter: 5')
  })

  it('keeps the step at least 1', () => {
    render(<Counter />)

    const stepInput = screen.getByLabelText('Step:')
    fireEvent.change(stepInput, { target: { value: '0' } })

    expect(stepInput).toHaveValue(1)
  })

  it('never goes below 0', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByRole('button', { name: '-' }))

    expect(screen.getByRole('heading')).toHaveTextContent('Counter: 0')
  })
})
