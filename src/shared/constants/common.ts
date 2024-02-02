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

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.Profile]: '/profile/', // + id
    [AppRoutes.Articles]: '/articles',
    [AppRoutes.ArticleDetails]: '/articles/', // + id
    [AppRoutes.ArticleCreate]: '/articles/new', // + id
    [AppRoutes.ArticleEdit]: '/articles/:id/edit', // + id
    [AppRoutes.AdminPanel]: '/admin', // + id
    [AppRoutes.Forbidden]: '/forbidden', // + id

    // Последний
    [AppRoutes.NotFound]: '*'
}
