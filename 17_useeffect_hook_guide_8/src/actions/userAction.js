import React from 'react'
import API from './../utils/api'

export const GET_USER_LIST = 'GET_USER_LIST'

export const getUserListAction = ({ data }) => {

    return {
        type: GET_USER_LIST,
        users: data
    }
}

export const getUserList = () => {

    return (dispatch) => {

        return API
            .getUserList()
            .then(
                (usersRawresponse) => {

                    return dispatch(getUserListAction(usersRawresponse));
                }
            )
    }
}