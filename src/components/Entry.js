/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry(props){
    return(
        <article>
            <div className="main-img-container">        
                <img src={props.img} width="100px" alt={props.alt_img}/>
            </div>
            <div className="info-container">
                <img src="marker.png" alt ="location marker"/>
                <span>{props.country}</span>
                <a href={props.url_link}>View on Google Maps</a>
                <h1>{props.title}</h1>
                <h2>{props.dates}</h2>
                <p>{props.text}</p>
            </div>
        </article>

    );
}