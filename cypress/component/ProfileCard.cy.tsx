import { ProfileCard } from '@/entities/Profile'
import { TestProvider } from '@/shared/lib/tests/componentRender'

const USER_ID = '1'

describe('ProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                username: 'inhellim',
                                id: USER_ID
                            }
                        }
                    }
                }}
            >
                <ProfileCard id={'1'}/>
            </TestProvider>
        )
    })
})
