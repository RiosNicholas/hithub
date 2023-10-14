import { useState, useEffect } from "react";

const Stats = ({ statType, value, imageUrl }) => {
    const[topArtist, getTopArtist] = useState('');
    const[topGenre, getTopGenre] = useState('');
    const[minutesPlayed, getMinutesPlayed] = useState(0);

    let content;
    switch (statType) {
        case "topArtist":
        content = (
            <>
                <img className='h-2' src={imageUrl} alt="Top Artist" />
                <p>Top Artist: {value}</p>
            </>
        );
        break;
        case "topGenre":
        content = (
            <>
                <p>Top Genre: {value}</p>
            </>
        );
        break;
        case "minutesPlayed":
        content = (
            <>
                <p>Minutes Played: {value}</p>
            </>
        );
        break;
        default:
        content = <p>No valid statistic type provided.</p>;
    }

    return (
        <>
            {content}
        </>
    );
}
export default Stats;