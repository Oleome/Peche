import Ilot from '/ilot.webp'
import './home.scss'

export function Home() {
    return (
        <div className='ilot'>
            <img src={Ilot} alt="L'ilôt Saint Michel" />
        </div>
    )
}