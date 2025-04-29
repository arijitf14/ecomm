import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import face from "../../assets/Face.svg";
import { useNavigate } from "react-router-dom";

export default function FaceIDSetup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="flex flex-col mt-10 items-center gap-6 w-full max-w-md">
        <div className="w-[40%] mx-auto">
          <Progress
            value={66}
            className="h-2 mb-2 rounded-full bg-gray-300 [&>div]:bg-emerald-800"
          />
        </div>
        <div className="w-[70%] mx-auto text-center mb-32">
          <h1 className="text-2xl font-semibold text-emerald-900">
            Face ID for faster payment
          </h1>
          <p className="text-emerald-900 mt-2">
            Enable Face ID to log in faster and more securely
          </p>
        </div>
        <div className="bg-emerald-900 p-4 rounded-full mb-32">
          {/* <FaRegSmile className="text-white text-4xl" /> */}
          <img src={face} alt="Logo" className="h-6 w-6" />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Button
            // onClick={handleSubmit}
            onClick={() => navigate('/sign-up-pin')}
            className="w-full bg-emerald-900 hover:bg-emerald-800 text-white text-base sm:text-lg md:text-xl py-6 rounded-xl"
          >
            Enable face ID
          </Button>
          <button className="text-sm font-semibold text-emerald-900">
            Log in with Email
          </button>
        </div>
      </div>
    </div>
  );
}
