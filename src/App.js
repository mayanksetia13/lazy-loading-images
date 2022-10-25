import { Suspense } from "react";
import "./App.css";
import React, { useEffect, useState } from "react";
// import Photos from "./components/Photos";
const Photos = React.lazy(() => import("./components/Photos"));

function App() {
    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {
        const url = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}&count=24`;
        const res = await fetch(url);
        const data = await res.json();
        setPhotos(data);
    };
    useEffect(() => {
        getPhotos();
    }, []);

    if (!photos) {
        <h1>Loading.....</h1>;
    }

    return (
        <div className="App">
            <h1>React Lazy Loading with blur/opcaity Effect</h1>
            <hr />
            <div className="layout">
                {photos.map((image) => {
                    return (
                        <Suspense key={image.id}>
                            <Photos
                                key={image.id}
                                src={image.urls.thumb}
                                alt={image.description}
                                title={image.user.username}
                                bio={image.user.location}
                            />
                        </Suspense>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
