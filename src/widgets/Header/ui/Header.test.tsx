import { render, screen } from '@testing-library/react'
import React from 'react'
import { Header } from './Header'
describe('Header', () => {
    test('Header отрендерился', () => {
        render(<Header />)
        expect(screen.getByTestId('header')).toBeInTheDocument()
    })
})
