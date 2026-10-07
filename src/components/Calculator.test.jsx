import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Calculator from './Calculator'

const fill = async (user, a, b) => {
  await user.type(screen.getByLabelText('First number:'), a)
  await user.type(screen.getByLabelText('Second number:'), b)
}

describe('Calculator', () => {
  it('starts with zero operations', () => {
    render(<Calculator />)

    expect(screen.getByRole('heading', { name: 'Total operations: 0' })).toBeInTheDocument()
  })

  it('performs all four operations and counts them', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await fill(user, '8', '2')

    await user.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByText('Result: 10')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByText('Result: 6')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '*' }))
    expect(screen.getByText('Result: 16')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '/' }))
    expect(screen.getByText('Result: 4.00')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Total operations: 4' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })

  it('handles division by zero', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await fill(user, '5', '0')

    await user.click(screen.getByRole('button', { name: '/' }))

    expect(screen.getByText('Result: Cannot divide by 0')).toBeInTheDocument()
  })

  it('resets inputs, result and history', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await fill(user, '3', '4')
    await user.click(screen.getByRole('button', { name: '+' }))

    await user.click(screen.getByRole('button', { name: 'Reset' }))

    expect(screen.getByLabelText('First number:')).toHaveValue(null)
    expect(screen.getByLabelText('Second number:')).toHaveValue(null)
    expect(screen.queryByText(/Result:/)).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Total operations: 0' })).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })

  it('remembers the selected operator', async () => {
    const user = userEvent.setup()
    render(<Calculator />)
    await fill(user, '6', '3')

    await user.click(screen.getByRole('button', { name: '*' }))
    expect(screen.getByText('Selected operator: *')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.queryByText(/Selected operator/)).not.toBeInTheDocument()
  })

  it('does not count an operation when an input is empty', async () => {
    const user = userEvent.setup()
    render(<Calculator />)

    await user.click(screen.getByRole('button', { name: '+' }))

    expect(screen.getByText('Result: Enter both numbers')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Total operations: 0' })).toBeInTheDocument()
  })
})
