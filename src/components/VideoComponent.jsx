import React, { useState } from "react";
import Modal from "react-modal";

const video = [
  { id: 1, title: "Video 1", src: "https://www.youtube.com/embed/sample1" },
  { id: 2, title: "Video 2", src: "https://www.youtube.com/embed/sample2" },
  { id: 3, title: "Video 3", src: "https://www.youtube.com/embed/sample3" },
];

const VideoComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleOpenVideo = (src) => {
    setCurrentVideo(src);
    setIsOpen(true);
  };

  const handleCloseVideo = () => {
    setIsOpen(false);
    setCurrentVideo("");
  };

  return (
    <section id="video" className="py-5 video-section">
      <h2 className="text-center">Our Goshala in Action</h2>

      {/* Horizontal Layout for Video Thumbnails */}
      <div className="video-container">
        {video.map((video) => (
          <div
            key={video.id}
            className="video-item"
            onClick={() => handleOpenVideo(video.src)}
            aria-label={`Open Video ${video.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.src
                .split("/")
                .pop()}/0.jpg`}
              alt={video.title}
              className="video-thumbnail"
            />
            <h4 className="video-title">{video.title}</h4>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseVideo}
        className="video-modal"
        overlayClassName="video-overlay"
      >
        <button className="close-button" onClick={handleCloseVideo}>
          X
        </button>
        <iframe
          width="100%"
          height="100%"
          src={currentVideo}
          title="Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  );
};

export default VideoComponent;
