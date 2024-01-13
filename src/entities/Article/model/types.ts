import { type ISharedState } from '../../../app/providers/StoreProvider'
import { type IUser } from '../../User'

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
    All = 'All',
    IT = 'IT',
    Weapons = 'Weapons',
    Politics = 'Politics',
    Medicine = 'Medicine',
    Economics = 'Economics',
    Cryptocurrency = 'Cryptocurrency',
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
    user: IUser
}

export interface IArticleDetailsState extends ISharedState {
    data?: IArticle
}
export type TArticleViewType = 'list' | 'tile'

export type TArticleSortField = 'views' | 'title' | 'createdAt'

export interface ISortFieldNameOption {
    value: TArticleSortField
    label: string
}
