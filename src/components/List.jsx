import { useState, useEffect } from "react";

const List = ( accessToken ) => {
    const[topTracks, setTopTracks] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // useEffect(() => {
    //     response = fetch()

    //     setTopTracks(response);
    // }, []);
    
    return (
        <>
            <input
                type="text"
                placeholder="Search top tracks"
                className="w-1/2 font-medium italic py-1 px-3 rounded-md"
                //   onChange={(inputString) => searchItems(inputString.target.value)}
            />
            
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
                            <td className="border border-gray-200">{index + 1}</td>
                            <td className="border border-gray-200">{track.name}</td>
                            <td className="border border-gray-200">{track.artist}</td>
                            <td className="border border-gray-200">{track.album}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default List;