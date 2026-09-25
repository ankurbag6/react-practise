import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import NameCard from './NameCard'

describe('NameCard', () => {
  it('has a labelled input that starts empty', () => {
    render(<NameCard />)

    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, stranger!')
    expect(screen.getByText('0/20')).toBeInTheDocument()
  })

  it('updates the preview as the user types', async () => {
    const user = userEvent.setup()
    render(<NameCard />)

    await user.type(screen.getByLabelText('Name'), 'Ankur')

    expect(screen.getByRole('heading')).toHaveTextContent('Hello, Ankur!')
    expect(screen.getByText('5/20')).toBeInTheDocument()
  })

  it('greets a stranger when the input is only spaces', async () => {
    const user = userEvent.setup()
    render(<NameCard />)

    await user.type(screen.getByLabelText('Name'), '   ')

    expect(screen.getByRole('heading')).toHaveTextContent('Hello, stranger!')
  })

  it('trims spaces in the preview but not in the input', async () => {
    const user = userEvent.setup()
    render(<NameCard />)

    const input = screen.getByLabelText('Name')
    await user.type(input, '  Ankur   Bag ')

    expect(input).toHaveValue('  Ankur   Bag ')
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, Ankur Bag!')
    expect(screen.getByText('14/20')).toBeInTheDocument()
  })

  it('stops the user from typing past 20 characters', async () => {
    const user = userEvent.setup()
    render(<NameCard />)

    const input = screen.getByLabelText('Name')
    await user.type(input, 'a'.repeat(25))

    expect(input).toHaveValue('a'.repeat(20))
    expect(screen.getByText('20/20')).toBeInTheDocument()
  })
})
