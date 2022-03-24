import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '166dc0ae92mshe39586c10b1dfbfp1ecedejsnd53b24fa830e'
        }
    });

    return data;
}