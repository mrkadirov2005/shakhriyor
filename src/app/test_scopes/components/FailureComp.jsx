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
  
  export default function ResultComp({ corrects, incorrects, test_type }) {
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
      console.log("Success:", result);
      
    };
  
    return corrects>50? (
      <Box textAlign="center"  mt={4}>
        <Typography variant="h4" gutterBottom>
          Congratulations 🎉
        </Typography>
        <Typography variant="h6" gutterBottom>
          You have completed the test! Please press the "Submit" button to send your results and claim your certificate and you will need to sign in to contact.
        
          <br/>
          <ContactButton/>
        </Typography>
  
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => setOpenDialog(true)}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
  
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Submit Your Results</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="First Name"
              name="name"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              label="Last Name"
              name="surname"
              fullWidth
              variant="outlined"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleSubmitAnswers}
              color="primary"
              variant="contained"
              disabled={isSubmitting}
            >
              {isSubmitting ? <CircularProgress size={24} /> : "Submit"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    ):<div className="fixed flex-col w-screen bg-white h-screen z-40 top-0 flex justify-center items-center">
    <h2 className="w-96 h-96 mb-5  flex ml-auto mr-auto text-center bg-gray-700  z-40 items-center justify-center rounded-md">Please try again by learning more!
    </h2>
    <Button variant="contained" onClick={()=>handleReload()}>Home</Button>
    </div>
  }
  