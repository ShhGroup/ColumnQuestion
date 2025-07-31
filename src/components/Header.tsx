function Header() {
  return (
    <header
      style={{ boxShadow: "0 4px 4px 0 rgba(41, 80, 131, 0.13)", background: 'linear-gradient(90deg, #FFF 46.73%, #EEE2C4 93.46%)' }}
      className="w-full flex justify-between bg-white h-[60px] items-center px-4"
    >
      <img src="./images/logo.png" alt="logo" />
      <p className="text-black text-center text-[16px] font-black">Shop Smart Program</p>
    </header>
  );
}

export default Header;
