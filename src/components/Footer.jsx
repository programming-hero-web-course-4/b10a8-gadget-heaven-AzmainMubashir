const Footer = () => {
    return (
        <div>
<footer className="footer footer-center bg-white text-primary-content py-12 px-10 border-b">
  <aside>
    <a href="/" className="font-bold text-3xl text-black">
    Gadget Heaven
    </a>
    <p className="font-medium opacity-60 text-black">Leading the way in cutting-edge technology and innovation.</p>
  </aside>
</footer>
<footer className="footer md:place-items-baseline md:place-content-evenly bg-white pb-16 px-10 pt-8">
  <nav>
    <h6 className="footer-title opacity-100 text-black text-xl">Services</h6>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Product Support</a>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Order Tracking</a>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Shipping & Delivery</a>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title opacity-100 text-black text-xl">Company</h6>
    <a className="link link-hover opacity-60 text-black text-base font-normal">About us</a>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Careers</a>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title opacity-100 text-black text-xl">Legal</h6>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Terms of Service</a>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Privacy Policy</a>
    <a className="link link-hover opacity-60 text-black text-base font-normal">Cookie Policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;