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
