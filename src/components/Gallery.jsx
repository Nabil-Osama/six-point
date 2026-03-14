import React, { useState } from 'react'
import { Play, X, Volume2, VolumeX } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'
import './Gallery.css'

// Import images
import img1 from '../assets/Images/518381234_122114740262924632_906631706180280234_n.jpg'
import img2 from '../assets/Images/577306488_122140533086924632_284076888965708487_n.jpg'
import img3 from '../assets/Images/619464270_17869074192537493_6440135439401881340_n.jpg'
import img4 from '../assets/Images/621996498_122155263104924632_5754797658795535941_n.jpg'

// Import videos
import video1 from '../assets/Videios/Every corner at Six Point Cafe feels like your favorite spot. ✨ المكان اللي هتهرب فيه من الدوشة..mp4'
import video2 from '../assets/Videios/The perfect drink for winter days. 🍫الهوت شوكليت كيندر في Six Point مش مجرد مشروب ده دفا، وطعم .mp4'

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isMuted, setIsMuted] = useState(false)
  const { t } = useLanguage()
  const images = [
    { 
      id: 1, 
      src: img1,
      title: 'Sixpoint Ambiance',
      category: 'cafe'
    },
    { 
      id: 2, 
      src: img2,
      title: 'Perfect Setting',
      category: 'interior'
    },
    { 
      id: 3, 
      src: img3,
      title: 'Coffee Culture',
      category: 'coffee'
    },
    { 
      id: 4, 
      src: img4,
      title: 'Cozy Atmosphere',
      category: 'ambiance'
    },
  ]

  const videos = [
    {
      id: 1,
      src: video1,
      title: 'Every corner at Six Point Cafe feels like your favorite spot ✨',
      description: 'المكان اللي هتهرب فيه من الدوشة',
      thumbnail: img3,
      duration: '0:45'
    },
    {
      id: 2,
      src: video2,
      title: 'The perfect drink for winter days 🍫',
      description: 'الهوت شوكليت كيندر - دفا وطعم',
      thumbnail: img1,
      duration: '0:38'
    }
  ]

  const openVideoModal = (video) => {
    setSelectedVideo(video)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>{t(translations.gallery.title)}</h2>
        <p className="gallery-subtitle">
          {t(translations.gallery.subtitle)}
        </p>
        
        {/* Images Grid */}
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <span className="category-tag">{t(translations.gallery.categories[image.category])}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Section with Amazing Design */}
        <div className="videos-section">
          <h3 className="section-title">{t(translations.gallery.videosTitle)}</h3>
          <p className="videos-subtitle">{t(translations.gallery.videosSubtitle)}</p>
          
          <div className="videos-showcase">
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail-wrapper" onClick={() => openVideoModal(video)}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="video-thumbnail"
                  />
                  <div className="video-overlay">
                    <div className="play-button-wrapper">
                      <div className="play-button-pulse"></div>
                      <button className="play-button">
                        <Play size={40} fill="white" />
                      </button>
                    </div>
                  </div>
                  <div className="video-duration-badge">{video.duration}</div>
                </div>
                <div className="video-card-content">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="video-description">{video.description}</p>
                  <button 
                    className="watch-now-btn"
                    onClick={() => openVideoModal(video)}
                  >
                    <Play size={18} />
                    {t(translations.gallery.watchNow)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="video-modal-overlay" onClick={closeVideoModal}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeVideoModal}>
                <X size={28} />
              </button>
              <div className="modal-video-wrapper">
                <video 
                  className="modal-video-player"
                  controls
                  autoPlay
                  muted={isMuted}
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button className="mute-toggle-btn" onClick={toggleMute}>
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
              <div className="modal-video-info">
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="social-prompt">
          <p>{t(translations.gallery.socialPrompt)}</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/sixpoint.eg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn instagram"
            >
              📷 Instagram
            </a>
            <a 
              href="https://www.facebook.com/sixpoint.eg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn facebook"
            >
              📘 Facebook
            </a>
            <a 
              href="https://www.tiktok.com/@six_point_eg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn tiktok"
            >
              🎵 TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery