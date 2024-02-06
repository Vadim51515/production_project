import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { componentRender } from '../../../../shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar рендериться', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Кнопка смены размера Sidebar работает', () => {
        componentRender(<Sidebar />);
        const toggleSizeBtn = screen.getByTestId('sidebar-toggle-size');
        expect(toggleSizeBtn).toBeInTheDocument();
        fireEvent.click(toggleSizeBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
