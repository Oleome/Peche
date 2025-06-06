// import { YoutubeEmbed } from "../../components/youtube/Youtube";

// export function Home() {
//   return (
//     <div>
//       <YoutubeEmbed embedId="RL2dsqKJE1U" /> {/* Remplace par l'ID de ta vidéo */}
//     </div>
//   );
// }

import { HomeVideo } from "../../components/react-player/React-player";
import './welcome.scss';

export function Welcome() {
  return (
    <div>
      <HomeVideo videoId="RL2dsqKJE1U" /> 
    </div>
  );
}