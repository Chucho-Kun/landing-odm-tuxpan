import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

// IMPORTANT: Los mocks deben ir ANTES de importar el componente
vi.mock('../components/Header', () => ({
  default: () => <header data-testid="header">Header Mock</header>
}))

vi.mock('../components/Banner', () => ({
  default: () => <div data-testid="banner">Banner Mock</div>
}))

vi.mock('../components/Destinos', () => ({
  default: () => <div data-testid="destinos">Destinos Mock</div>
}))

vi.mock('../components/Fichas', () => ({
  default: () => <div data-testid="fichas">Fichas Mock</div>
}))

vi.mock('../components/FormasdePago', () => ({
  default: () => <div data-testid="formasdepago">Formas de Pago Mock</div>
}))

import Index from '../components/Index'   // ← Importar DESPUÉS de los mocks

describe('Landing Page - Index', () => {
  beforeEach(() => {
    render(<Index />)
  })

  it('renderiza el elemento principal', () => {
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('muestra textos importantes', () => {
    expect(screen.getByText(/Ventajas de viajar con/i)).toBeInTheDocument()
    expect(screen.getByText(/Formas de pago que se adaptan a ti/i)).toBeInTheDocument()
    expect(screen.getByText(/Desde Tuxpan te conectamos con todo México/i)).toBeInTheDocument()
  })

  it('renderiza los componentes principales', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('banner')).toBeInTheDocument()
    expect(screen.getByTestId('destinos')).toBeInTheDocument()
  })

  it('debe renderizar todas las imágenes', () => {
    const imagenes = screen.getAllByRole('img')
    expect(imagenes.length).toBe(3) // Hay 3 imágenes en tu componente
  })
})