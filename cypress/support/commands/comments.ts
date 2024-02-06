export const addComment = (text: string) => {
    cy.getByTestId('NewCommentInput').type(text);
    cy.getByTestId('AddNewCommentBtn').click();
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
