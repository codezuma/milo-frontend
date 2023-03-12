const InputField = () => {
    return <>
        <label className="flex flex-col">
            <span className="text-base font-medium mb-2">Email</span>
            <input type="text" placeholder="Email" className="w-full max-w-[400px] text-slate-700 font-medium h-12  bg-slate-200 placeholder:text-sm placeholder:font-normal tracking-wide rounded-lg outline-none px-5" />
        </label>
      {/*   <button type="button" className="z-button font-medium transition-colors bg-white dark:bg-gray-700 text-gray-500/70 dark:text-gray-400 py-2 px-2.5 rounded-lg  text-xs max-w-[400px] h-10 mx-auto w-full flex items-center gap-2 border border-transparent hover:border-community-primary">
             <span className="truncate">Search Outverse Community</span> <span className="ml-auto">⌘K</span></button>
    */} </>
}
export default InputField;

