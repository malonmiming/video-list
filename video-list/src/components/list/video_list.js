import React from 'react';
import VideoItem from '../item/video_item';
import styles from './video_list.module.css';


const VideoList = props => (
  <ul className={styles.videos}>
    {props.vidoes.map(video => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;