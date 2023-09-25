
const Footer = () => {
  return (
    <div className="bg-slate-800">
      <footer className="footer p-10 max-w-6xl text-white mx-auto">
        <aside>
          
          <p className="text-lg font-bold">
          CareerHub
            
          </p>
          <p className="max-w-[260px]">
          There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
