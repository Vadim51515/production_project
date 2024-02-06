export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('ProfileEditBtn').click();
    cy.getByTestId('firstNameInput').clear().type(firstname);
    cy.getByTestId('surnameInput').clear().type(lastname);
    cy.getByTestId('ProfileSaveBtn').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asasf' },
        body: {
            id: '1',
            firstName: 'Вадим',
            surname: 'Пушкин',
            age: '22',
            currency: 'RUB',
            country: 'Russia',
            city: 'Екатеринбург',
            username: 'inhellim',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
        },
    });
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
