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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col justify-between items-center px-4 py-6 bg-gray-100">
      {/* Top: Progress Bar */}
      <div className="w-[40%] max-w-md">
        <Progress
          value={33}
          className="h-2 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
        />
      </div>

      {/* Middle: Form Area */}
      <div className="w-full flex-grow flex flex-col justify-center items-center">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center gap-6 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900">
            Getting Started
          </h1>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Values", values);
              navigate("/otp");
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="w-full space-y-4">
                  {/* Email Input */}
                  <div className="mb-4">
                    <div className="relative w-full">
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={`peer rounded-xl border-2 px-4 pt-10 pb-4 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-emerald-900 ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      <Label
                        htmlFor="email"
                        className={`absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-900 peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-900 ${
                          values.email ? "top-4 text-sm" : ""
                        }`}
                      >
                        Email address
                      </Label>
                    </div>
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="relative w-full">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder=" "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={`peer rounded-xl border-2 px-4 pt-10 pb-4 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-emerald-900 ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <Label
                      htmlFor="password"
                      className={`absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-900 peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-900 ${
                        values.password ? "top-4 text-sm" : ""
                      }`}
                    >
                      Password
                    </Label>

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-700 hover:text-emerald-900"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {touched.password && errors.password && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-emerald-900 mt-5 hover:bg-emerald-800 text-white text-base sm:text-lg md:text-xl py-6 rounded-xl"
                >
                  Submit
                </Button>

                {/* Sign In Prompt */}
                <div className="flex flex-row items-center justify-center mt-5">
                  <p className="text-sm sm:text-base text-emerald-900">
                    Already have an account?{" "}
                    <span className="font-semibold text-emerald-900 cursor-pointer">
                      Sign In
                    </span>
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-col items-center gap-4 mt-6">
                  <p className="text-sm sm:text-base text-emerald-900">
                    Or continue with:
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="rounded-xl border-2 h-16 w-16 flex items-center justify-center"
                    >
                      <img src={apple} alt="Apple" className="h-6 w-6" />
                    </Button>

                    <Button
                      variant="outline"
                      className="rounded-xl border-2 h-16 w-16 flex items-center justify-center"
                    >
                      <img src={google} alt="Google" />
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>

      {/* Bottom: Terms and Conditions */}
      <div className="w-full flex justify-center mt-6 px-4">
        <p className="text-xs sm:text-sm text-emerald-900 text-center max-w-xs">
          By creating an account you agree to our{" "}
          <span className="text-emerald-900 font-bold">Terms and Conditions</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
