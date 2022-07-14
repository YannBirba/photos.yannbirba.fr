import type React from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
    useColorModeValue,
    Checkbox,
} from "@chakra-ui/react";
import { Login } from "../types/User";

interface LoginFormProps {
    submitLogin: (login: Login) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ submitLogin }) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const bg = useColorModeValue("white", "gray.700");

    const onSubmit = (data: FieldValues) => {
        submitLogin(data as Login);
    };

    return (
        <Box bg={bg} p={6} rounded="md" w={64}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email ? true : false}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        id="email"
                        placeholder="monemail@email.fr"
                        {...register("email", {
                            required: "Le champ email est requis",
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email ? (
                            <p>
                                {(errors.email as any) && errors.email.message}
                            </p>
                        ) : null}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.password ? true : false}>
                    <FormLabel htmlFor="password">Mot de passe</FormLabel>
                    <Input
                        id="password"
                        placeholder="********"
                        {...register("password", {
                            required: "Le champ mot de passe est requis",
                        })}
                    />
                    <FormErrorMessage>
                        {errors.password ? (
                            <p>
                                {(errors.password as any) &&
                                    errors.password.message}
                            </p>
                        ) : null}{" "}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <Checkbox
                        defaultChecked
                        id="remember"
                        {...register("remember", {
                            // valueAsNumber: true,
                        })}
                    >
                        Se souvenir de moi
                    </Checkbox>
                </FormControl>

                <Button
                    mt={4}
                    isLoading={isSubmitting}
                    type="submit"
                    aria-label="Se connecter"
                    title="Se connecter"
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
