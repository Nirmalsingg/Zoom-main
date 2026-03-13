import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="navBar">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <h2>VANS Video Call</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon />
                    </IconButton>
                    <p style={{color:"white", fontWeight:"500"}}>History</p>

                   <Button
  sx={{
    color: "white",
    fontWeight: 600,
    background: "linear-gradient(90deg,#ff4fd8,#9b5cff)",
    padding: "6px 18px",
    borderRadius: "8px"
  }}
  onClick={() => {
    localStorage.removeItem("token")
    navigate("/auth")
  }}
>
  Logout
</Button>
                </div>


            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Connect Instantly With Anyone, Anywhere</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>

                            <TextField
  onChange={e => setMeetingCode(e.target.value)}
  id="outlined-basic"
  label="Meeting Code"
  variant="outlined"
  sx={{
    input: { color: "white" },
    label: { color: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white" },
      "&:hover fieldset": { borderColor: "#ff66cc" },
      "&.Mui-focused fieldset": { borderColor: "#ff66cc" }
    }
  }}
/>
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logod1.jpg' alt="" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)