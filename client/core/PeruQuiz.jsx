// import React from 'react';
// import Styles from './styles'; // Adjust the path based on your project structure
// import PeruQuizPopulator from './jsxQuiz/peruQuizPopulator'

// export default function PeruQuiz() {
//   return (
//     <>
//       <Styles /> {/* Include the styles */}

//       <head>

//         <title>Peru Quiz</title>
//         {/* Link to external fonts */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@100&display=swap"
//         />
//       </head>
//       <body>
//         <main>
//           <div id="quiz"></div>
//           <div id="results"></div>

//           <div className="button-container">
//             <button id="submit">Submit</button>

//             {/* Restart Quiz button */}
//             <button id="restart">Restart Quiz</button>
//           </div>
//         </main>

//         <PeruQuizPopulator/>
//       </body>
//     </>
//   );
// }

import React from 'react';
import Styles from '../Styles'; // Adjust the path based on your project structure
import PeruQuizPopulator from './jsxQuiz/peruQuizPopulator';

export default function PeruQuiz() {
  return (
    <>
      <Styles /> {/* Include the styles */}

      <main>
        <PeruQuizPopulator />

        <div className="button-container">
          <button id="submit">Submit</button>
          {/* Restart Quiz button */}
          <button id="restart">Restart Quiz</button>
        </div>
      </main>
    </>
  );
}
