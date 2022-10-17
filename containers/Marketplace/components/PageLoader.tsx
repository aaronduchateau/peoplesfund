import Image from 'next/image'
const PageLoader = () => {

  return (
    <div className="loaderHolder">
      <div style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Image width={100} height={100} layout="responsive" src={'/loader.gif'} />
      </div>
      <img src="./fundmeup3.png" className="flex items-center mt-1" style={{width: '240px', height: '55px', marginLeft: 'auto', marginRight: 'auto'}} />
    </div>
  )
}

export default PageLoader;
