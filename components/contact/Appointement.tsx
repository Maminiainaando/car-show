import { ContactPhone, DateRange, EmailRounded, Message, NewReleases,Person, ScreenLockLandscapeRounded } from "@mui/icons-material"
import {useState} from "react";
import "../../src/app.module.css"
import { useForm } from "react-hook-form";
// import {zodResolver} from "@hookform/resolvers/zod";
import {ZodType,z} from "zod";
type FormData={
    name: string;
    firstName: string;
    email: string;
    contact: number;
    date: Date;
    message: string;
}
export default function Appointement() {
    const schema:ZodType<FormData>=z.object({
        name: z.string().min(2).max(20),
        firstName: z.string().min(2).max(30),
        email: z.string().email(),
        contact: z.number(),
        date: z.date(),
        message: z.string(),
    })
    
    const {
        register,
        handleSubmit,
        formState: {errors,isSubmitting}
    }=useForm<FormData>({
       resolver: zodResolver(schema),
    });
    const submitData=async (data: FormData)=>{
        await new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(data);
                resolve(undefined);
            }, 3000);
        });
    }
    return (
    <div className="App">
      <h1 className="Style.h1"><NewReleases color="primary" /> Release an appointement</h1>
      
      <form onSubmit={handleSubmit(submitData)}>
        <div>
            <label htmlFor=""> <Person /> Name</label>
            <input type="text" placeholder="..." {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div> 
            <label htmlFor=""> <Person /> Firstname</label>
            <input type="text" placeholder="..." {...register("firstName")}/>
            {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div>
            <label htmlFor=""> <EmailRounded />Email</label>
            <input type="email" placeholder="..." {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
            <label htmlFor=""> <ContactPhone /> Contact</label>
            <input type="text" placeholder="..." {...register("contact")}/>
            {errors.contact && <span>{errors.contact.message}</span>}
        </div>
        <div>
            <label htmlFor=""> <DateRange /> Appointement date</label>
            <input type="date" name="" id="" />
            {errors.date && <span>{errors.date.message}</span>}
        </div>
        <div>
            <label htmlFor=""> <Message /> Message</label>
            <textarea name="" id=""></textarea>
            {errors.message && <span>{errors.message.message}</span>}
        </div>
        <button type="submit">
            {isSubmitting ? (
                <ScreenLockLandscapeRounded />
            ): ('Envoyer')}
        </button>
      </form>
    </div>
  )
}
