const host_url = `https://reqres.in`;
const getUsersList = `${host_url}/api/users?page=2&per_page=5`;

const headers = {
  'Accept': 'application/json'
};

export function getUserList() {

  return fetch(getUsersList, {
    'headers': {
      ...headers,
      'method': 'GET'
    }
  }
  ).then(
    (response) => response.json()
  );

}