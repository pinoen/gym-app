import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <div className="my-5">
          <p>"The journey of a thousand miles begins with a single step."</p>
           <p>Your success is our success. Let us help you achieve your goals.</p>
          <p> Have any questions? Please don't hesitate to contact us.</p>
          </div>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 hover:cursor-pointer">Twitter</p>
          <p className="my-5 hover:cursor-pointer">Instagram</p>
          <p className="hover:cursor-pointer">Facebook</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We're always happy to answer your questions.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;