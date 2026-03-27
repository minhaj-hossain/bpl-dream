import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#06091a] pt-40 mt-56 pb-10'>

            <div className='container mx-auto space-y-20'>

                {/* footer logo */}
                <div className='image flex justify-center'>
                    <img src="/images/logo-footer.png" alt="" />
                </div>

                {/* footer contact info */}
                <div className='text-white grid grid-cols-1 md:grid-cols-2 md:text-center lg:grid-cols-3 lg:text-left'>
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-[18px]'>About Us</h3>
                        <p className='text-[rgba(255,255,255,0.6)]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-[18px]'>Quick Links</h3>
                        <ul className='text-[rgba(255,255,255,0.6)]'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-[18px]'>Subscribe</h3>
                        <p className='text-[rgba(255,255,255,0.6)]'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='flex'>
                            <input className=' flex-auto py-3.5 px-7.5 rounded-l-xl text-[rgba(19,19,19,0.4)] bg-white' type="email" placeholder='Enter your email' name="email" id="email" />
                            <label className='flex-1x bg-linear-65 from-pink-500 to-purple-500 rounded-r-xl font-bold text-[#040d11] py-4 px-7.5' htmlFor="email">Subscribe
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            <p className='text-center text-[rgba(255,255,255,0.6)]'>@2024 Your Company All Rights Reserved.</p>

        </footer>
    );
};

export default Footer;