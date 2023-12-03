import 'app/styles/index.scss'
import { type Story } from '@storybook/react'

// TODO Разобраться, что нужно возвращать
export const styleDecorator = (story: () => Story) => story()
