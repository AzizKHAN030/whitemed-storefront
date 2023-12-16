import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
};

export const getBillboards = async (): Promise<Billboard[]> => {
  const response = await fetch(URL);

  return response.json();
};

export default getBillboards;
