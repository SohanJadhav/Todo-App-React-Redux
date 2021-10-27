let userReducer = function (state = {}, action) {
    let user = state.user || {}
    switch (action.type) {
        case 'CREATE_USER_ID':
            user = {
                username: user.username,
                id: action.id
            }

            return Object.assign({}, { user })
        default:
            return state;
    }
}

export default userReducer
