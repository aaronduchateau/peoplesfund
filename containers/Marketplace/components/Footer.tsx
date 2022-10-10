const Footer = () => {

  return (
    <nav className="flex justify-between w-full bg-slate-900 bottom-0 z-40 lg:border-b border-solid border-black/75" style={{background: '#017A42'}}>
      <div className="flex justify-between items-center pt-4 sm:pt-0 pb-4 sm:pb-0">
      <img src="fundmeup3.png" className="flex items-center mt-1" style={{width: '240px', height: '55px'}} />
      </div>
      {/** login/logout with wallet */}
      <div className="flex items-center mr-4 text-white">
        &#169; 2022 FundMeUP
      </div>
    </nav>
  )
}

export default Footer;
