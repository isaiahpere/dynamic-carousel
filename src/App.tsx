import { useEffect, useState } from "react";

import { loadImages } from "./api/loadImages";
import { getFormattedTime } from "./utils/helpers";

import "./App.css";

type ImagesProps = {
  id: number;
  url: string;
  time: string;
};

function App() {
  const [images, setImages] = useState<ImagesProps[]>([]);
  const [position, setPosition] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        let formattedDate = getFormattedTime();
        let images = await loadImages(formattedDate);
        setImages(images);
        setIsLoading(false);
      } catch (error) {
        console.log("[FETCH_DATA]", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleReload = async () => {
    setIsLoading(true);
    try {
      let newTime = getFormattedTime();
      let updatedImages = await loadImages(newTime);
      setImages(updatedImages);
      setPosition(0);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    setPosition((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setPosition((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="App">
      <div className="main">
        <div className="img-container">
          {isLoading && <p>Loading...</p>}
          {!isLoading && <img src={images[position]?.url} alt="" />}
        </div>
        {!isLoading && (
          <>
            <p className="time-text">Time: {images[position].time}</p>
            <div className="controls">
              <button className="control-btn" onClick={handlePrevious}>
                Previous
              </button>
              <button className="control-btn" onClick={handleNext}>
                Next
              </button>
            </div>
            <button onClick={handleReload} className="reload-btn">
              Reload
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
