import banner from '../../assets/banner-main.png';
import bgImage from '../../assets/bg-shadow.png';
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-[#131313] h-full text-white rounded-3xl py-16 px flex flex-col justify-center items-center gap-4 mb-14">
            <div>
                <img src={banner} />
            </div>
            <h3 className='font-bold text-xl text-center md:text-3xl lg:text-[40px]'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
            <h5 className='text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</h5>
            <div className='border border-[#E7FE29] p-2 w-fit rounded-2xl'>
                <button className='text-[#131313] bg-[#E7FE29] rounded-xl px-5 py-3'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;