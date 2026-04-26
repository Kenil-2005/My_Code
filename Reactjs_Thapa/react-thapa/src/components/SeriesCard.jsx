export const SeriesCard = ({data}) => { // we can directly destructure data here by not passing props but directly writing {data} 
    // const { data } = props; // using this we can atleast remove props(destructruing)
    const { id, img_url, name, rating, description, cast, genre, watch_url } = data; // using this we can directly access the data

    return (
        <li>
            <div>
                <img src={img_url} alt={name} width="25%" height="25%" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>
                Summary: {description}
            </p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    )
};