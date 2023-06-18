import {
} from "../constants/Theme";


const initialState = {
    selectedUser:{}
}
const theme = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                selectedUser: action.payload
            };
        case 'GET_USER':
            return state?.selectedUser
        default:
            return state;
    }
};

export default theme