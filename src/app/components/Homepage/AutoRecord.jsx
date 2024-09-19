import Image from 'next/image'


const AutoRecord = () => {
    return (
        <div className='flex my-12 flex-col container mx-auto md:flex-row md:justify-between gap-6'>
            <div className='bg-pink-50 h-[500px] w-full md:w-1/2  rounded-xl'>
                <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center h-80' style={{
                    backgroundImage: `url('https://docs.daily.co/assets/prebuilt-hero.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'px',
                }}>
                    {/* recording div */}
                    <div>
                        <h1 className='text-red-500 font-semibold md:text-xl text-center'><span className=''>Start recording....</span></h1>

                    </div>
                </div>

                {/* autometic record div */}

                <div className='md:p-6 p-2'>
                    <h1 className='text-2xl font-semibold'>Autometic Recording</h1>
                    <p>Start a meeting and our platform will autometically record audio and video in real time.</p>
                    {/* show more button */}
                    <button className='btn mt-2 bg-blue-700 text-white px-3 py-1 rounded-3xl'>Learn More</button>

                </div>

            </div>

            <div className='bg-blue-50 h-[500px] w-full md:w-1/2 rounded-xl'>
                <div className='grid grid-cols-1 mt-8 gap-3'>
                    <div className=' p-3 w-3/5 rounded-2xl mx-auto  bg-pink-100'><span className='font-semibold'>Andy</span> <br />Can you explain more about this Jhon?</div>
                    <div className='  p-3 w-3/5 rounded-2xl mx-auto bg-pink-100'><span className='font-semibold'>Jhonson</span> <br />Sure for this task we need to have custom icons and animation.Eva will help you.</div>
                    <div className=' opacity-50  p-3 w-3/5 rounded-2xl mx-auto bg-pink-100'>Eva</div>

                </div>

                <div className='p-8 md:mt-2'>
                    <h1 className='text-2xl mt-1 font-semibold'>Trancription</h1>
                    <p>The all engine transcripes the spoken word into text making it eassy to search and reference specific section of the meeting</p>
                    <button className='btn mt-2 bg-blue-700 text-white px-3 py-1 rounded-3xl'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default AutoRecord;