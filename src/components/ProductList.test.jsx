import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProductList from './ProductList'

const products = [
  { id: 'p1', name: 'Keyboard', price: 49.99, inStock: true },
  { id: 'p2', name: 'Mouse', price: 19.5, inStock: false },
  { id: 'p3', name: 'Monitor', price: 189, inStock: true },
]

describe('ProductList', () => {
  it('renders one list item per product', () => {
    render(<ProductList products={products} />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('Keyboard')
    expect(items[1]).toHaveTextContent('Mouse')
    expect(items[2]).toHaveTextContent('Monitor')
  })

  it('formats prices as currency with two decimals', () => {
    render(<ProductList products={products} />)

    expect(screen.getByText('$49.99')).toBeInTheDocument()
    expect(screen.getByText('$19.50')).toBeInTheDocument()
    expect(screen.getByText('$189.00')).toBeInTheDocument()
  })

  it('marks only out-of-stock items', () => {
    render(<ProductList products={products} />)

    const [keyboard, mouse, monitor] = screen.getAllByRole('listitem')
    expect(within(mouse).getByText(/out of stock/i)).toBeInTheDocument()
    expect(within(keyboard).queryByText(/out of stock/i)).not.toBeInTheDocument()
    expect(within(monitor).queryByText(/out of stock/i)).not.toBeInTheDocument()
  })

  it('shows the total count above the list', () => {
    render(<ProductList products={products} />)

    expect(screen.getByRole('heading')).toHaveTextContent('3 products')
  })

  it('uses the singular for one product', () => {
    render(<ProductList products={[products[0]]} />)

    expect(screen.getByRole('heading')).toHaveTextContent('1 product')
    expect(screen.getByRole('heading')).not.toHaveTextContent('products')
  })

  it('shows "No products" when the array is empty', () => {
    render(<ProductList products={[]} />)

    expect(screen.getByText('No products')).toBeInTheDocument()
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('shows "No products" when the prop is missing', () => {
    render(<ProductList />)

    expect(screen.getByText('No products')).toBeInTheDocument()
  })
})
