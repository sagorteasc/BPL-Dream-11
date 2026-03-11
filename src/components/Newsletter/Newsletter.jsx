import bg from '../../assets/bg-shadow.png'

const Newsletter = () => {
    return (
        <div>
            <div className="bg-[#ad888810] backdrop-blur-md border border-white rounded-3xl p-5 text-center mb-5">

                <div style={{ backgroundImage: `url(${bg})` }} className='border-[#13131310] bg-cover bg-center py-20 rounded-3xl backdrop-blur-md'>

                    <div className='mb-4 px-4'>
                        <h3 className='font-bold text-2xl mb-2 md:text-[32px]'>Subscribe to our Newsletter</h3>
                        <p className='text-[#13131370] font-medium text-sm md:text-xl'>Get the latest updates and news right in your inbox!</p>
                    </div>

                    <div className='px-4 md:flex md:gap-2 md:justify-center md:items-center'>
                        <input
                            className='text-[#13131340] text-sm py-4 pl-4 mb-2 rounded-xl bg-transparent border md:mb-0'
                            type="text"
                            placeholder='Enter your email' />

                        <button
                            className='bg-gradient-to-l from-[#d27eae] to-[#ebbf55] rounded-xl font-bold p-4'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;