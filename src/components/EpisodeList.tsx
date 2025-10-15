import React, { useEffect, useState } from 'react';
import Card from './Card';
import type { Episode } from '../interfaces/Episode';

const EpisodeList: React.FC = () => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getEpisodes = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch episodes');
                }
                const data = await response.json();

                const episodeData: Episode[] = data.map((item: { id: number; title: string; body: string }) => ({
                    id: item.id,
                    title: item.title,
                    description: item.body,
                }));
                setEpisodes(episodeData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching episodes', error);
                setError('Failed to load episodes. Please try again later.');
                setLoading(false);
            }
        };
        getEpisodes();
    }, []);
    return (
        <div className="App w-full">
            <h1>Podcast Episodes</h1>
            {loading ? <p>Loading...</p>: (
                <ul className="flex flex-wrap w-full gap-4 justify-center items-center">
                    {episodes.map(({ description, title, id }) => (
                        <li key={id} className="flex-grow sm:flex-grow-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card description={description} title={title} id={id} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default EpisodeList;