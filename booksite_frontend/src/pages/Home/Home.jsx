import React from 'react';
import './Home.css';
import linkedlnicon from '../../images/linkedlnicon.svg'
import githubicon from '../../images/githubicon.svg'
import emailicon from '../../images/emailicon.svg'
import Lottie from 'lottie-react';
import Navbar from '../../Components/Navbar/Navbar';
import bookanimation from '../../images/mainpageanimation.json'

const Home = () => {

  return (
    <main>
      <Navbar />
      <div className='container-home items-center'>
        <div className='container-1 p-20 flex'>
          <div className='font-radiocanada flex flex-col items-center mt-8'>
            <h1 className='font-extrabold text-center tracking-tighter text-6xl w-80'>
              The super fast book finder!
            </h1>
            <p className='text-center font-semibold text-xl max-w-80 text-grey my-8'>
              Find any book you're looking for or join our community of avid readers.
            </p>
            <button className='mx-auto mb-4 rounded-xl bg-lightblue shadow-lg p-3 w-60'>
              Start Searching
            </button>
            <button className='mx-auto rounded-xl outline shadow-lg p-3 w-60'>
              Explore the Community
            </button>
          </div>
          <div className='ml-32'>
            <Lottie animationData={bookanimation} loop={false} width={200} height={300}/>
          </div>
        </div>
        {/* <span className="border-1 h-0.5 w-11/12 bg-darkwhite mx-5"></span> */}
      </div>
      <div className='container-bottom bg-darkwhite flex items-center px-32 py-8 justify-between'>
        <p className='text-grey font-overpass'>
        @ Novel Corner by <span className='font-bold'>Will Chen</span>. Connecting readers everywhere.
        </p>
        <nav>
          <ul className='flex'>
            <li>
              <a href="https://github.com" target="_blank">
                <img
                className='ml-6'
                src={githubicon}
                alt="github-icon"
                height="40px"
                width="40px"/>
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/will-chen-a62953279/" target="_blank">
                <img
                className='ml-6'
                src={linkedlnicon}
                alt="github-icon"
                height="40px"
                width="40px"/>
              </a>
            </li>
            <li>
              <a href="mailto:(willchen198@gmail.com)" target="_blank">
                <img
                className='ml-6'
                src={emailicon}
                alt="github-icon"
                height="40px"
                width="40px"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Home;