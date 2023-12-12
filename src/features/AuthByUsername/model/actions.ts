import { loginByUsername } from './services/loginByUsername/loginByUsername'
import {
    setPassword,
    setUsername
} from './slice/loginSlice'

export const loginActions = {
    setUsername,
    setPassword,
    loginByUsername
}
