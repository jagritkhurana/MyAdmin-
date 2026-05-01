import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TruckManagement() {
  return (
    <div className='m-8   bg-white p-10 rounded-lg '>
      <Carousel className='rounded-3xl overflow-hidden'
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop
        autoPlay
        interval={3000}
        showArrows={true}
      >
        <div>
          <img src="https://t4.ftcdn.net/jpg/06/44/27/79/240_F_644277924_hk1gbCjske2scvOmbZKsdzF9xNUFvqrK.jpg" alt="" className="h-[400px] w-full object-cover"/>
        </div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/06/48/43/62/240_F_648436265_aTw8qng7ViOMKkUBm1Pkvz5xaST4W2W1.jpg" alt="" className="h-[400px] w-full object-cover" />
        </div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/07/93/20/04/240_F_793200458_DdxFWZxAjWWGSsHKtI224xJyGmG95f4a.jpg" alt="" className="h-[400px] w-full object-cover" />
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/06/50/57/45/240_F_650574569_9xGOhEPo1JOSLNTnsHvK1POPFIJVwCDp.jpg" alt="" className="h-[400px] w-full object-cover" />
        </div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/02/39/33/38/240_F_239333874_2k0P88xoRdYMAk3xQChor7g7qA4vuz7n.jpg" alt="" className="h-[400px] w-full object-cover"/>
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/14/43/79/51/240_F_1443795168_8pWRR33ZO8wfArf9bvtYtTkV8iIGpKza.jpg" alt="" className="h-[400px] w-full object-cover" />
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/05/75/96/55/240_F_575965578_np1uaJSeDkR4MmcSRG3qcgpFXzlbv9jC.jpg" alt="" className="h-[400px] w-full object-cover" />
        </div>

      </Carousel>

    </div>
  )
}

export default TruckManagement
