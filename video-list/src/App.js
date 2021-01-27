import React, {useEffect, useState} from 'react';
import './App.css';
import VideoList from "./components/list/video_list";

function App() {
  const [vidoes, setvides] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDirEgqenIcV7esmshBlnWwos1FIrcPqvw", requestOptions)
      .then(response => response.json())
      .then(result => setvides(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <VideoList vidoes={vidoes} />
  );
}

export default App;
