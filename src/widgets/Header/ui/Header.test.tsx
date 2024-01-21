import { screen } from '@testing-library/react'
import React from 'react'
import { componentRender } from '../../../shared/lib/tests/componentRender'
import { Header } from './Header'
describe('Header', () => {
    test('Header отрендерился', () => {
        componentRender(<Header />)
        expect(screen.getByTestId('header')).toBeInTheDocument()
    })
})
