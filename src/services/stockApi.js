import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const stockApiHeaders = {
    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
    'X-RapidAPI-Key': 'afabb71cfbmsh1a4717288c634bfp1c6ab6jsnb0c860962033'
};

const servar = 'https://twelve-data1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: stockApiHeaders });

export const stockApi = createApi({
    reducerPath: 'stockApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getStocks: builder.query({
            query: (q) => createRequest(`/stocks?q=${q}`),
        })
    })
});

export const { useGetStocksQuery } = stockApi;