import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function CertificatePart({test_type}) {
    
    
    
    const [openDialog,setOpenDialog]=useState();
    const [name,setName]=useState("");
    const [lastName,setLastname]=useState("");
    const date=new Date().getDate()
    const month=new Date().getMonth()
    const year=new Date().getFullYear()
    console.log(date,month,year)


    const handleDownload=()=>{
        const certificate=document.getElementById("certificate")
        html2canvas(certificate).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("landscape", "mm", "a4");
            pdf.addImage(imgData, "PNG", 10, 10, 280, 200);
            pdf.save("certificate.pdf");
          });
        console.log(certificate)
    }
    


    return     !openDialog? (
        <div
        className="w-screen  flex-col flex items-center justify-center h-screen z-50 bg-gradient-to-tr  from-fuchsia-600  via-violet-950 fixed"
        >
          <h3>Submit Your Results</h3>
          <input
           className="text-black"
            type="text"
            placeholder="First Name"
            onChange={(e)=>setName(e.target.value)}
            required
            style={{ display: "block", margin: "10px auto", padding: "8px", width: "80%" }}
          />
          <input
           className="text-black"
            type="text"
            name="surname"
            placeholder="Last Name"
            onChange={(e)=>setLastname(e.target.value)}
            required
            style={{ display: "block", margin: "10px auto", padding: "8px", width: "80%" }}
          />
          <button onClick={() => setOpenDialog(false)} style={{ margin: "10px", padding: "8px 15px" }}>
            Cancel
          </button>
          <Button variant="contained" color="success" onClick={()=>setOpenDialog(true)} >
            Next
          </Button>
          
        </div>
      ):
  (
    <section className='fixed top-0 left-0 z-50'>
    <div className="absolute top-4 right-4 z-50">
    <Button variant='contained' onClick={()=>handleDownload()}>🔽</Button>
    <Link href={"/"}>❌</Link>
    </div>

        <div  className="w-screen h-screen flex items-center justify-center bg-gray-100">
  <div id='certificate' className="bg-gradient-to-br from from-fuchsia-950 to-blue-900 shadow-xl rounded-lg p-10 w-[1200px] h-[600px] border-4 border-green-500 text-center relative">
    
    <h1 className="text-4xl font-bold text-yellow-600">Level Completion Certificate</h1>
    <p className="text-gray-600 text-lg mt-2 bg-opacity-20">This is awarded to</p>
    
    <h2 className="text-3xl font-semibold mt-4 text-white" id="userName">{name} {lastName}</h2>

    <p className="text-gray-600 text-lg mt-4">
      for successfully completing <span className="font-semibold text-yellow-500" id="levelName">{test_type[1]}</span>.
    </p>

    <p className="text-gray-600 text-lg mt-2">Awarded on <span id="completionDate">{date+" "+month+" "+year}</span></p>

    <div className="mt-6">
      <Button variant='contained' color='success' className="bg-yellow-500 flex items-center m-auto justify-center w-72 text-black px-4 py-2 rounded-full text-lg font-semibold">
        Level  Completed
      </Button>
    </div>

    <div className="flex justify-between items-center mt-10 px-10">
      <div className="text-center">
        <p className="text-gray-600 mt-2">Instructor</p>
        <h1 className='underline'>Davronov.SH</h1>
      </div>
      <div className="text-center">
        <h3 className='text-gray-600'>Date:</h3>
        <p className=" mt-2 underline">{date+"/"+month+"/"+year}</p>
      </div>
    </div>

    
  </div>
</div>
</section>

    
  )
}
