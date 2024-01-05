import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Game } from '../entities/Game';

// TODO: fix dependency of game interface
const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
    useQuery({
        queryKey: ['games', slug],
        queryFn: () => apiClient.get(slug),
    });

export default useGame;
