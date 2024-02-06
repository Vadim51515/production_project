export const setRate = (starsCount = 5, feedback = 'feedback') => {
    cy.getByTestId(`StarRating.${starsCount}`).click()
    cy.getByTestId('RatingCardModalInput').type(feedback)
    cy.getByTestId('RatingCardModalOnConfirm').click()
}
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>
        }
    }
}
