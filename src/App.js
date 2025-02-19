import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import travel_data from "./data.js"

function App() {
  console.log(travel_data)

  const blog_content = travel_data.map(
    (trip) => (
      <Entry 
          key={trip.id}
          img={trip.img}
          country={trip.country}
          url={trip.url_link}
          title={trip.title}
          dates={trip.dates}
          text={trip.text}
      />
   )
  )

  console.log(blog_content)

  return (
    <div className="App">
      <Header />
      {blog_content}
    </div>
  );
}

export default App;
