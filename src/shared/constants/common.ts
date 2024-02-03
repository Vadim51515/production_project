export enum Currency {
    RUB = 'RUB',
    EUR = 'EUR',
    USD = 'USD',
}

export enum Contry {
    Russia = 'Russia',
    Belarus = 'Belarus',
    Ukraine = 'Ukraine',
    Kazakhstan = 'Kazakhstan',
    Armenia = 'Armenia',
}

export enum RuntimeStatuses {
    BeforeInitial = 'before-initial',
    Ready = 'ready',
    Loading = 'loading',
    Error = 'error',
}

export const ErrorsStatuses = {
    FieldRequired: 'Поле обязательно для заполнения',
    ServerError: 'Серверная ошибка'
}

export enum AppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'not_found',
    Profile = 'profile',
    Articles = 'articles',
    ArticleDetails = 'article_details',
    ArticleCreate = 'article_create',
    ArticleEdit = 'article_edit',
    AdminPanel = 'admin_panel',
    Forbidden = 'forbidden'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
