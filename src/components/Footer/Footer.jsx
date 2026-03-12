import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <div className='max-w-[1340px] mx-auto w-11/12'>
                <div className='flex justify-center pt-8 pb-10 md:pb-16'>
                    <img className='w-20 h-20' src={footerLogo} alt="" />
                </div>

                <div className='md:flex md:justify-between'>
                    <div className='text-center text-white mb-6 md:mb-0 md:text-start md:w-1/3'>
                        <h3 className='font-semibold text-lg mb-1'>About Us</h3>
                        <p className='text-[#FFFFFF60]'>We are a passionate team We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className='text-white text-center mb-6 md:mb-0 md:text-start md:w-1/3 md:pl-24 lg:pl-40'>
                        <h3 className='font-semibold text-lg mb-1'>Quick Links</h3>
                        <ul className='text-[#FFFFFF60] flex justify-center gap-6 md:block md:list-disc md:list-inside'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className='text-white text-center pb-6 md:mb-0 md:text-start md:w-1/3'>
                        <h3 className='font-semibold text-lg mb-1'>Subscribe</h3>
                        <p className='text-[#FFFFFF60] mb-3'>Subscribe to our newsletter for the latest updates.</p>

                        <div className='px-4 flex w-full justify-center md:justify-normal md:px-0'>
                            <input
                                className='text-[#13131340] text-sm py-4 pl-4 rounded-xl rounded-r-none'
                                type="text"
                                placeholder='Enter your email' />

                            <button
                                className='bg-gradient-to-l from-[#d27eae] to-[#ebbf55] rounded-xl rounded-l-none font-bold p-3.5'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-600'>
                    <p className='text-[#FFFFFF60] text-sm text-center py-5 md:text-base'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;