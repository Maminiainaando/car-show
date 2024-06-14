import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
    VStack,
    Flex,
} from "@chakra-ui/react";
import { useState, ChangeEvent, FocusEvent } from "react";
import { sendContactForm } from "../lib/api";
import styles from "./style.module.css";

interface FormValues {
    idCar: string;
    name: string;
    firstName: string;
    contact: string;
    subject: string;
    email: string;
    message: string;
}

const initValues: FormValues = {
    idCar: "",
    name: "",
    firstName: "",
    contact: "",
    subject: "",
    email: "",
    message: "",
};

interface State {
    isLoading: boolean;
    error: string;
    values: FormValues;
}

const initState: State = {
    isLoading: false,
    error: "",
    values: initValues,
};

export default function Home() {
    const toast = useToast();
    const [state, setState] = useState<State>(initState);
    const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});

    const { values, isLoading, error } = state;

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onBlur = ({ target }: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
                isClosable: true,
            });

            const response = await fetch('http://localhost:8080/addAppointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.name,
                    firstName: values.firstName,
                    email: values.email,
                    message: values.message,
                    contact: values.contact,
                    idCar: parseInt(values.idCar),
                }),
            });

            if (response.ok) {
                setSuccessMessage('Appointment added successfully');
                setErrorMessage(null);
            } else {
                setErrorMessage('Failed to add appointment');
                setSuccessMessage(null);
            }
        } catch (error: any) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    return (
        <div >


            <Flex align="center" justify="center" height="100vh" border="2px solid black" id={styles.flexible}>
                <Container maxW="lg" boxShadow="xl" p={6} rounded="md" id={styles.container_bg}>
                    <Heading mb={6} textAlign="center" color="red">Appointment</Heading>
                    {error && (
                        <Text color="red" my={4} fontSize="xl">
                            {error}
                            
                        </Text>
                    )}
                    {successMessage && <p style={{ color: 'blue' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                    <VStack spacing={4} width="100%">
                        <FormControl isRequired isInvalid={touched.idCar && !values.idCar}>
                            <FormLabel>Car ID</FormLabel>
                            <Input
                                type="text"
                                name="idCar"
                                width="45vw"
                                height="3.5vh"
                                errorBorderColor="red"
                                value={values.idCar}
                                onChange={handleChange}
                                onBlur={onBlur}
                                className={styles.carId}
                            />
                            <FormErrorMessage color="red">Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={touched.name && !values.name}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                width="45vw"
                                height="3.5vh"
                                errorBorderColor="red"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={onBlur}
                                className={styles.carId}
                            />
                            <FormErrorMessage color="red">Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={touched.firstName && !values.firstName}>
                            <FormLabel>First Name</FormLabel>
                            <Input
                                type="text"
                                name="firstName"
                                width="45vw"
                                height="3.5vh"
                                errorBorderColor="red"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={onBlur}
                                className={styles.carId}
                            />
                            <FormErrorMessage color="red">Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={touched.contact && !values.contact}>
                            <FormLabel>Contact</FormLabel>
                            <Input
                                type="text"
                                name="contact"
                                width="45vw"
                                height="3.5vh"
                                errorBorderColor="red"
                                value={values.contact}
                                onChange={handleChange}
                                onBlur={onBlur}
                                className={styles.carId}
                            />
                            <FormErrorMessage color="red">Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={touched.subject && !values.subject}>
                            <FormLabel>Subject</FormLabel>
                            <Input
                                type="text"
                                name="subject"
                                width="45vw"
                                height="3.5vh"
                                errorBorderColor="red"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={onBlur}
                                className={styles.carId}
                            />
                            <FormErrorMessage color="red">Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={touched.email && !values.email}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                width="45vw"
                                height="3.5vh"
                                errorBorderColor="red"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={onBlur}
                                className={styles.carId}
                            />
                            <FormErrorMessage color="red">Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isRequired isInvalid={touched.message && !values.message}>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                name="message"
                                width="45vw"
                                height="10vh"
                                rows={4}
                                errorBorderColor="red"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            <FormErrorMessage color="red">Required</FormErrorMessage>
                        </FormControl>

                        <Button
                            variant="solid"
                            colorScheme="blue"
                            isLoading={isLoading}
                            disabled={
                                !values.idCar || !values.name || !values.firstName || !values.contact || !values.subject || !values.email || !values.message
                            }
                            onClick={onSubmit}

                            id={styles.butSub}
                        >
                            Submit
                        </Button>
                    </VStack>
                </Container>
            </Flex>

        </div>

    );
}
