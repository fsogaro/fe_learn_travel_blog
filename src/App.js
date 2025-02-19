import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';

function App() {

  const myarticle = {
    url_link: "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
    text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    img : "https://scrimba.com/links/travel-journal-japan-image-url",
    alt_img : "Image of Mount Fuji",
    country : "Japan",
    title: "Mount Fuji",
    dates: "12 Jan, 2023 - 24 Jan, 2023",
  }

  const { url_link, text, alt_img, img, country, title, dates} = myarticle

  return (
    <div className="App">
      <Header />
      <Entry 
          img={img}
          alt_img ={alt_img}
          country={country}
          url={url_link}
          title={title}
          dates={dates}
          text={text}
      />
    </div>
  );
}

export default App;
