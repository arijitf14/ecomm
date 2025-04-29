import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const SignUpPin = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
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

  return (
    <div className="min-h-[100dvh] flex flex-col justify-between px-4 bg-white overflow-hidden">
      {/* Top: Heading */}
      <div className="text-center pt-6">
        <h1 className="text-3xl md:text-5xl font-bold text-emerald-900">
          Enter your PIN
        </h1>
      </div>

      {/* Middle: Dots + Keypad */}
      <div className="flex-grow flex flex-col items-center justify-center gap-10">
        {/* PIN Dots */}
        <div className="flex gap-4">
          {otp.map((digit, index) => (
            <div
              key={index}
              className={`w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg transition-all duration-200 ${
                digit ? "bg-emerald-900" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-6 max-w-xs w-full md:max-w-md lg:max-w-lg">
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
      </div>

      {/* Bottom: Face ID Button */}
      <div className="w-full max-w-md mx-auto px-2 pb-6">
        <Button
          onClick={() => navigate("/login-back")}
          className="w-full bg-emerald-900 hover:bg-emerald-800 text-white text-base sm:text-lg md:text-xl py-6 rounded-xl"
        >
          Enable face ID
        </Button>
      </div>
    </div>
  );
};

export default SignUpPin;

