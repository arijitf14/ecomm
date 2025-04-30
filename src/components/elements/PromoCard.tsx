import mainwallet from "../../assets/mainwallet.svg";
import { Button } from "../ui/button";

export function PromoCard() {
  return (
    <div className="bg-emerald-50 rounded-2xl p-6 mt-6 text-center flex flex-col items-center">
      <img src={mainwallet} alt="Apple" className="h-16 w-16" />
      <p className="font-semibold text-emerald-900 text-2xl mt-1 mb-1">
        Get 0% APR Options
      </p>
      <div className="w-[65%]">
        <p className="text-xs text-gray-600 mb-4">
          See promotional offers as low as 0% APR for 24 months.
        </p>
      </div>

      {/* <button className="bg-emerald-900 text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-emerald-800 transition">
        See offers →
      </button> */}
      <Button
        // onClick={() => navigate("/sign-up-pin")}
        className="w-full bg-emerald-900 hover:bg-emerald-800 text-white text-base md:text-lg lg:text-xl py-6 md:py-7 lg:py-8 rounded-xl"
      >
        See offers →
      </Button>
    </div>
  );
}
