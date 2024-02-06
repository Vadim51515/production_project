import { type IUser } from '@/entities/User'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage'
import { selectByTestId } from '../../helpers/selectByTestId'

export const login = (username: string = 'admin', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password
        }
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body))
        return body
    })
}

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId))
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<IUser>
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
        }
    }
}
