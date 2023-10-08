import Header from "./Header";

const HeaderSecondaryContainer = ({termsUrl} : {termsUrl: string}) => {

  return (
    <div className="hero-no-image pb-3" style={{zIndex: 2}}>
        <Header />
        <img src={termsUrl} style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px' }}/>
    </div>
  )
}

export default HeaderSecondaryContainer;
