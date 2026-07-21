import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header' // Ajusta la ruta según tu estructura

describe('Componente Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('debe renderizar todas las imágenes', () => {
    const imagenes = screen.getAllByRole('img')
    expect(imagenes.length).toBe(4) // Hay 4 imágenes en tu componente
  })

  it('debe renderizar el logo principal de ODM', () => {
    const logo = screen.getByAltText('logotipo Omnibus de Mexico')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', 'svg/logo-odm.svg')
    expect(logo).toHaveAttribute('width', '300')
  })

  it('debe renderizar el texto del header', () => {
    const textoHeader = screen.getByAltText('tuxpan, tu proximo destino')
    expect(textoHeader).toHaveAttribute('src', 'svg/texto-header.svg')
  })

  it('debe renderizar la imagen de amenidades', () => {
    const amenidades = screen.getByAltText('prueba nuestro servicio plus')
    expect(amenidades).toHaveAttribute('src', 'svg/amenidades.svg')
  })

  it('debe renderizar la imagen principal (hero)', () => {
    const imagenPrincipal = screen.getByAltText('viaja a tuxpan con omnibus de mexico')
    expect(imagenPrincipal).toHaveAttribute('src', 'img/main.webp')
    expect(imagenPrincipal).toHaveAttribute('fetchpriority', 'high')
  })

  it('todas las imágenes deben tener atributo alt descriptivo', () => {
    const imagenes = screen.getAllByRole('img')
    
    imagenes.forEach(img => {
      const alt = img.getAttribute('alt')
      expect(alt).toBeDefined()
      expect(alt?.trim()).not.toBe('') // No debe estar vacío
    })
  })
})