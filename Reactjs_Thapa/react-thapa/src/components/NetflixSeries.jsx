import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard"

// export const NetflixSeries = () => { /** for name export */
const NetflixSeries = () => {
    return (
        <ul >
            {seriesData.map((curElem) => (
                <SeriesCard key={curElem} data={curElem} />
            ))}
        </ul>
    );
};

export default NetflixSeries; /** For Default export */

export const Footer = () => {
    return <p>copyright @ABCxyz</p>
};