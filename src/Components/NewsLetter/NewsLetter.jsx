import CommonButton from "../Common/CommonButton";
const NewsLetter = () => {
  return (
    <section id="newsletter" className="bg-text-dark">
      <div className="py-14 mx-14">
        <div>
          <h1 className="text-white font-bold text-4xl">Newsletter</h1>
        </div>
        <div className="flex justify-between align-middle">
          <p className="text-text-gray w-1/2">
            Subscribe to our newsletter for more shopping on a large selection
            of fashion, electronics, mobile phones and more at the best price on
            our Stores.
          </p>
          <form>
            <div className="flex justify-evenly">
              <div className=" mr-14">
                <input
                  className="py-2 pr-8 pl-4 border-gray-400 border w-full placeholder:italic placeholder:text-text-dark focus:border-none focus:outline-none"
                  type="email"
                  name="subscribe"
                  id="subscribe"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="w-44 bg-secondary text-white text-center p-2 text-lg hover:bg-white hover:text-secondary">
                <CommonButton label="Subscribe" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
