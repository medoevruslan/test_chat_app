const initialState = {
    user: {},
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_IS_AUTH':
            return { ...state, isAuth: action.payload }
        default:
            return state;
    }
}

