import { fetchProfileData } from './services/fetchProfileData';
import { updateProfileData } from './services/updateProfileData';
import { profileSliceActions } from './slice/profileSlice';

export const profileActions = {
    fetchProfileData,
    updateProfileData,
    ...profileSliceActions,
};
