import {
    type FC,
    lazy
} from 'react'
import { type ILoginFormProps } from './LoginForm'

// TODO Написать общий компонент Lazy с Suspense внутри
export const LazyLoginForm = lazy<FC<ILoginFormProps>>(async () => await new Promise(resolve => {
    setTimeout(() => { resolve(import('./LoginForm')) }, 100)
}))
