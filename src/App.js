import React from "react";
import "./styles.css";
import { useState } from "react";

const vaccineDB = {
  covaxin: [
    { name: "Delhi AIMS",
      number: "200 doses" 
    },
    { name: "Medanata the Medicity",
     number: "1000 doses"
    },
    {
      name: "The Christian Medical College",
      number: "2000 doses"
    }
  ],

  covishield: [
    {
      name: "The Christian Medical College",
      number: "2000 doses"
    },
    {
      name: "Delhi AIMS",
      number: "500 doses"
    },
    { name: "Medanata the Medicity",
     number: "1000 doses"
    }
  ],
  sputnik: [
    {
      name: "Indraprastha apollo Hospital",
      number: "1500 doses"
    },
    {
      name: "Fortis hospital",
      number: "150 doses"
    },
    { name: "Medanata the Medicity",
     number: "1000 doses"
    }
  ]
};

export default function App() {
  const [selectedVaccine, setVaccine] = useState("sputnik");
  function vaccineClickHandler(vaccine) {
    setVaccine(vaccine);
  }
  return (
    <div className="App">
       <nav class="navigation container">
        <div style={{width: "100%" , padding: "1rem" , backgroundColor:"#c2d1d1", fontWeight: "bold", fontSize: "2rem" }} class="nav-brand">Vaccine Finder💉</div>
       
    </nav>
     <br/>
      <div style={{ fontSize: "1rem" , color: "#8934eb" }}>

        Checkout the vaccine availability. Select a vaccine to check it's availability{" "}
      </div>

      <div>
        {Object.keys(vaccineDB).map((vaccine) => (
          <button
            onClick={() => vaccineClickHandler(vaccine)}
            style={{cursor: "pointer",background: "#e6e6e6",padding: "1rem",border: "1px solid #bff3f5",margin: "1rem"}}>
            {vaccine}
          </button>
        ))}
      </div>
      <br/>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul>
          {vaccineDB[selectedVaccine].map((vaccine) => (
            <li
              key={vaccine.name}
              style={{listStyle: "none",padding: "1rem",border: "2px dashed #bff3f5",width: "90%", marginBottom: "1rem"}}>
              
              <div style={{ fontSize: "larger" }}> {vaccine.name} </div>
              <div style={{ fontSize: "smaller" }}> {vaccine.number} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
