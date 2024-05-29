import { ContactPhone, DateRange, EmailRounded, Message, NewReleases,Person } from "@mui/icons-material"
import {useState} from "react";
import { useForm } from "react-hook-form";
export default function Appointement() {

    return (
    <>
      <h1><NewReleases color="primary" /> Release an appointement</h1>
      <form>
        <div>
            <label htmlFor=""> <Person /> Name</label>
            <input type="text" placeholder="..."/>
        </div>
        <hr />
        <div>
            <label htmlFor=""> <Person /> Firstname</label>
            <input type="text" placeholder="..."/>
        </div>
        <hr />
        <div>
            <label htmlFor=""> <EmailRounded />Email</label>
            <input type="email" placeholder="..."/>
        </div>
        <hr />
        <div>
            <label htmlFor=""> <ContactPhone /> Contact</label>
            <input type="text" placeholder="..."/>
        </div>
        <hr />
        <div>
            <label htmlFor=""> <DateRange /> Appointement date</label>
            <input type="date" name="" id="" />
        </div>
        <hr />
        <div>
            <label htmlFor=""> <Message /> Message</label>
            <textarea name="" id=""></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  )
}
