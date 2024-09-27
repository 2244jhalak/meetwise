import Image from 'next/image';

const FeatureCard = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="card card-compact bg-yellow-50 w-96 shadow-2xl">
                <figure>
                    <Image className='w-full md:w-72 md:h-72'
                        src={data.image}  // Path to your image
                        alt="Description of the image"  // Accessibility text
                        width={1000}  // Width of the image
                        height={3000} // Height of the image
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.Feature_Name}</h2>
                    <p>{data.Details}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;