import { type IRating } from '../../../entities/Rating'
import { rtkApi } from '../../../shared/api'

interface IGetProfileArg {
    userId: string
    profileId: string
}

interface IRateProfileArg {
    userId: string
    profileId: string
    rate: number
    feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<IRating[], IGetProfileArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId
                }
            })
        }),

        rateProfile: build.mutation<IRating[], IRateProfileArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg
            })
        })
    })
})

export const useGetProfileRatingQuery = profileRatingApi.useGetProfileRatingQuery
export const useRateProfileMutation = profileRatingApi.useRateProfileMutation
