import locationIcon from "../images/icons8-location-48.png"


export default function Article(props) {
    return (
        <article>
            <img src={props.imageUrl} alt="" />
            <div>
            <div className="article-header">
                <div className="location-info">
                    <img className="location-icon" src={locationIcon} alt=""/>
                    <p className="location-name">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="article-title">{props.title}</h2>
            </div>
            <div>
                <date className="article-date">{props.startDate}-{props.endDate}</date>
                <p className="article-text">{props.description}</p>
                </div>
            </div>
        </article>
    )
}