import './css/App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/movieContext';
{/*
// Notes: resource hubspot.com - good resource for nav bars, css templates...
// React code ends in .jsx and React is made up of JS functions and consists of JS and HTML
// jsx - must have a parent element - cant have two div's at same level inside of function unless adding a fragment
// <> </> is a fragment - solves problem of problem of two DIVs at same level
// everything revolves around component
S
// First thing:
// download node.js and add to path
// Create folderm for React project 
// use Vite to run you ReactJS app
// in vscode terminal - cd to new React folder (created above) - npm create vite@latest
// prompted for project name (frontend), Framework (React), scripting lang (javascript)
// It creates folder, in terminal - cd to frontend, install packages (package.json - has all packages)
// npm install (reads dependencies from package.json)
// now have node_modules folder - new packages added in this folder (all code and dependencies)
// all code injected by React into the <div id="root"></div> in index.html (the DOM)
// all code in src folder
// to run - npm run dev -> shows link - cmd click to run it in browser (cntr + z to quit)
// it does have hot reload - automatically refreshes page in browser
// main.jsx - starting palce for React apps

// when building an app - think about what components you need
// also separate functionality into diff folders - components, pages (also for api calls...)
// creating a component always start with return <div className="test-card"> </div>

// Adding the react router
// stop vite (ctr z) and install the react router
// npm install react-router-dom -> adds it into the package.json and in the node_modules folder
// update the main.jsx with <BrowserRouter> and import above and add <Routes> below

// github notes:
// to download the react movie project - get the github url for the source (https://github.com/techwithtim/Learn-React-In-One-Project) - can view it in browser.
// open command prompt - create a folder and cd into it and run command below:
// git clone https://github.com/techwithtim/Learn-React-In-One-Project
// note: had to download and install developer tools to be able to run the above command
*/}

function App() {
  // const movieNumber = 1;
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
    // <>
    // <Home />
    // conditional rendering
  //  {movieNumber === 1 ? (<MovieCard movie={{title: "scotts film",  release_date: "2024"}}/>)
    // : (<MovieCard movie={{title: "freds film",  release_date: "2020"}}/>)}

    //short circuiting
    // {movieNumber === 1 ? }
    // </> 
  );
}


{/*
// function below is called like this
<Text display="Matrix" />

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
} */}

// need to add this so it can be used in another file as an import
export default App
