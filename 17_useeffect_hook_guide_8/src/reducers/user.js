
import React from 'react'

import { GET_USER_LIST } from './../actions/userAction'

const defUserState = {

    users: []
}

export const user = (state = defUserState, action) => {

    switch (action.type) {

        case GET_USER_LIST: return {
            ...state,
            users: action.users
        }

        default: return state
    }
}