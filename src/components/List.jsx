import { useState, useEffect } from "react";

const List = () => {
    const[topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        response = fetch()

        setTopTracks(response);
    }, []);
    
    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                //   onChange={(inputString) => searchItems(inputString.target.value)}
            />
            
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Track</th>
                        <th>Artist</th>
                        <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                    {topTracks.map((track, index) => (
                        <tr key={track.id}>
                            <td>{index + 1}</td>
                            <td>{track.name}</td>
                            <td>{track.artist}</td>
                            <td>{track.album}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default List;