import { type ISharedState } from '../../../app/providers/StoreProvider'

export enum ArticleBlockTypes {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

export interface IArticleCodeBlock {
    id: string
    type: ArticleBlockTypes.CODE
    code: string
}

export interface IArticleTextBlock {
    id: string
    type: ArticleBlockTypes.TEXT
    title: string
    paragraphs: string[]
}

export interface IArticleImageBlock {
    id: string
    type: ArticleBlockTypes.IMAGE
    title: string
    src: string
}

export type TArticleBlock = IArticleImageBlock | IArticleTextBlock | IArticleCodeBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface IArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: TArticleBlock[]
}

export interface IArticleDetailsState extends ISharedState {
    data?: IArticle
}
