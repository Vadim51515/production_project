import { type ISharedState } from '../../../app/providers/StoreProvider'

export interface IUIPageState extends ISharedState {
    scroll: Record<string, number>
}
