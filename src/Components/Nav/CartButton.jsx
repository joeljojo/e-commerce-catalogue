import { BsCartCheck } from "react-icons/bs";
const CartButton = () => {
  return (
    <div className="bg-secondary relative">
      <button className="text-white p-3 flex items-center">
        <BsCartCheck size={24} className="text-white mr-2" />
        Your Cart
        <span className="bg-red-500 text-white rounded-full ml-2 px-2 py-1">
          0
        </span>
      </button>
    </div>
  );
};
export default CartButton;
