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
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-8">
      {/* Content container */}
      {/* <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-center gap-6"> */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center gap-6 px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900">
            Welcome back
          </h1>
          <h3 className="text-xs mt-5 sm:text-4xl md:text-5xl lg:text-6xl text-emerald-900">
            Sign in to your account
          </h3>
        </div>

        {/* Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // onFinalSubmit(values);x
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
            <>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full space-y-4">
                <div>
                  {/* Email */}
                  {/* <div className="mb-4">
                    <div className="relative w-full">
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={`peer rounded-xl border-2 px-4 py-6 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:py-8 ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      <Label
                        htmlFor="email"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-900 peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-900"
                      >
                        Email address
                      </Label>
                    </div>
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div> */}
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
                        Username
                      </Label>
                    </div>
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="relative w-full">
                    {/* <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder=" "
                      className="peer rounded-xl border-2 border-gray-300 text-emerald-900 px-4 py-6 text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:py-7 pr-12" // Extra padding right for the eye button
                    /> */}
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

                    {/* Eye Icon Button */}
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
              </div>

              {/* Already have account */}
              <div className="flex flex-row w-full mt-5 items-center justify-between">
                <p className="text-sm sm:text-base text-emerald-900">
                  Forgot Password?
                </p>
                <Button
                  // onClick={handleSubmit}
                  type="submit"
                  className="w-full bg-emerald-900 hover:bg-emerald-800 text-white text-base sm:text-lg w-12 h-12 md:text-xl py-6 rounded-xl"
                >
                    <img src={rightarrow} alt="Logo" className="h-10 w-10" />
                </Button>
              </div>

              {/* Or continue */}
              <div className="flex flex-col items-center gap-4 mt-20">
                <p className="text-sm sm:text-base text-emerald-900">
                  Or continue with:
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="rounded-xl border-2 h-16 w-16 flex items-center justify-center"
                  >
                    <img src={apple} alt="Logo" className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-xl border-2 h-16 w-16 flex items-center justify-center"
                  >
                    <img src={google} alt="Logo" />
                  </Button>
                </div>
              </div>

              {/* Terms */}
              <div className="w-[70%] flex flex-col items-center mx-auto">
                <p className="text-xs sm:text-sm text-emerald-900 text-center max-w-xs mt-8">
                  Having issues?{" "}
                  <span className="text-emerald-900 font-bold">
                    Contact Support
                  </span>
                </p>
              </div>
            </form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginBack;
