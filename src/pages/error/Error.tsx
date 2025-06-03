import error from "/error_404.jpg"
import "./error.scss"

export function Error() {
    return (
        <div className="img_error">
            <img src={error} alt="représentation artistique de l'erreur 404" />
        </div>
    )
}