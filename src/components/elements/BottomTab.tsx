import plus from "../../assets/plus.svg";
import home from "../../assets/home.svg";
import wallet from "../../assets/wallet.svg";
import profile from "../../assets/profile.svg";
import menu from "../../assets/menu.svg";

export function BottomTab() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-14 bg-white shadow-md z-10">
      <div className="flex justify-around items-center py-2 px-4">
        <button className="flex flex-col items-center text-emerald-700">
          <img src={home} alt="Apple" className="h-6 w-6" />
        </button>
        <button className="flex flex-col items-center text-emerald-700">
          <img src={wallet} alt="Apple" className="h-6 w-6" />
        </button>
        {/* <div className="border-4 border-black-900">
          <button className="bg-emerald-900 text-white h-16 w-16 flex rounded-full items-center justify-center -mt-8 shadow-lg">
            <PlusCircle className="w-8 h-8" />
          </button>
        </div> */}
        <button className="bg-emerald-900 text-white h-20 w-20 flex rounded-full items-center justify-center -mt-10 shadow-lg border-8 border-gray-100">
          <img src={plus} alt="Apple" className="h-6 w-6" />
        </button>

        <button className="flex flex-col items-center text-emerald-700">
          <img src={menu} alt="Apple" className="h-6 w-6" />
        </button>
        <button className="flex flex-col items-center text-emerald-700">
          <img src={profile} alt="Apple" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
