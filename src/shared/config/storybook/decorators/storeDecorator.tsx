import React from 'react'
import { type Story } from '@storybook/react'
import { StoreProvider } from '../../../../app/providers/StoreProvider'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import type { DeepPartial } from '../../../../app/types'
export const storeDecorator = (state: DeepPartial<IStateSchema>) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    )
}
