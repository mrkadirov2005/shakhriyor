import ContactButton from "@/app/components/ContactButton/ContactButton";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Box,
    CircularProgress,
  } from "@mui/material";

  import React, {  useState } from "react";
import CertificatePart from "./CertificatePart";
  
  export default function ResultComp({ corrects, incorrects, test_type }) {

    console.log(corrects,incorrects)
    const handleReload=()=>{
        window.location.reload()
    }
    const LINK =
      "https://script.google.com/macros/s/AKfycbyf_7zHMRv2khtXOTueYwclq-C2DUlEMJ2qPnVdF4C-qkqZ16DcFKTEniGXLKUN0hKxkQ/exec";
  
    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      surname: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCertificate,setIsCertificate]=useState(false)
  
    const file_system = {
      1: "Tests_english",
      2: "Tests_math",
      3: "Tests_russian",
      4: "Tests_I_q",
      5: "Tests_I_T",
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmitAnswers =  async() => {
      if (!formData.name || !formData.surname) {
        alert("Please fill in your name and surname.");
        return;
      }
      setIsSubmitting(true);
      const body = {
        name: formData.name,
        surname: formData.surname,
        corrects: corrects,
        incorrects: incorrects,
        test: file_system[test_type[0]],
      };
      const response = await fetch(LINK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        mode:"no-cors"
      });
      if (!response.ok) {
        console.error("Failed to submit data:", response.statusText);
        return;
      }
      const result = await response.json();
    };
    
    return isCertificate && corrects>7?<CertificatePart/> :corrects>7 && !isCertificate? (
      <div className="w-screen h-screen bg-gradient-to-b from-fuchsia-600 to-purple-950 fixed text-white z-50 flex flex-col items-center top-0 left-0 justify-center px-6 text-center">
      <div className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-lg backdrop-blur-md flex flex-col items-center w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-300">🎉 Congratulations! 🎉</h2>
        <p className="text-lg mb-6 leading-relaxed text-gray-200">
          You have successfully completed the test! Click the "Submit" button to send your results 
          and claim your certificate. Sign in is required to proceed.
        </p>
    
        <button 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all mb-4"
          onClick={()=>setIsCertificate(true)}
        >
          Claim Your Certificate
        </button>
    
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all"
          onClick={() => setOpenDialog(true)}
        >
          Submit and Get Certificate
        </button>
        </div>
      
      {openDialog && (
        <div
        className="w-screen  flex-col flex items-center justify-center h-screen bg-gradient-to-tr  from-fuchsia-600  via-violet-950 fixed"
        >
          <h3>Submit Your Results</h3>
          <input
           className="text-black"
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "10px auto", padding: "8px", width: "80%" }}
          />
          <input
           className="text-black"
            type="text"
            name="surname"
            placeholder="Last Name"
            value={formData.surname}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "10px auto", padding: "8px", width: "80%" }}
          />
          <button onClick={() => setOpenDialog(false)} style={{ margin: "10px", padding: "8px 15px" }}>
            Cancel
          </button>
          <Button onClick={handleSubmitAnswers} variant="contained" color="success" >
            {isSubmitting ? "submitted":"submit"}
          </Button>
          
        </div>
      )}
    </div>
    ):<div className="fixed flex-col w-screen bg-white h-screen z-40 top-0 flex justify-center items-center">
    <h2 className="w-96 h-96 mb-5  flex ml-auto mr-auto text-center bg-gray-700  z-40 items-center justify-center rounded-md">Please try again by learning more!
    </h2>
    <Button variant="contained" onClick={()=>handleReload()}>Home</Button>
    </div>
  }
  