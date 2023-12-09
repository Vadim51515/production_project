import { Provider } from 'react-redux'
import { type CFC } from '../../../types'
import { type IStateSchema } from '../config/stateSchema'
import { createReduxStore } from '../config/store'

interface IStoreProvider {
    initialState?: Partial<IStateSchema>
}
export const StoreProvider: CFC<IStoreProvider> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
