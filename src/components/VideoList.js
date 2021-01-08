import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((videoObj) => {
        return <VideoItem key={videoObj.id.videoId}
                onVideoSelect={onVideoSelect} 
                video={videoObj}/>
    })


    return <div className='ui relaxed divided list'>{ renderedList }</div>
}

export default VideoList