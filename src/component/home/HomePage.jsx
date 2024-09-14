import React, { useState } from "react";
import UploadComponent from "./UploadVideo";
// import RoomResult from "../common/RoomResult";
// import RoomSearch from "../common/RoomSearch";

import VideoInput from "../video/VideoInput"



const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home">
            {/* HEADER / BANNER ROOM SECTION */}
            <section>
                <header className="header-banner">
                    <img src="./assets/images/hotel.webp" alt="Phegon Hotel" className="header-image" />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Welcome to <span className="phegon-color">Video Summarizer Studio</span>
                        </h1>
                    </div>
                </header>
            </section>

            {/* Upload your video */}
            {/* <UploadComponent/> */}
            <br />
            <section>
                <h1>Video upload</h1>
                <br />
                <VideoInput height={300} />
            </section>



            {/* <RoomSearch handleSearchResult={handleSearchResult} /> */}
            {/* <RoomResult roomSearchResults={roomSearchResults} /> */}



        </div>
    );
}

export default HomePage;