import { fetchProfileData } from './services/fetchProfileData'
import { profileSliceActions } from './slice/profileSlice'

export const profileActions = {
    fetchProfileData,
    ...profileSliceActions
}
