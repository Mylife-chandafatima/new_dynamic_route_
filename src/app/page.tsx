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
