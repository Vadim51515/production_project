import {
    fireEvent,
    screen
} from '@testing-library/react'
import React from 'react'
import { componentRender } from '../../../shared/lib/tests/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
    const initialState = {
        counter: {
            value: 10
        }
    }

    test('Компонент отрисовывает value', () => {
        componentRender(<Counter />, { initialState })
        expect(screen.getByTestId('counterValue')).toHaveTextContent('10')
    })

    test('Компонент увеличивает value на 1', () => {
        componentRender(<Counter />, { initialState })
        fireEvent.click(screen.getByTestId('counterIncrementBtn'))
        expect(screen.getByTestId('counterValue')).toHaveTextContent('11')
    })

    test('Компонент уменьшает value на 1', () => {
        componentRender(<Counter />, { initialState })
        fireEvent.click(screen.getByTestId('counterDecrementBtn'))
        expect(screen.getByTestId('counterValue')).toHaveTextContent('9')
    })
})
