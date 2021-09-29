const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    isAuth: false,
    isLoading: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

export const setIsAuth = (bool) => ({ type: SET_IS_AUTH, payload: bool })
export const setIsLoading = (bool) => ({ type: SET_IS_LOADING, payload: bool })