const initialState = {
    isLoggedIn: false,
    user :[]
};

export const ReducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false
            };
        // case 'GET_USERDATA':
        //     return{
        //         ...state,
        //         user:action.payload
        //     }

        case 'EMAIL_AUTH':
           return {
            ...state,
            isLoggedIn: true,
            user:[action.payload]
            }

        case 'SIGNUP_AUTH':
           return {
            ...state
            }


        // case 'GOOGLE_AUTH':
        //     return {
        //     ...state,
        //     isLoggedIn: true,
        //     user:[action.payload]
        //     }
        default:
            return state;
    }
};
