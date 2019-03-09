import API from './../utils/api';

export const GET_USER_LIST = 'GET_USER_LIST';

function userListAction({ data }) {

  return {
    type: GET_USER_LIST,
    users: data
  }
}

export function getUserList() {

  return (dispatch) => {

    return API
      .getUserList()
      .then(
        userRawResponse => {
          return dispatch(userListAction(userRawResponse));
        }
      )
  }
}