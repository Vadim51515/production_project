import { classNames } from './classNames'

describe('classNames', () => {
    test('Только с основным параметром', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('С основным и дополнительными параметрами', () => {
        const expectedValue = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedValue)
    })

    test('С основным, модами, и  дополнительными параметрами\'', () => {
        const expectedValue = 'someClass hovered scrollable class1 class2'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true, disabled: false },
            ['class1', 'class2'])).toBe(expectedValue)
    })

    test('Все переданные моды undefined', () => {
        const expectedValue = 'someClass class1 class2'
        expect(classNames(
            'someClass',
            { hovered: undefined, scrollable: undefined, disabled: undefined },
            ['class1', 'class2'])).toBe(expectedValue)
    })
})
