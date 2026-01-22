export function Spinner() {
    return (
      <div className=" w-full h-full absolute    flex justify-center items-center">
       <div className="w-28 h-28 border-2 border-solid border-slate-300 flex justify-center items-center bg-slate-200 shadow-lg bg-opacity-50">
       <div className="w-10 h-10 rounded-full  border-4 border-t-cyan-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
       </div>
      </div>
    );
  }
  