


const countries= ({params})=>
    {console.log(params.country_name)

      interface country{
        name:string,
        population:number,
        capitalcity:string}
       
     const pakistan:country ={
        name:"Pakistan",
        population:23232627,
        capitalcity:"Islamabad"


    }
    const india:country ={
        name:"India",
        population:23232627,
        capitalcity:"New Dehli"


}

const indonesia:country ={
    name:"Indonesia",
    population:284071835,
    capitalcity:"Jakarta"


}

const bangladesh:country ={
    name:"Bangladesh",
    population:174104970,
    capitalcity:"Dhaka"


}
const iran:country ={
    name:"Iran",
    population:898000,
    capitalcity:"Tehran"


}
const iraq:country ={
    name:"Iraq",
    population:174000,
    capitalcity:"Baghdad"


}

if (params.country_name === "pakistan")
   { 
   return(
        <div>
            <h1  className="bg-green-400 font-bold p-4 font-sans  flex justify-center">Country Name:{pakistan.name}</h1>
            <p className="bg-green-300 font-bold p-2 font-sans  flex justify-center">Population:{pakistan.population}</p>
            <p className="bg-green-200 font-bold p-2 font-sans  flex justify-center">Capital City:{pakistan.capitalcity} </p>
           
        </div>
    )} else if
     (params.country_name === "india")
        { 
        return(
             <div>
                 <h1  className="bg-red-500 p-4 font-bold flex  justify-center ">Country Name:{india.name}</h1>
                 <p className="bg-red-400  p-2 font-bold flex  justify-center">Population:{india.population}</p>
                 <p className="bg-red-300 p-2 font-bold flex  justify-center">Capital City:{india.capitalcity} </p>
                
             </div>
         )
     }else if
     (params.country_name === "iraq")
        { 
        return(
             <div>
                 <h1  className="bg-pink-700 font-bold p-4 flex  justify-center ">Country Name:{iraq.name}</h1>
                 <p className="bg-pink-500 font-bold p-2 flex  justify-center">Population:{iraq.population}</p>
                 <p className="bg-pink-200 font-bold p-2 flex  justify-center">Capital City:{iraq.capitalcity} </p>
                
             </div>
         )
     }else if
     (params.country_name === "iran")
        { 
        return(
             <div>
                 <h1  className="bg-purple-600  p-4 font-bold flex  items-center h-3 justify-center ">Country Name:{iran.name}</h1>
                 <p className="bg-purple-400  p-2 font-bold flex  justify-center">Population:{iran.population}</p>
                 <p className="bg-purple-300  p-2 font-bold flex  justify-center">Capital City:{iran.capitalcity} </p>
                
             </div>
         )
     } else if
     (params.country_name === "bangladesh")
        { 
        return(
             <div>
                 <h1  className="bg-blue-600  p-4 font-bold flex  justify-center ">Country Name:{bangladesh.name}</h1>
                 <p className="bg-blue-400 p-2 font-bold flex  justify-center">Population:{bangladesh.population}</p>
                 <p className="bg-blue-200 p-2 font-bold flex  justify-center">Capital City:{bangladesh.capitalcity} </p>
                
             </div>
         )
     }
else{
    return(
        <h1>Invalid</h1>
    )
}

}



 export  default countries


// import CountryPage from "./[country_name]/page"


// import { useRouter } from 'next/router';

// const CountryPage = () => {
//   const router = useRouter();
//   const { country } = router.query; // Capture the dynamic route part

//   // Create a custom map for countries
//   const countryData = {
//     Pakistan: {
//       name: "Pakistan",
//       description: "This is Pakistan's page.",
//       population: "220 million",
//     },
//     USA: {
//       name: "United States of America",
//       description: "This is USA's page.",
//       population: "331 million",
//     },
//     India: {
//       name: "India",
//       description: "This is India's page.",
//       population: "1.38 billion",
//     },
//   };

//   const countryInfo = countryData[country]; // Access specific country data

//   if (!countryInfo) {
//     return <h1>Country not found!</h1>;
//   }

//   return (
//     <div>
//       <h1>{countryInfo.name}</h1>
//       <p>{countryInfo.description}</p>
//       <p>Population: {countryInfo.population}</p>
//     </div>
//   );
// };

// export default CountryPage;

