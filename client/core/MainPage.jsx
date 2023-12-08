import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Styles';

export default function Main(){ 
  return (
    <>
      <Styles/>
      <main>
        <section id="intro">
          <div className="intro-text">
          <img src="\images\logo.png" alt="Filatino Logo" width="300px" height="300px" />
            <h1>Choose a flag below to start a quiz</h1>
          </div>
          
          <div className="flags">
            <div className="flags-row">
              <Link to="/peruQuiz" className="flag-link" data-country="Peru">
                <img src="/images/peru.png" alt="Peruvian Flag" />
              </Link>
              <Link to="/columbiaQuiz" className="flag-link" data-country="Colombia">
                <img src="/images/colombia.png" alt="Colombian Flag" />
              </Link>
            </div>
            <div className="flags-row">
              <Link to="/panamaQuiz" className="flag-link" data-country="Panama">
                <img src="/images/panama.png" alt="Panamanian Flag" />
              </Link>
              <Link to="/philippinesQuiz" className="flag-link" data-country="Philippines">
                <img src="/images/filipinas.png" alt="Philippine Flag" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}