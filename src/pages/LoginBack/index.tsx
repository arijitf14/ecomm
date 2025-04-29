// import { Apple } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import apple from "../../assets/apple.svg";
import rightarrow from "../../assets/rightarrow.svg";
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
      "Invalid username format"
    )
    .required("Username is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
});


const LoginBack = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-between px-4 py-8">
      {/* Top Section */}
      <div className="text-center mt-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-900">
          Welcome back
        </h1>
        <h3 className="text-base md:text-2xl lg:text-3xl mt-2 text-emerald-900">
          Sign in to your account
        </h3>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto flex flex-col gap-6 mt-6">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="relative">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`peer rounded-xl border-2 px-4 pt-10 pb-4 w-full text-base md:text-lg lg:text-xl ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-emerald-900`}
                />
                <Label
                  htmlFor="email"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:text-sm text-emerald-900 ${
                    values.email ? "top-4 text-sm" : ""
                  }`}
                >
                  Username
                </Label>
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder=" "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={`peer rounded-xl border-2 px-4 pt-10 pb-4 w-full text-base md:text-lg lg:text-xl ${
                    touched.password && errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-emerald-900`}
                />
                <Label
                  htmlFor="password"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:text-sm text-emerald-900 ${
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
                {touched.password && errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Action Row */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-emerald-900">Forgot Password?</p>
                <Button
                  type="submit"
                  className="bg-emerald-900 hover:bg-emerald-800 text-white rounded-xl p-4"
                >
                  <img src={rightarrow} alt="arrow" className="h-6 w-6" />
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      {/* Social login and Terms */}
      <div className="flex flex-col items-center mt-10 gap-4 pb-4">
        <p className="text-sm text-emerald-900">Or continue with:</p>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="rounded-xl border-2 h-16 w-16 flex items-center justify-center"
          >
            <img src={apple} alt="apple" className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-2 h-16 w-16 flex items-center justify-center"
          >
            <img src={google} alt="google" className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-xs text-center max-w-xs text-emerald-900">
          Having issues?{" "}
          <span className="font-bold text-emerald-900">Contact Support</span>
        </p>
      </div>
    </div>
  );
};


export default LoginBack;
