import React from "react"

// // ----------------------- Ceating Component -----------------------
// export const App = () => {
//     return (
//         <div>
//             {/* <NetflixSeries 
//             image={img1.png} 
//             name={"Queen of Tears"} 
//             rating={8.3} 
//             summary={"Baek hyun-woo and hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, hyun-woo pays a visit to his family."}/> */}
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//         </div>
//     )
// };
//
// // const NetflixSeries = ({ image }, { name }, { rating }, { summary }) => {
// const NetflixSeries = () => {
//     return (
//         // <div >
//         //     <div>
//         //         <img src={image} alt="image1" width="25%" height="25%" />
//         //     </div>
//         //     <h2>Name: {name}</h2>
//         //     <h3>Rating: {rating}</h3>
//         //     <p>
//         //         Summary: {summary}
//         //     </p>
//         // </div>
//         <div >
//             <div>
//                 <img src="img1.png" alt="image1" width="25%" height="25%" />
//             </div>
//             <h2>Name: Queen of Tears</h2>
//             <h3>Rating: 8.2</h3>
//             <p>
//                 Summary: Baek hyun-woo and hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, hyun-woo pays a visit to his family.
//             </p>
//         </div>
//     );
// };


// // ----------------------- React.Fragments -----------------------
// ** use to eliminete the one extra div that we use in return for useing multiple line of code
// ** we can use <React.Fragment></React.Fragment>  , <Fragment></Fragment> , <></>
//
// export const App = () => {
//     return (
//         <React.Fragment> {/** we remove that extra div we use for parent div */}
//             <NetflixSeries/>
//             <NetflixSeries/>
//             <NetflixSeries/>
//             <NetflixSeries/>
//             <NetflixSeries/>
//         </React.Fragment>
//     )
// }
//
// const NetflixSeries = () => {
//     return (
//         <div >
//             <div>
//                 <img src="img1.png" alt="image1" width="25%" height="25%" />
//             </div>
//             <h2>Name: Queen of Tears</h2>
//             <h3>Rating: 8.2</h3>
//             <p>
//                 Summary: Baek hyun-woo and hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, hyun-woo pays a visit to his family.
//             </p>
//         </div>
//     );
// };

// // ----------------------- Dynamic Values -----------------------
// ** using {} we can use variable
// ** i can also perform mathametics using bracket
// ** we can also call a function inside {} and also write html inside {}
// 
// export const App = () => {
//     return (
//         // <React.Fragment>
//         <div>
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//         </div>
//         // </React.Fragment>
//     );
// };
// 
// const GiveRating = ()=>{
//     return 8.5;
// }
// 
// const NetflixSeries = () => {
//     const name =  "Queen of Tears";
//     return (
//         <div >
//             <div>
//                 <img src="img1.png" alt="image1" width="25%" height="25%" />
//             </div>
//             <h2>Name: {name} </h2>
//             <h3>Rating: {GiveRating()}</h3>
//             <p>
//                 Summary: Baek hyun-woo and hae-in navigate a tense relationship,both at home and at work. But upon deciding his future, hyun-woo pays a visit to his family.
//             </p>
//         </div>
//     );
// };


// // ----------------------- Conditional Oprator -----------------------
// export const App = () => {
//     return (
//         <ConditionalOperator />
//     )
// };
// const ConditionalOperator = () => {
//     const age = 18;
//     // // using if else but this violates DRY (DO NOT REPEAT YPURSELF) 
//     // if (age >= 18) {
//     //     return <p>You are adult and you can vote</p>
//     // } else {
//     //     return <p>You are minor and you cannot vote</p>
//     // }

//     // // using Ternary Operator (?)
//     // return <p>{age >= 18 ? "You are Adult and you can vote" : "You are Minor and you cannot vote"}</p>

//     // // Sometime you might have very complex if conditions,for that there are some solution 
//     // let canVote = "You are Minor and you cannot vote";
//     // if (age >= 18) canVote = "You are Adult and you can vote";
//     // return <p>{canVote}</p>;

//     // // solution can be better as it prevent cluttering of variable outside and encapsulation such logic inside a function
//     // // One another benefit it also that, you can also pass some dynamic values as function parameter 
//     const canVote = () =>{
//         if(age >= 18 ) return <p>You are Adult and you can vote</p>;
//         return <p>You are Minor and you cannot vote</p>
//     }
//     return canVote();
// };


// // ----------------------- Import Exportin React -----------------------
// //** Default Export and Import :- A file can have only one default export , When importing a default export, you can name the import whatever you like
// import NetflixSeries from "./components/NetflixSeries";
//
// export const App = () => {
//     return (
//         <>
//             <NetflixSeries/>
//             <NetflixSeries/>
//             <NetflixSeries/>
//             <NetflixSeries/>
//             <NetflixSeries/>
//         </>
//     )
// }

// //** Named Export and Import :- A file have multiplenamed exports. Each named export must be explicity exported
// import { NetflixSeries, Footer } from "./components/NetflixSeries"
//
// export const App = () => {
//     return (
//         <>
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <Footer />
//         </>
//     )
// }

// //** Mixed Export and Import :- When importing named export, the imaport names must the export names exactly. Named imports must be enclosed in curly braces.
// import NetflixSeries ,{ Footer } from "./components/NetflixSeries"
// export const App = () => {
//     return (
//         <>
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <NetflixSeries />
//             <Footer />
//         </>
//     )
// }

// // ----------------------- Lopping -----------------------
// //** We don't have for loop in JSX, so we have to use .map() method of array
// //** React.js will complain if you don't pass key prop to <li> 
// import NetflixSeries from "./components/NetflixSeries"
//
// export const App = () => {
//     return (
//         <>
//             <NetflixSeries />
//             {/* <NetflixSeries /> */}
//         </>
//     )
// }

// // ----------------------- Props -----------------------
// //** React props(properties) facilitate data transdfer from parent to clid components.
import NetflixSeries from "./components/NetflixSeries"

export const App = () => {
    return <NetflixSeries />;
}