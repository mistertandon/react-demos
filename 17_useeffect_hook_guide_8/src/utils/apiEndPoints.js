export const getUserList = () => {

    return fetch(url)
        .then(
            (response) => {
                return response.json()
            }
        )
}