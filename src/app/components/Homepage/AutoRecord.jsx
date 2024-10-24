/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext';
import FeatureCard1 from './FeatureCard1';
import FeatureCard2 from './FeatureCard2';
import FeatureCard3 from './FeatureCard3';
import FeatureCard4 from './FeatureCard4';
import FeatureCard5 from './FeatureCard5';
import FeatureCard6 from './FeatureCard6';

const translations = {
    en: {
      title: 'Our All Features',
    },
    bn: {
      title: 'আমাদের সমস্ত বৈশিষ্ট্য',
      
    },
    fr: {
      title: 'Nos toutes les fonctionnalités',
      
    },
    es: {
      title: 'Todas nuestras características',
      
    },
  
  }

const AutoRecord = () => {
    const {language} = useLanguage();
    
    return (
        <div className=' bg-black/30 backdrop-blur-md backdrop-opacity-70 p-4 md:px-14 py-10 container mx-auto'>

            <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-orange-500 text-center mx-auto text-slate-100 lg:text-3xl md:w-1/4 dark:text-white">{translations[language].title}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* card no 1  create meeting*/}
                <div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 1,  // Increased delay to 1 second
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="card card-compact  bg-orange-50 md:h-[400px] shadow-xl">
                        <figure>
                            <Image className='w-full h-full  md:h-72 border'
                                src="data:image/jpeg;base64,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"
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                        {/* create meeting card information */}
                        <FeatureCard1></FeatureCard1>
                    </motion.div>
                </div>
                {/* card no 2 for Time zone setting */}
                <div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 1,  // Increased delay to 1 second
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="card card-compact  bg-orange-50 md:h-[400px] shadow-xl">
                        <figure>
                            <Image className='w-full h-full  md:h-72 border'
                                src="https://lh3.googleusercontent.com/ah0h9uCXVUpApR1JKLBZRusTbOsqH6N013tvt_-8zk2Az3dAj5_CFhJSsa-CRS4XDQfOadXa7feDrIQmZ9_Rr7vj=s1280-w1280-h800"
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                       {/* timezone card information */}
                       <FeatureCard2></FeatureCard2>
                    </motion.div>
                </div>
                {/* card no 3 for meeting library */}
                <div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 1,  // Increased delay to 1 second
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="card card-compact  bg-orange-50 md:h-[400px] shadow-xl">
                        <figure>
                            <Image className='w-full h-full  md:h-72 border'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzj_shMg496QZgwkQ4JKaEN4uY8YBMnVqNBw&s"
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                        {/* meeting library card info */}
                       <FeatureCard3></FeatureCard3>
                    </motion.div>
                </div>
                {/* card no 4 update profile */}
                <div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 1,  // Increased delay to 1 second
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="card card-compact  bg-orange-50 md:h-[400px] shadow-xl">
                        <figure>
                            <Image className='w-full h-full  md:h-72 border'
                                src="https://i.ytimg.com/vi/XUXIqYwVT2w/maxresdefault.jpg"
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                        <FeatureCard4></FeatureCard4>
                    </motion.div>
                </div>
                {/* card no 5 metting availability */}
                <div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 1,  // Increased delay to 1 second
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="card card-compact  bg-orange-50 md:h-[400px] shadow-xl">
                        <figure>
                            <Image className='w-full h-full  md:h-72 border'
                                src="https://cdn.prod.website-files.com/634681057b887c6f4830fae2/6367ddc8caac038181077241_6259f5b793ebb9c1a3fa8357_scheduling-meetings.png"
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                        {/* Meeting availability card info */}
                        <FeatureCard5></FeatureCard5>
                    </motion.div>
                </div>
                {/* card no 6 selecting meeting */}
                <div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 1,  // Increased delay to 1 second
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="card card-compact  bg-orange-50 md:h-[400px] shadow-xl">
                        <figure>
                            <Image className='w-full h-full  md:h-72 border'
                                src="https://midias-blog-mkt.s3.amazonaws.com/uploads/2023/08/Meeting-types.png"
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                        {/* selected meeting card info */}
                       <FeatureCard6></FeatureCard6>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default AutoRecord;
