import CommonButton from "../Common/CommonButton";
import cart from "../../assets/cart.jpg";
import clothe from "../../assets/clothe.jpg";
import credit from "../../assets/credit-card.jpg";

const Welcome = () => {
  return (
    <section id="welcome" className="bg-background">
      <div className="flex flex-col py-14">
        <h1 className="text-center font-bold text-text-dark text-4xl mb-14">
          Jua Online Stores
        </h1>
        <div className="flex items-center justify-center">
          <hr className="w-52 border-t-2 border-primary" />
        </div>

        <div className="flex my-14 justify-evenly">
          <div className="box-border w-1/4 h-96">
            <img src={cart} alt="Cart Image" className="h-full w-full" />
          </div>
          <div className="box-border w-1/4 h-96">
            <img src={clothe} alt="New Clothe" className="h-full w-full" />
          </div>
          <div className="box-border w-1/4 h-96">
            <img src={credit} alt="Credit Card" className="h-full w-full" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-44 bg-secondary text-white text-center p-3 text-lg hover:bg-white hover:text-secondary">
            <CommonButton label="Shop Now" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
