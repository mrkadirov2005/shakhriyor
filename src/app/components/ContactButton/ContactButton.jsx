"use client"
import { Button } from '@mui/material'
import React from 'react'
export const toggle_form=()=>{
  document.querySelector("#form_container").classList.toggle("hidden")
}
export default function ContactButton() {
  
  return (
    <Button onClick={()=>toggle_form()} variant='contained'  style={{ backgroundColor: "#2D2F2E", border: "2px solid white" }} >Ro'yxatdan o'ting</Button>
    
  )
}
