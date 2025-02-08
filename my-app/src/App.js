// import "./global.css";
// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from './components/Main';
// import Sidebar1 from './components/sidebar1';
// import Sidebar2 from './components/sidebar2';
// import Footer from './components/Footer';

// class App extends React.Component{
//   render(){
//     return(
//       <div className='App'>
//         <Navbar/>
//         <Main/>
//         <div className='side'>
//           <Sidebar1/>
//           <Sidebar2/>
//         </div>
//         <Footer/>
//       </div>
//   )}
// };

// export default App;

// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <hr/>
//         <br></br>
//         <hr/>
//         <CBCPropEx1
//         username="Sahil"
//         age={19}
//         hobbies={["Playing","Studying","Research"]}
//         address={{city:"Hyderabad", area:"Kukatpally"}}
//         isMajor={true}
//         sendFun={function(){alert("Hi Sahil😎")}}
//         />
//       </div>
//     )
//   }
// }


// import React from "react";
// import FBCPRopExample from "./propexample/FBCPropex1.jsx";

// function App() {
 
//   return (
//     <div>
//      <FBCPRopExample 
//       username="Sahil"
//       isLoggedin={true}
//       profiles={["Snap","Instagram","Facebook","X"]}
//      />
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import PropsChildren from './propexample/PropsChildren'
// import SubChildProps from './propexample/SubChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildren username="Chaitanya" company="Google">
//         <h1>This data is passing as props to child</h1>
//         <SubChildProps></SubChildProps>
//       </PropsChildren>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'

// const App = () => {
//   return (
//     <div>
//         <CBCStateEx/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import FBCStateEg from './stateexamples/FBCStateEx'
// // import CBCStateEg from './stateexamples/CBCStateEg'

// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEg/> */}
//       <FBCStateEg/>
//     </div>
//     )
// }

// export default App


import React from 'react'
import Form from './components/Form'
// import CBCStateEg from './stateexamples/CBCStateEg'
// import FBCStateEg from './stateexamples/FBCStateEg'
// import FunctionalComp from './components/FunctionalComp'
// import ClassComponent from './components/ClassComponent'


const App = () => {
  return (
    <div>
      {/* <CBCStateEg/> */}
      {/* <FBCStateEg/> */}
      {/* <FunctionalComp clgname='MRU' location='HYD' apply={true} /> */}
      {/* <ClassComponent/> */}
      <Form/>
    </div>
    )
}

export default App