/* eslint-disable @next/next/no-img-element */
import { FC, PropsWithChildren, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from "../form/InputField";
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema, TypeOf, z, ZodError } from "zod";
import { Button } from "../form/Button";
import { authAPI } from "@/apis/authAPI";
import { AxiosError } from "axios";

const LoginForm: FC = () => {
    const [isLoading, setIsLoading] = useState(false);


    const ValidateEmailSchema = z.object({email: z.string().min(1, { message: 'Required' }).email('email is not valid')});
    type ValidateEmailType = z.infer<typeof ValidateEmailSchema>;
    const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: { email: '' }, resolver: zodResolver(ValidateEmailSchema) });
    
    const onSubmit: SubmitHandler<ValidateEmailType> = async (data) => {
        setIsLoading(true);
        /*  const response =  authAPI.validateEmail(data.email)
                          .then(res=>{console.log(res.data)})
                          .catch((error:AxiosError)=>{console.log('catch',error.status)}); */

        try {
            const response = await authAPI.validateEmail(data.email);

            switch (response.status) {
                case 200:


            }
            console.log(response);
        }
        catch (err: any) {
            console.log(err);
        }
        finally {
            setIsLoading(false);
        }

    }
    return <>
        <section>
            <div className="px-4 py-8 w-[400px]">
                <h2 className="text-3xl font-semibold mb-8 text-center"> Log in</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-6">
                    <InputField errors={errors.email} register={register('email', { required: true })}></InputField>
                    <p className="text-sm tracking-wide font-medium text-slate-600">By continuing, you agree to the Self Service PSS and Privacy Policy.</p>
                    <Button isLoading={isLoading} className={`btn-primary w-full ${isLoading ? 'loading' : ''}`}>Continue</Button>
                </form>
                <div className="flex gap-5  items-center mb-6">
                    <hr className="flex-1 h-0.5 bg-slate-200" />
                    <p className="text-slate-600 font-medium">Or</p>
                    <hr className="flex-1 h-0.5  bg-slate-200" />
                </div>
                <div className="flex gap-2 flex-col">
                    <button className="btn flex bg-slate-50 border text-slate-700 w-full"> <img className="w-6 h-6" src="/images/social-media/google-icon.svg" alt="" /> <p className="flex-1">Continue with Google</p> </button>
                    <button className="btn flex bg-slate-50 border text-slate-700 w-full">  <img className="w-6 h-6" src="/images/social-media/github-icon.svg" alt="" /> <p className="flex-1">Continue with Github</p> </button>
                </div>
            </div>
            <PasswordForm />
        </section>

    </>
}
const PasswordForm: FC = ({ children }: PropsWithChildren) => {

    const [isLoading, setIsLoading] = useState(false);


    const ValidatePasswordSchema = z.object({
        password: z.string().min(8, { message: 'Min 8 characters' }),
    });
    type ValidatePassword = z.infer<typeof ValidatePasswordSchema>;
    const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: { password: '' }, resolver: zodResolver(ValidatePasswordSchema) });
    const onSubmit: SubmitHandler<ValidatePassword> = async (data) => {

    }

    return <>
        <div className="px-4 py-8 w-[400px]">
            <h2 className="text-3xl font-semibold mb-8 text-center"> Log in</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-6">
                <InputField errors={errors.password} register={register('password', { required: true })}></InputField>
                <p className="text-sm tracking-wide font-medium text-slate-600">By continuing, you agree to the Self Service PSS and Privacy Policy.</p>
                <Button isLoading={isLoading} className={`btn-primary w-full ${isLoading ? 'loading' : ''}`}>Sign up</Button>
            </form>
        </div>
    </>
}
export default LoginForm;