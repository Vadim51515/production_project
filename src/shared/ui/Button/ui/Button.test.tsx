import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import React from 'react'
describe('Button', () => {
    test('Кнопка рендеритсья на экране', () => {
        render(<Button>{'Test'}</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Кнопка c паттерном clear, имеет данный класс', () => {
        render(<Button pattern='clear'>{'Test'}</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
