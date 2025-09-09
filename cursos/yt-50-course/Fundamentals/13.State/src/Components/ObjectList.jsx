import { useState } from "react";

function ObjectList() {

    const [movies, setMovies] = useState({
        name: 'Harry Potter',
        rating: 7,  
    })
    const changeRating = () => setMovies({
        ...movies, rating: 5
    })

    return (
        <div>
            <p>{movies.name}</p>
            <p>{movies.rating}</p>
            <button onClick={changeRating}>Change Rating</button>
        </div>  
    );
}

export default ObjectList;
