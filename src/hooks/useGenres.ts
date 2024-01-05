import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import APIClient from '../services/api-client';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        // TODO: Change query fn to a function call
        queryFn: apiClient.getAll,
        staleTime: ms('24h'), // 24h
        initialData: genres,
    });

export default useGenres;
