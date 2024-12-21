"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/input-field";
import { useRouter } from "next/navigation";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { registerSchema } from "@/schemas";
import CardWrapper from "@/components/auth/card-wrapper";
import { RadioField } from "@/components/radio-field";
import { generateToken } from "@/app/lib";
import * as z from "zod";
import { useRegisterMutation } from "@/store/baseApi";
import { registerUserType } from "@/types/auth-types";

const Register = () => {
    const [status, setStatus] = useState<{ error?: string; success?: string }>(
        {}
    );
    const [register, { isLoading, isError, error }] = useRegisterMutation();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            password: "",
        },
    });

    useEffect(() => {
        if (isError) {
            const errorMessage = error as {
                data: { message: string };
            };
            setStatus({ error: errorMessage.data.message });
        }
    }, [isError]);

    const submitForm = async (data: z.infer<typeof registerSchema>) => {
        console.log(data);
        const res = await register(data);
        if (res.data?.success) {
            setStatus({ success: res.data.message }); 
            await generateToken(res.data.data);
            router.push("/products");
        }
    };

    return (
        <CardWrapper
            cardTitle="Register"
            backText="Already have an account?"
            backButtonLabel="Login"
            backButtonHref="/login"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitForm)} className="space-y-3">
                    <div className="grid grid-cols-2 gap-6">
                        <InputField
                            name="firstName"
                            label="First Name"
                            placeholder="Your first name"
                            control={form.control}
                        />
                        <InputField
                            name="lastName"
                            label="Last Name"
                            placeholder="Your last name"
                            control={form.control}
                        />
                    </div>
                    <InputField
                        name="email"
                        label="Email"
                        placeholder="Your email address"
                        control={form.control}
                    />
                    <InputField
                        name="mobile"
                        label="Mobile No."
                        placeholder="Your mobile number"
                        control={form.control}
                    />
                    <InputField
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                        control={form.control}
                    />
                    {status.error && <FormError message={status.error} />}
                    {status.success && <FormSuccess message={status.success} />}
                    <Button disabled={isLoading} type="submit" className="w-full">
                        {isLoading ? "Registering..." : "Register"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default Register;
