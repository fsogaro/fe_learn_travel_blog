
export default function Entry(props){
    console.log(props)

    return(
        <article>
            <div className="main-img-container">        
                <img 
                    src={props.img.src} 
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <img src="marker.png" alt ="location marker"/>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h1>{props.title}</h1>
                <h2>{props.dates}</h2>
                <p>{props.text}</p>
                <hr /> 
            </div>
        </article>
    );
}