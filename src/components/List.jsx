import { useState, useEffect } from "react";

const List = ({ accessToken }) => {
    const [topTracks, setTopTracks] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        // FIXME: Results in 400 error
        const getTopTracks = async (accessToken) => {
            try {
                // API endpoint for top tracks
                const endpoint = 'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50';
                
                // Define the request headers with the access token for authentication.
                const headers = {
                    'Authorization': 'Bearer ' + accessToken
                };
                
                // Make the GET request to the Spotify API.
                const response = await fetch(endpoint, { headers });
                
                if (response.status === 200) {
                    const data = await response.json();
                    
                    const tracks = data.items;
                    setTopTracks(tracks);
                } else {
                    console.error(`Error: Status ${response.status}`);
                    console.log(await response.json());
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        getTopTracks(accessToken)
    }, [accessToken]);
    
    return (
        <>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search top tracks"
                    className="w-1/2 font-medium italic py-1 px-3 rounded-md shadow-sm shadow-gray-900/20"
                    //   onChange={(inputString) => searchItems(inputString.target.value)}
                />
            </div>
            
            <table className="my-3">
                <thead className="border border-green-950 bg-green-800 text-white">
                    <tr>
                        <th className="border-green-950 border">#</th>
                        <th className="border border-green-950">Track</th>
                        <th className="border border-green-950">Artist</th>
                        <th className="border border-green-950">Album</th>
                    </tr>
                </thead>
                <tbody className="border border-gray-200 text-black bg-white">
                    {topTracks.map((track, index) => (
                        <tr key={track.id}>
                            <td className="border border-gray-200 overflow-clip">{index + 1}</td>
                            <td className="border border-gray-200 overflow-clip">{track.name}</td>
                            <td className="border border-gray-200 overflow-clip">{track.artist}</td>
                            <td className="border border-gray-200 overflow-clip">{track.album}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default List;