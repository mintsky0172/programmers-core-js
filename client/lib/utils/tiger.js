const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// const response = await fetch(END_POINT);

// if(response.ok) {
//     const data = await response.json();
// }

// class Response {
//     async json(res) {
//         return res
//     }
// }

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  const { url, ...rest } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, rest);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

//   const {data} = await tiger ({
//     url: END_POINT,
//     method: 'POST',
//     body: JSON.stringify(obj)
//   });

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};
