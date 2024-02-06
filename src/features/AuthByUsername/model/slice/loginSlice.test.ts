import { loginActions } from '../actions';
import { type ILoginState } from '../types';
import { loginReducer } from './loginSlice';

describe('loginSlice', () => {
    const state = {
        username: 'admin',
        password: '123',
    } as ILoginState;

    test('Корректно меняем поле username', () => {
        expect(loginReducer(state, loginActions.setUsername('test_admin'))).toStrictEqual({
            ...state,
            username: 'test_admin',
        });
    });

    test('Корректно меняем поле password', () => {
        expect(loginReducer(state, loginActions.setPassword('321'))).toStrictEqual({
            ...state,
            password: '321',
        });
    });
});
