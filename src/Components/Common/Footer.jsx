const Footer = () => {
  return (
    <section id="footer" className="bg-text-dark">
      <div className="py-14">
        <div className="grid grid-cols-4">
          <div>
            <h3 className="text-text-gray uppercase text-2xl my-3">
              main menu
            </h3>
            <ul>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  home
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  about
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  shop
                </a>
              </li>

              <li>
                <a href="#" className="text-text-gray capitalize">
                  help
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-gray uppercase text-2xl my-3">company</h3>
            <ul>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  the company
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  carrers
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-gray uppercase text-2xl my-3">discover</h3>
            <ul>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  the team
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  our history
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  brand motto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-text-gray uppercase text-2xl my-3">find us</h3>
            <ul>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-text-gray capitalize">
                  instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
