/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import InputField from "../form/InputField";

const LoginForm: FC = () => {
    return <>
        <div className="px-4 py-8 w-[400px]">
            <h2 className="text-3xl font-semibold mb-8 text-center"> Log in</h2>
            <form action="" className="flex flex-col gap-4 mb-6">
                <InputField ></InputField>
                <p className="text-sm tracking-wide font-medium text-slate-600">By continuing, you agree to the Self Service PSS and Privacy Policy.</p>
                <button className="btn-primary w-full">Continue</button>
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
    </>
}

export default LoginForm;