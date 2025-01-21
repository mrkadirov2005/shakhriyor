"use client"
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { toggle_form } from '../ContactButton/ContactButton'
import coursesData from "../../tests/ctg.json"

export default function ContactForm() {
  const [mode, setMode] = useState()
  const [course, setCourse] = useState('') 
  const [loading, setLoading] = useState(false)
  const [message,setMessage]=useState("")

  useEffect(() => {
    const htmlClasslist = document.querySelector("html").classList.contains("light_mode")
    setMode(htmlClasslist)
  }, [])

  const handleCourseChange = (e) => {
    setCourse(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      Name: e.target.Name.value,
      Surname: e.target.Surname.value,
      Phone_number: e.target.Phone_number.value,
      Age: e.target.Age.value,
      Course: course,
    }

    setMessage('Submitting form data')

    // Validation check
    if (!formData.Name || !formData.Surname || !formData.Phone_number || !formData.Age || !formData.Course) {
      alert('Please fill in all the fields.')
      return
    }

    // Phone number validation (example pattern)
    const phonePattern = /^[+]{1}[0-9]{1,4}[0-9]{9,12}$/;
    if (!phonePattern.test(formData.Phone_number)) {
      alert('Please enter a valid phone number (e.g. +99813456789).')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwvHRoaNxko4Ar6L5I_wLkRnLRYDfxGYLmX4WOS6hIUj5p8iY7zPtK5ezl39sHkIztt/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        mode:"no-cors"
      })
      console.log(formData)
      const result = await response.json()
      if (response.ok) {
        alert(result.message)
        toggle_form() // Close the form on successful submission
      } else {
        alert('Failed to submit the form. Please try again.')
      }
    } catch (error) {

    } finally {
      setLoading(false)
      setMessage("Tez orada operatorlarimiz siz bilan bog'lanishadi.")
    }

  }

  return (
    <div id='form_container' className={`w-screen hidden h-screen fixed flex-col top-0 bottom-0 left-0 right-0 overflow-y-hidden text-black bg-gradient-to-bl from-fuchsia-800 to-blue-800 flex items-center justify-center`}>
      <form onSubmit={handleSubmit} className={`w-72 rounded-lg bg-blue-700 flex flex-col items-start justify-around ${!message?"h-96":"h-450px"} p-5`}>
        <div className='w-full flex items-center justify-between'>
          <Button variant='contained' color='warning' className='btn'>COderKid</Button>
          <Button variant='contained' onClick={() => toggle_form()} color='error'>X</Button>
        </div>
        <label className='text-white'>Ismingizni kiriting:</label>
        <input placeholder='Aziz' name='Name' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4'/>
        <label className='text-white'>Familiyangizni kiriting:</label>
        <input placeholder='Azizov' name='Surname' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4'/>
        <label className='text-white'>Telefon raqamingizni kiriting :</label>
        <input placeholder='+998 ** *** ** **' name='Phone_number' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4 '/>
        <label className='text-white'>Yoshingizni kiriting:</label>
        <input placeholder='70' type='number' name='Age' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4 mb-2'/>
        <label className='text-white'>Kursni tanlang:</label>
        <select 
          className='flex w-full item-center justify-center mb-2 outline-none rounded-sm' 
          name="Course" 
          value={course} 
          onChange={handleCourseChange}
        >
          <option value=""> </option>
          {coursesData.kurslar.map((item, index) => (
            <option key={index} className='w-full text-white bg-violet-800' value={item.nomi}>
              {index + 1} {item.nomi}
            </option>
          ))}
        </select>
        <Button variant='contained' type='submit' color='secondary' disabled={loading}>
          {loading ? 'Yuklanmoqda...' : 'Yuborish'}
        </Button>
      <h6 className='text-white'>{message?message:""}</h6>
      </form>
    </div>
  )
}
