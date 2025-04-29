// // import { Apple } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Progress } from "../../components/ui/progress";
// import apple from "../../assets/apple.svg";
// import google from "../../assets/google.svg";
// import { Label } from "../../components/ui/label";
// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import { useNavigate } from "react-router-dom";

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .matches(
//       /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//       "Invalid email format"
//     )
//     .required("Email is required"),

//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//     .matches(/[0-9]/, "Password must contain at least one number")
//     .matches(/[\W_]/, "Password must contain at least one special character")
//     .required("Password is required"),
// });

// const Otp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
//       {/* Content container */}
//       {/* <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center gap-6"> */}
//       <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center gap-6 px-4">
//         {/* Progress indicator */}
//         <div className="w-[40%] mx-auto">
//           <Progress
//             value={40}
//             className="h-2 mb-5 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
//           />
//         </div>
//         <div className="flex justify-center items-center mt-10 h-20">
//           <div className="text-center">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900">
//               Enter 6-digit code
//             </h1>
//             <h3 className="text-sm sm:text-4xl md:text-5xl lg:text-6xl mb-20 font-bold text-emerald-900">
//               We’ve sent the code to j***@gm***.com. Can’t find it? Check your
//               spam folder.
//             </h3>
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
      // Navigate after small delay (optional)
      setTimeout(() => {
        navigate("/sign-up-face"); // change this to your target route
      }, 300); // 300ms delay for better UX
    }
  }, [otp, navigate]);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center gap-6 px-4">
        {/* Progress indicator */}
        <div className="w-[40%] mx-auto">
          <Progress
            value={66}
            className="h-2 mb-5 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
          />
        </div>

        {/* Headings */}
        <div className="flex justify-center items-center mt-2 h-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900">
              Enter 6-digit code
            </h1>
            <h3 className="text-sm sm:text-4xl md:text-5xl lg:text-6xl mb-10 mt-5 font-bold text-emerald-900">
              We’ve sent the code to j***@gm***.com. Can’t find it? Check your
              spam folder.
            </h3>
          </div>
        </div>

        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-4 mb-2">
          {otp.map((digit, index) => (
            <div
              key={index}
              className={`w-9 h-14 flex items-center justify-center rounded-2xl text-2xl font-bold border-2 ${
                digit ? "border-emerald-800" : "border-gray-300"
              }`}
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Resend Button */}
        <Button variant="ghost" size="sm" className="text-emerald-800 mb-2">
          Resend
        </Button>

        {/* Keypad */}
        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
          {/* 1-9 buttons */}
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="h-12 rounded-full text-xl font-semibold text-emerald-800 focus:outline-none focus:ring-0"
            >
              {num}
            </button>
          ))}

          {/* Empty space */}
          <div />

          {/* 0 button */}
          <button
            onClick={() => handleNumberClick("0")}
            className="h-12 rounded-full text-xl font-semibold text-emerald-800 focus:outline-none focus:ring-0"
          >
            0
          </button>

          {/* Backspace button */}
          <button
            onClick={handleBackspace}
            className="h-12 rounded-full flex justify-center items-center text-emerald-800 focus:outline-none focus:ring-0"
          >
            ⌫
          </button>
        </div>

        {/* Reset Button */}
        <Button
          variant="link"
          onClick={handleReset}
          className="text-emerald-800"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Otp;
