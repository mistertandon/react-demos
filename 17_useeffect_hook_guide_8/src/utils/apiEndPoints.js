import { USER_API_BASE_URL } from './../constant'

const headers = {
    'Accept': 'application/json'
}

export const getUserList = () => {

    return fetch(`${USER_API_BASE_URL}api/users?page=2&per_page=5`, {
        'headers': {
            ...headers,
            'method': 'GET'
        }
    })
        .then(
            (response) => {

                return response.json()
            }
        )
}