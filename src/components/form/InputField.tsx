import { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
    className?:string,
    register:UseFormRegisterReturn,
    errors:FieldError|undefined
};

const InputField:FC<InputFieldProps> = ({className,register,errors,...props}) => {
    return <>
        <label className="flex flex-col">
            <span className="text-base font-medium mb-2">Email</span>
            <input {...register} type="text" placeholder="Email" className={`w-full max-w-[400px] text-slate-700 font-medium h-12  bg-slate-200 placeholder:text-sm placeholder:font-normal tracking-wide rounded-lg outline-none px-5 border border-transparent ${String(className)} ${errors?.message ?'border-red-500':''}`}/>
            {errors?.message ? <p className="text-rose-500 font-medium text-sm ml-1 mt-1 first-letter:capitalize">{errors.message}</p>:''} 
        </label>
      {/*   <button type="button" className="z-button font-medium transition-colors bg-white dark:bg-gray-700 text-gray-500/70 dark:text-gray-400 py-2 px-2.5 rounded-lg  text-xs max-w-[400px] h-10 mx-auto w-full flex items-center gap-2 border border-transparent hover:border-community-primary">
             <span className="truncate">Search Outverse Community</span> <span className="ml-auto">⌘K</span></button>
    */} </>
}
export default InputField;

