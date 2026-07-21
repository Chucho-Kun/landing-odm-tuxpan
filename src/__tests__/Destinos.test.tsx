import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Destinos from '../components/Destinos'


// Mock de la base de datos
vi.mock('../db/TXP', () => ({
  destinosList: [
    {"id":"MEX","value":"Mexico Central Norte"},
    {"id":"GOP","value":"Gomez Palacio C. Autobus"},
    {"id":"GDL","value":"Guadalajara Jal"},
  ]
}))

describe('Componente Destinos', () => {
  beforeEach(() => {
    render(<Destinos />)
  })

  it('debe renderizar todas las fichas de destinos', () => {
    const fichas = screen.getAllByRole('link')
    expect(fichas.length).toBe(3) // Según el mock que pusimos arriba
  })

  it('cada ficha debe tener un enlace con href válido', () => {
    const enlaces = screen.getAllByRole('link')

    enlaces.forEach((enlace) => {
      const href = enlace.getAttribute('href')
      
      expect(enlace).toBeInTheDocument()
      expect(href).toBeDefined()
      expect(href).toContain('https://odm.com.mx/index.php?origen=TXP&destino=')
      expect(href).not.toBe('')
    })
  })

  it('cada enlace debe abrir en nueva pestaña', () => {
    const enlaces = screen.getAllByRole('link')
    
    enlaces.forEach(enlace => {
      expect(enlace).toHaveAttribute('target', '_blank')
    })
  })
})