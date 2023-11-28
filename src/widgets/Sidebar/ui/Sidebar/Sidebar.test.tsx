import {
    fireEvent,
    screen
} from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    test('Sidebar рендериться', () => {
        renderWithTranslation(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        )
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Кнопка смены размера Sidebar работает', () => {
        renderWithTranslation(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        )
        const toggleSizeBtn = screen.getByTestId('sidebar-toggle-size')
        expect(toggleSizeBtn).toBeInTheDocument()
        fireEvent.click(toggleSizeBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
