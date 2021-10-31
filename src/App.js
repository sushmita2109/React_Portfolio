
import './App.css';
import profilePic from  './link_profile_pic.jpeg';

function App() {
  return (
    <div className="App">
      <img className="profilepic" src={profilePic} alt="pic"/>
      <br></br>
      <div className="profile_name">
      <h1>Sushmita Kumari</h1>
      
      <h2>Assistant Professor</h2>
      </div>
      <a className="github_link" href="https://github.com/sushmita2109">Github</a>
      <a className="linkedin_link" href="https://www.linkedin.com/in/sushmita-kumari-4393b2ab/">Linkedin</a>
      <p className="details">Hi...Myself Sushmita ...This is a project using React js..
        I have also done projects on android studio and python...
      </p>

    </div>
  );
}

export default App;
