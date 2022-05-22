import { NextApiRequest, NextApiResponse } from 'next';

const route = (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Diego' },
    { id: 1, name: 'Dani' },
    { id: 1, name: 'Rafa' },
  ];

  return response.json(users);
};

export default route;
