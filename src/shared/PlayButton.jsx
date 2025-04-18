import React, { useState } from 'react'
import playVideo from '../assets/play-video.svg'
import playVideoHover from '../assets/play-video-hover.svg'

function PlayButton() {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  const preventDrag = (e) => e.preventDefault()

  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex items-center gap-2 mt-4 animate-pulse hover:animate-none"
    >
      <img
        onDragStart={preventDrag}
        src={hovered ? playVideoHover : playVideo}
        className="hover:cursor-pointer"
        alt="play video"
      />
    </a>
  )
}

export default PlayButton
