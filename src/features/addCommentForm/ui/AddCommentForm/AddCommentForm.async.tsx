import {
    type ComponentType,
    lazy,
    type LazyExoticComponent
} from 'react'
import { type IAddCommentFormProps } from './AddCommentForm'

export const LazyAddCommentForm: LazyExoticComponent<ComponentType<IAddCommentFormProps>> =
    lazy(async () => await new Promise(resolve => {
        setTimeout(() => { resolve(import('./AddCommentForm')) }, 500)
    }))
