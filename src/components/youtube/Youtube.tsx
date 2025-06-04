import './youtube.scss';

interface YoutubeEmbedProps {
  embedId: string;
}

export function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
   <div className="video-center-container">
    <div className="video-responsive">
       <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
  );
}
