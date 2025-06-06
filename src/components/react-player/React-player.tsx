import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ReactPlayer from 'react-player/youtube';
import { motion, AnimatePresence } from 'framer-motion';
import './react-player.scss'; 

interface HomeVideoProps {
  videoId: string;
  redirectTo?: string;
}

export function HomeVideo({ videoId, redirectTo = '/home' }: HomeVideoProps) {
  const [showEmote, setShowEmote] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    setShowEmote(true);
  };

  const handleEmoteClick = () => {
    navigate(redirectTo);
  };

  return (
    <div className="video-center-container">
      <div className="video-responsive">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          playing
          muted
          controls
          onEnded={handleVideoEnd}
        />
        <AnimatePresence>
          {showEmote && (
            <motion.div
              className="emote-cta"
              onClick={handleEmoteClick}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="emote"
                role="img"
                aria-label="Fusée"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                🐟
              </motion.span>
              <div className="cta-text">Clique ici pour entrer sur le site !</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
