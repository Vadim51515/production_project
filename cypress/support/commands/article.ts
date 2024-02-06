import { type IArticle } from '@/entities/Article'

const defaultArticle = {
    title: 'Node.js',
    subtitle: 'А дойдут ли руки до него?',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js' +
        '_logo.svg/1200px-Node.js_logo.svg.png',
    views: 1876,
    createdAt: '13.01.2024',
    userId: '1',
    type: [
        'IT'
    ],
    blocks: []
}
export const createArticle = (article: IArticle) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asasf' },
        body: article ?? defaultArticle
    }).then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asasf' }
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            createArticle(article?: IArticle): Chainable<IArticle>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
