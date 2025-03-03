import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import ContactMe from './components/ContactMe.js';
import travel_data from "./data.js"

function App() {
  console.log(travel_data)

  const blog_content = travel_data.map(
    (trip) => {
      return (
        <Entry 
            key={trip.id}
            {...trip}
        />
      )
    }
  )

  console.log(blog_content)

  return (
    <div className="App">
      <Header />
        {blog_content}
      <ContactMe />
    </div>
  );
}

export default App;
