import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리합니다.

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false,
    },
    post: null,
    users: null,
};

const sample = handleActions(
    {
        [GET_POST]: (state) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: true, // 요청 시작
            },
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false, // 요청 완료
            },
            post: action.payload,
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false, // 요청 완료
            },
        }),
        [GET_USERS]: (state) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: true, // 요청 시작
            },
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false, // 요청 완료
            },
            users: action.payload,
        }),
        [GET_USERS_FAILURE]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false, // 요청 완료
            },
        }),
    },
    initialState,
);

export default sample;
