
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
};

export const getUser = () => {
    return {
        type: 'GET_USER',
    }
};