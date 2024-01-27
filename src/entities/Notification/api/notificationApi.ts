import { rtkApi } from '../../../shared/api'
import { type INotification } from '../model/types'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotification: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    })
})

export const useGetNotificationQuery = notificationApi.useGetNotificationQuery
