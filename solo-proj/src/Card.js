import './style.css';
import flagImg from "./flag.png"

function Card (props){
    return (
        <div>
            <div className="cards">
                <img src={props.item.imageUrl} className="coverImg" />
                <div className="rightTitle">
                    <img src={flagImg} className="flagImg" />
                    <span className="locationTxt">{props.item.location}</span>
                    <span className="googleMaps"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                    <h2>{props.item.title}</h2>
                    <span className="dates">{props.item.startDate} - {props.item.endDate}</span>
                    <p className="descrip">{props.item.description}</p>
                </div>
                {/* <span>{props.item.stats.rating}</span>
                <span className="gray">{` ${props.item.stats.reviewCount}`}  •</span>
                <span className="gray">{props.item.location}</span>
                <p>{props.item.title}</p>
                <p><span className="bold">${props.item.price} </span>/ person</p> */}
            </div>
        </div>
    )
}

export default Card