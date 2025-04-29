// import { useState } from "react";
// import { Button } from "../../components/ui/button";
// import { useNavigate } from "react-router-dom";

// const SignUpPin = () => {
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

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
//       <div className="flex flex-col items-center gap-6 w-full max-w-md">
//         <h1 className="text-3xl font-semibold text-emerald-900">Enter your PIN</h1>

//         <div className="flex justify-center gap-4 mt-10 mb-2">
//           {otp.map((digit, index) => (
//             <div
//               key={index}
//               className={`w-9 h-14 flex items-center justify-center rounded-2xl text-2xl font-bold border-2 ${
//                 digit ? "border-emerald-800" : "border-gray-300"
//               }`}
//             >
//               {digit}
//             </div>
//           ))}
//         </div>

//         {/* <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
//           {[..."1234567890"].map((num, i) => (
//             <button
//               key={i}
//               onClick={() => handleNumberClick(num)}
//               className="text-2xl p-4 bg-white rounded-lg shadow text-gray-800"
//             >
//               {num}
//             </button>
//           ))}
//           <button
//             onClick={handleReset}
//             className="col-span-2 text-gray-500 text-sm underline"
//           >
//             Reset
//           </button>
//           <button
//             onClick={handleDelete}
//             className="text-2xl p-4 bg-white rounded-lg shadow text-gray-800"
//           >
//             ⌫
//           </button>
//         </div> */}
//         <div className="grid grid-cols-3 gap-4 w-full mt-10">
//           {/* 1-9 buttons */}
//           {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
//             <button
//               key={num}
//               onClick={() => handleNumberClick(num)}
//               className="h-12 rounded-full text-xl font-semibold text-emerald-800 focus:outline-none focus:ring-0"
//             >
//               {num}
//             </button>
//           ))}

//           {/* Empty space */}
//           <div />

//           {/* 0 button */}
//           <button
//             onClick={() => handleNumberClick("0")}
//             className="h-12 rounded-full text-xl font-semibold text-emerald-800 focus:outline-none focus:ring-0"
//           >
//             0
//           </button>

//           {/* Backspace button */}
//           <button
//             onClick={handleBackspace}
//             className="h-12 rounded-full flex justify-center items-center text-emerald-800 focus:outline-none focus:ring-0"
//           >
//             ⌫
//           </button>
//         </div>

//         <Button
//           // onClick={handleSubmit}
//           onClick={() => navigate("/login-back")}
//           className="w-full mt-20 bg-emerald-900 hover:bg-emerald-800 text-white text-base sm:text-lg md:text-xl py-6 rounded-xl"
//         >
//           Enable face ID
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SignUpPin;


import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const SignUpPin = () => {
  const [otp, setOtp] = useState(Array(4).fill("")); // 4-digit PIN
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
      const index = otp.length - 1 - lastIndex;
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleReset = () => {
    setOtp(Array(4).fill(""));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-emerald-900">Enter your PIN</h1>

        {/* PIN DOTS */}
        <div className="flex justify-center gap-4 mt-10">
          {otp.map((digit, index) => (
            <div
              key={index}
              className={`w-6 h-6 sm:w-6 sm:h-6 rounded-lg  transition-all duration-200 ${
                digit ? "bg-emerald-900" : "bg-gray-100"
              }`}
            />
          ))}
        </div>

        {/* NUMBER PAD */}
        <div className="grid grid-cols-3 gap-6 w-full mt-10 max-w-xs">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="h-12 text-xl font-semibold text-emerald-800 focus:outline-none"
            >
              {num}
            </button>
          ))}
          <div />
          <button
            onClick={() => handleNumberClick("0")}
            className="h-12 text-xl font-semibold text-emerald-800 focus:outline-none"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="h-12 flex justify-center items-center text-emerald-800 text-xl"
          >
            ⌫
          </button>
        </div>

        {/* FACE ID BUTTON */}
        <Button
          onClick={() => navigate("/login-back")}
          className="w-full mt-20 bg-emerald-900 hover:bg-emerald-800 text-white text-base sm:text-lg md:text-xl py-6 rounded-xl"
        >
          Enable face ID
        </Button>
      </div>
    </div>
  );
};

export default SignUpPin;
