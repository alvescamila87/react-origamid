import React, { useEffect, useRef } from 'react'

const Video = () => {
    const video = useRef();

    useEffect(() => {
        video.current = "Teste"
        console.log(video.current.currentTime)
    });

    return (
        <video ref={video}>
            teste video
        </video>
    )
}

export default Video
