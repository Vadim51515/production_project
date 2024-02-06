let currentArticleId: string
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })

    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails').should('exist')
    })

    it('И видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })

    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails')
        cy.getByTestId('ArticleDetailsComments').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentCard').should('have.length', 1)
    })

    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })

    it('И ставит оценку с использованием фикстур', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
        cy.getByTestId('ArticleDetails')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(3, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })
})
