import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import face from "../../assets/Face.svg";
import { useNavigate } from "react-router-dom";

export default function FaceIDSetup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col justify-between items-center px-4 py-10 bg-gray-100">
      <div>
        <div className="w-[40%] mx-auto">
          <Progress
            value={66}
            className="h-2 mb-4 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
          />
        </div>
        <div className="w-[70%] mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-sans lg:text-4xl font-semibold text-emerald-900">
            Face ID for faster payment
          </h1>
          <p className="text-emerald-900 mt-2 font-sans text-base md:text-lg lg:text-xl">
            Enable Face ID to log in faster and more securely
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="bg-emerald-900 p-4 md:p-5 lg:p-6 rounded-full">
          <img
            src={face}
            alt="Face ID icon"
            className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <Button
          onClick={() => navigate("/sign-up-pin")}
          className="w-full bg-emerald-900 hover:bg-emerald-800 font-sans text-white text-base md:text-lg lg:text-xl py-6 md:py-7 lg:py-8 rounded-xl"
        >
          Enable face ID
        </Button>
        <button className="text-sm md:text-base lg:text-lg font-sans font-semibold text-emerald-900">
          Log in with Email
        </button>
      </div>
    </div>
  );
}
