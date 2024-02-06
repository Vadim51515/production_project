let profileId: string
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit(`profile/${data.id}`)
            profileId = data.id
        })
    })

    afterEach(() => {
        cy.resetProfile(profileId)
    })

    const newFirstName = 'newFirstName'
    const newSurname = 'newSurname'

    it('И профиль успешно загружается', () => {
        cy.getByTestId('firstNameReadonlyText').should('have.text', 'Вадим')
    })

    it('И редактирует его', () => {
        cy.updateProfile(newFirstName, newSurname)
        cy.getByTestId('firstNameReadonlyText').should('have.text', newFirstName)
        cy.getByTestId('surnameReadonlyText').should('have.text', newSurname)
    })

    // it('И профиль успешно загружается', () => {
    //     cy.getByTestId('firstNameReadonlyText')
    // })
})
