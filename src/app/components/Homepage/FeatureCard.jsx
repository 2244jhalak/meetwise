import Image from 'next/image';
import { motion } from 'framer-motion'


const FeatureCard = ({ data }) => {
    console.log(data);
    return (
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
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                // transition={{ duration: 0.5 }}
                className="card card-compact  bg-orange-50 md:h-[400px] shadow-xl">
                <figure>
                    <Image className='w-full h-full  md:h-72 border'
                        src={data.image}  // Path to your image
                        alt="Description of the image"  // Accessibility text
                        width={1000}  // Width of the image
                        height={1000} // Height of the image
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.Feature_Name}</h2>
                    <p>{data.Details}</p>

                </div>
            </motion.div>
        </div>
    );
};

export default FeatureCard;