import gift from "../../assets/gift.svg";
import copy from "../../assets/copy.svg";

export function Invite() {
  return (
    <div className="bg-emerald-50 rounded-3xl p-4 mt-6 flex items-center justify-around">
      <div className="flex items-center space-x-4">
        <div className="bg-emerald-100 p-2 rounded-full -ml-6">
          <img src={gift} alt="Apple" className="h-16 w-16" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Invite friends</p>
          <p className="font-semibold text-emerald-900 text-sm">Code LP867J</p>
          <button className="bg-[#E8F45B] text-emerald-900 text-sm font-semibold px-3 py-1 mt-2 rounded-full flex items-center space-x-1 hover:opacity-90 transition">
            <span>Earn $200</span>
          </button>
        </div>
      </div>
      <img src={copy} alt="Apple" className="h-6 w-6" />
    </div>
  );
}
