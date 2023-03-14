import { FC } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const HeroSection: FC = () => {
   return <>
      <div className=" items-center  min-h-screen w-full flex justify-start pt-40 bg-grid bg-no-repeat  bg-size  bg-[size:200%] flex-col py-20"  >
         <div className="container flex justify-start items-center flex-col ">
            <button className="text-base py-2 px-4 rounded-full text-gray-800 flex gap-2 bg-slate-50 font-semibold border-2 hover:scale-[.98] transition border-white"><span>Join the community now </span> <span><ArrowRight></ArrowRight></span></button>
            <h1 className="text-6xl font-bold text-slate-800 text-center leading-tight mb-6 w-4/6">Share Your Ideas and Opinions  on Tech with Milo</h1>
            <p className="text-xl text-center w-1/2 font-normal text-slate-600"> Connect with like-minded people and engage in discussions on a wide range of topics with our forum app. Share your thoughts, ideas and knowledge, and learn from others in a friendly and collaborative environment.</p>
         </div>
      </div>
   </>
}
export default HeroSection;

export const Form: React.FC = () => {
   return <>
      <h2>Heelo this is form</h2></>
}