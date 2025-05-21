import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./layout.js";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import CountryDetails from "./Pages/CountryDetails.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Countries from "./Pages/Countries.js";
import GetStarted from "./Pages/GetStarted.js";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element:<Contact/>
//       },
//       {
//         path: "GitHub",
//         element:<GitHub/>
//       }
//     ],
//   },
// ]);

const queryClient = new QueryClient();


const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element= {<Layout />}>
      <Route path="" element= {<Home />}/>
      <Route path="About" element= {<About />}/>
      <Route path="Contact" element= {<Contact />}/>
      <Route path="Countries" element= {<Countries />}/>
      <Route path="CountryDetails/:id" element={<CountryDetails/>}/>
      <Route path="GetStarted" element={<GetStarted/>}/>


     
      {/* <Route path="Countries/" element= {<CountryDetail />}/> */}



  </Route>
)
)

createRoot(document.getElementById("root")!).render(

  <StrictMode>

      <QueryClientProvider client={queryClient}>

    <RouterProvider router={router} />
      </QueryClientProvider>

  </StrictMode>
);
