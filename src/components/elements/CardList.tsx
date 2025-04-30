import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";

export function CardList() {
  return (
    <div className="mt-6 px-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-emerald-900">My Cards</h2>
        <button className="text-sm text-emerald-700 font-medium">
          + Add Card
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-white rounded-3xl shadow-sm border">
          <div className="flex items-center space-x-3">
            <img src={visa} alt="Apple" className="h-12 w-12" />

            <div>
              <p className="font-medium text-emerald-900">Apple Card</p>
              <p className="text-sm text-gray-500">Mastercard 8490</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded-3xl shadow-sm border">
          <div className="flex items-center space-x-3">
            <img src={mastercard} alt="Apple" className="h-12 w-12" />

            <div>
              <p className="font-medium text-emerald-900">Marriott Bonvoy</p>
              <p className="text-sm text-gray-500">VISA 5643</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
