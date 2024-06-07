import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { text } from 'stream/consumers';
import styles from "./style.module.css";

type FormValues = {
    carId: string;
    name: string;
    firstName: string;
    email: string;
    message: string;
    contact: string;
};

const FormComponent: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/addAppointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    firstName: data.firstName,
                    email: data.email,
                    message: data.message,
                    contact: data.contact,
                    idCar: parseInt(data.carId),
                }),
            });

            if (response.ok) {
                setSuccessMessage('Appointment added successfully');
                setErrorMessage(null);
            } else {
                setErrorMessage('Failed to add appointment');
                setSuccessMessage(null);
            }
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage('Error: ' + error.message);
                setSuccessMessage(null);
            } else {
                setErrorMessage('Unknown error occurred');
                setSuccessMessage(null);
            }
        }
    };

    return (
        <div id={styles.formImage}>
            <div  style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px'
            }}>

                <div style={{
                    width: '60%',
                    margin: '0 auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}>
                    <h1 style={{ textAlign: 'center' }}>APPOINTMENT</h1>
                    {successMessage && <p style={{ color: 'blue' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="carId">Car ID</label>
                            <input id="carId" {...register('carId', { required: true })} style={{ width: '100%', padding: '5px' }} />
                            {errors.carId && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="name">Name</label>
                            <input id="name" {...register('name', { required: true })} style={{ width: '100%', padding: '5px' }} />
                            {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" {...register('firstName', { required: true })} style={{ width: '100%', padding: '5px' }} />
                            {errors.firstName && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email">Email</label>
                            <input id="email" {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Invalid email address"
                                }
                            })} style={{ width: '100%', padding: '5px' }} />
                            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" {...register('message', { required: true })} style={{ width: '100%', padding: '5px' }}></textarea>
                            {errors.message && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="contact">Contact</label>
                            <input id="contact" {...register('contact', { required: true })} style={{ width: '100%', padding: '5px' }} />
                            {errors.contact && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <button type="submit" style={{
                            width: '100%',
                            padding: '10px',
                            background: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer'
                        }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;
