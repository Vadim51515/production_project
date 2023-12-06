import {
    fireEvent,
    screen
} from '@testing-library/react'
import React from 'react'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { componentRender } from '../../../../shared/lib/tests/componentRender'

describe('Sidebar', () => {
    test('Sidebar рендериться', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Кнопка смены размера Sidebar работает', () => {
        componentRender(<Sidebar />)
        const toggleSizeBtn = screen.getByTestId('sidebar-toggle-size')
        expect(toggleSizeBtn).toBeInTheDocument()
        fireEvent.click(toggleSizeBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
