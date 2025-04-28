// import { Apple } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
});

const Otp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
      {/* Content container */}
      {/* <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center gap-6"> */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center gap-6 px-4">
        {/* Progress indicator */}
        <div className="w-[40%] mx-auto">
          <Progress
            value={40}
            className="h-2 mb-5 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
          />
        </div>
        <div className="flex justify-center items-center mt-10 h-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900">
              Enter 6-digit code
            </h1>
            <h3 className="text-sm sm:text-4xl md:text-5xl lg:text-6xl mb-20 font-bold text-emerald-900">
              We’ve sent the code to j***@gm***.com. Can’t find it? Check your
              spam folder.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
