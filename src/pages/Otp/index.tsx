// import { Button } from "../../components/ui/button";
// import { Progress } from "../../components/ui/progress";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Otp = () => {
//   const [otp, setOtp] = useState(Array(6).fill(""));
//   const navigate = useNavigate();

//   const handleNumberClick = (num: string) => {
//     const nextIndex = otp.findIndex((digit) => digit === "");
//     if (nextIndex !== -1) {
//       const newOtp = [...otp];
//       newOtp[nextIndex] = num;
//       setOtp(newOtp);
//     }
//   };

//   const handleBackspace = () => {
//     const lastIndex = otp
//       .slice()
//       .reverse()
//       .findIndex((digit) => digit !== "");
//     if (lastIndex !== -1) {
//       const index = 6 - 1 - lastIndex;
//       const newOtp = [...otp];
//       newOtp[index] = "";
//       setOtp(newOtp);
//     }
//   };

//   const handleReset = () => {
//     setOtp(Array(6).fill(""));
//   };

//   useEffect(() => {
//     if (otp.every((digit) => digit !== "")) {
//       setTimeout(() => {
//         navigate("/sign-up-face");
//       }, 300);
//     }
//   }, [otp, navigate]);

//   return (
//     <div className="min-h-[100dvh] flex flex-col justify-between items-center px-4 py-6 bg-gray-100">
//       {/* Top: Progress Bar */}
//       <div className="w-[40%] max-w-md">
//         <Progress
//           value={66}
//           className="h-2 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
//         />
//       </div>

//       {/* Middle: Content */}
//       <div className="w-full flex-grow flex flex-col justify-center items-center">
//         <div className="w-full max-w-2xl flex flex-col items-center gap-6 px-4">
//           {/* Headings */}
//           <div className="text-center space-y-4">
//             <h1 className="text-3xl sm:text-4xl font-sans mt-4 md:text-5xl font-bold text-emerald-900">
//               Enter 6-digit code
//             </h1>
//             <p className="text-base sm:text-lg font-sans text-emerald-900 max-w-md">
//               We’ve sent the code to <strong>j***@gm***.com</strong>.
//               <br />
//               Can’t find it? Check your spam folder.
//             </p>
//           </div>

//           {/* OTP Boxes */}
//           <div className="flex justify-center gap-3">
//             {otp.map((digit, index) => (
//               <div
//                 key={index}
//                 className={`w-10 h-14 flex items-center font-sans justify-center rounded-xl text-2xl font-semibold border-2 ${
//                   digit ? "border-emerald-800" : "border-gray-300"
//                 }`}
//               >
//                 {digit}
//               </div>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="flex flex-col items-center space-y-2">
//             <Button variant="ghost" size="sm" className=" font-sans text-emerald-800">
//               Resend
//             </Button>
//           </div>

//           {/* Keypad */}
//           {/* <div className="grid grid-cols-3 gap-4 w-full max-w-xs pt-4">
//             {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].map(
//               (key, i) =>
//                 key === "" ? (
//                   <div key={i} />
//                 ) : key === "⌫" ? (
//                   <button
//                     key={i}
//                     onClick={handleBackspace}
//                     className="h-12 rounded-full flex justify-center items-center text-xl font-semibold text-emerald-800 focus:outline-none"
//                   >
//                     {key}
//                   </button>
//                 ) : (
//                   <button
//                     key={i}
//                     onClick={() => handleNumberClick(key)}
//                     className="h-12 rounded-full text-xl font-semibold text-emerald-800 focus:outline-none"
//                   >
//                     {key}
//                   </button>
//                 )
//             )}
//           </div> */}

//           <div className="grid grid-cols-3 gap-6 max-w-xs w-full md:max-w-md font-sans lg:max-w-lg">
//             {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
//               <button
//                 key={num}
//                 onClick={() => handleNumberClick(num)}
//                 className="h-12 md:h-16 lg:h-20 text-xl md:text-2xl font-sans lg:text-3xl font-semibold text-emerald-800"
//               >
//                 {num}
//               </button>
//             ))}
//             <div />
//             <button
//               onClick={() => handleNumberClick("0")}
//               className="h-12 md:h-16 lg:h-20 text-xl md:text-2xl font-sans lg:text-3xl font-semibold text-emerald-800"
//             >
//               0
//             </button>
//             <button
//               onClick={handleBackspace}
//               className="h-12 md:h-16 lg:h-20 text-xl md:text-2xl font-sans lg:text-3xl flex justify-center items-center text-emerald-800"
//             >
//               ⌫
//             </button>
//           </div>

//           <div className="flex flex-col items-center space-y-2">
//             <Button
//               variant="link"
//               onClick={handleReset}
//               className=" font-sans text-emerald-800"
//             >
//               Reset
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;

import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigate = useNavigate();

  const handleNumberClick = (num: string) => {
    const nextIndex = otp.findIndex((digit) => digit === "");
    if (nextIndex !== -1) {
      const newOtp = [...otp];
      newOtp[nextIndex] = num;
      setOtp(newOtp);
    }
  };

  const handleBackspace = () => {
    const lastIndex = otp
      .slice()
      .reverse()
      .findIndex((digit) => digit !== "");
    if (lastIndex !== -1) {
      const index = 6 - 1 - lastIndex;
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleReset = () => {
    setOtp(Array(6).fill(""));
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      setTimeout(() => {
        navigate("/sign-up-face");
      }, 300);
    }
  }, [otp, navigate]);

  return (
    <div className="min-h-[100dvh] flex flex-col justify-between items-center px-4 py-6 bg-gray-100">
      {/* Top: Progress + Prompt */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-4">
        <Progress
          value={66}
          className="w-[40%] h-2 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
        />
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900">
            Enter 6-digit code
          </h1>
          <p className="text-base sm:text-lg font-sans text-emerald-900 max-w-md">
            We’ve sent the code to <strong>j***@gm***.com</strong>.
            <br />
            Can’t find it? Check your spam folder.
          </p>
        </div>
      </div>

      {/* Middle: OTP Boxes */}
      {/* Middle: OTP Boxes + Resend */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-4">
        {/* OTP Boxes */}
        <div className="flex justify-center gap-3">
          {otp.map((digit, index) => (
            <div
              key={index}
              className={`w-10 h-14 flex items-center justify-center font-sans rounded-xl text-2xl font-semibold border-2 ${
                digit ? "border-emerald-800" : "border-gray-300"
              }`}
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Resend Button */}
        <Button
          variant="ghost"
          size="sm"
          className="font-sans mt-10 text-emerald-800"
        >
          Resend
        </Button>
      </div>

      {/* Bottom: Keypad + Reset */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-4">
        <div className="grid grid-cols-3 gap-6 max-w-xs w-full md:max-w-md font-sans lg:max-w-lg">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="h-12 md:h-16 lg:h-20 text-xl md:text-2xl lg:text-3xl font-semibold text-emerald-800"
            >
              {num}
            </button>
          ))}
          <div />
          <button
            onClick={() => handleNumberClick("0")}
            className="h-12 md:h-16 lg:h-20 text-xl md:text-2xl lg:text-3xl font-semibold text-emerald-800"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="h-12 md:h-16 lg:h-20 text-xl md:text-2xl lg:text-3xl flex justify-center items-center text-emerald-800"
          >
            ⌫
          </button>
        </div>

        <Button
          variant="link"
          onClick={handleReset}
          className="font-sans text-emerald-800"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Otp;
