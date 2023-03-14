"use client";

import styles from './page.module.css'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function Home() {
  let [notes, setNotes] = useState("")
  let [displayNotes, setDisplayNotes] = useState("")
  let onTextChange = (e) => {
    setNotes(e.target.value)
    console.log(notes)
  }
  let monkeyfy = () => {
    let monkeymojis = ["🐵", "🙈", "🙉", "🙊", "🐒", "🦍", "🦧", "🍌", "💩"]
    let monkeyfy = notes.split("").map((char) => {
      if (char === "-") {
        return monkeymojis[Math.floor(Math.random() * monkeymojis.length)]
      } else {
        return char
      }
    }).join("")
    setDisplayNotes(monkeyfy)
  }
  return (
    <main>
      <div className={styles.mainContent}>
       <Typography sx={{ fontSize: 30 }} color="text.primary" gutterBottom>
              Monkey Business Notes 🐵
        </Typography>
        <TextField
          id="filled-multiline-static"
          label="Boring Notes 🙄"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          onChange={onTextChange}
          sx={{ minWidth: "100%" }}
        />
        <Button sx={{ width: 400, margin:"2em", padding:"1em"}} variant="contained" onClick={monkeyfy}>Monkeyfy</Button>
        <Card sx={{ minWidth: "100%" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Monkey Notes 🐒
            </Typography>
            <Typography variant="h5" component="div" className={styles.monkeynotes} >
              {displayNotes}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
