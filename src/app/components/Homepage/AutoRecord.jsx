/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import FeatureCard from './FeatureCard';
import Image from 'next/image';
import { motion } from 'framer-motion'

const AutoRecord = () => {
    const { language } = useLanguage();

    const texts = {
        en: {
            title: "Automatic Recording",
            description: "Start a meeting and our platform will automatically record audio and video in real time.",
            transcription: "The engine transcribes the spoken word into text, making it easy to search and reference specific sections of the meeting.",
            buttonLearnMore: "Learn More",
            userMessages: {
                andy: "Can you explain more about this, John?",
                johnson: "Sure, for this task we need to have custom icons and animation. Eva will help you.",
                eva: "Eva"
            }
        },
        bn: {
            title: "স্বয়ংক্রিয় রেকর্ডিং",
            description: "একটি মিটিং শুরু করুন এবং আমাদের প্ল্যাটফর্ম স্বয়ংক্রিয়ভাবে অডিও এবং ভিডিও রেকর্ড করবে।",
            transcription: "ইঞ্জিন কথিত শব্দকে টেক্সটে রূপান্তর করে, যা মিটিংয়ের নির্দিষ্ট অংশগুলি অনুসন্ধান এবং রেফারেন্স করা সহজ করে।",
            buttonLearnMore: "আরও জানুন",
            userMessages: {
                andy: "এই সম্পর্কে আরও ব্যাখ্যা করতে পারেন, জন?",
                johnson: "অবশ্যই, এই কাজের জন্য আমাদের কাস্টম আইকন এবং অ্যানিমেশন দরকার। এভা আপনাকে সাহায্য করবে।",
                eva: "এভা"
            }
        },
        es: {
            title: "Grabación Automática",
            description: "Inicie una reunión y nuestra plataforma grabará automáticamente audio y video en tiempo real.",
            transcription: "El motor transcribe la palabra hablada a texto, facilitando la búsqueda y referencia a secciones específicas de la reunión.",
            buttonLearnMore: "Saber más",
            userMessages: {
                andy: "¿Puedes explicar más sobre esto, John?",
                johnson: "Claro, para esta tarea necesitamos íconos personalizados y animación. Eva te ayudará.",
                eva: "Eva"
            }
        },
        fr: {
            title: "Enregistrement Automatique",
            description: "Commencez une réunion et notre plateforme enregistrera automatiquement l'audio et la vidéo en temps réel.",
            transcription: "Le moteur transcrit la parole en texte, ce qui facilite la recherche et la référence à des sections spécifiques de la réunion.",
            buttonLearnMore: "En savoir plus",
            userMessages: {
                andy: "Peux-tu expliquer plus à ce sujet, John?",
                johnson: "Bien sûr, pour cette tâche, nous devons avoir des icônes personnalisées et une animation. Eva va t'aider.",
                eva: "Eva"
            }
        }
    };

    const currentTexts = texts[language] || texts.en; // বর্তমান ভাষার টেক্সট নির্ধারণ করুন

    // data fetching for all features section
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the JSON file from the public folder
                const res = await fetch('/features.json');
                const jsonData = await res.json();
                setData(jsonData);

            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, [Data]);

    return (
        <div className=' bg-black/30 backdrop-blur-md backdrop-opacity-70 p-4 md:px-14 py-10 container mx-auto'>

            <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-orange-500 text-center mx-auto text-slate-100 lg:text-3xl md:w-1/4 dark:text-white">Our All Features</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* card no 1 */}
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
                                src="https://i0.wp.com/blog.appointy.com/wp-content/uploads/2022/08/Google-calendar-sync-with-an-online-scheduling-system.jpg?fit=679%2C512&ssl=1"  // Path to your image
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Calendar Integration</h2>
                            <p>
                                Seamlessly integrate with popular calendar services like Google Calendar to automatically sync your meetings.,
                            </p>

                        </div>
                    </motion.div>
                </div>
                {/* card no 2 */}
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
                        <div className="card-body">
                            <h2 className="card-title">Language Detector</h2>
                            <p>
                                Automatically detect the user's preferred language for a more personalized experience.
                            </p>

                        </div>
                    </motion.div>
                </div>
                {/* card no 3 */}
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
                                src="https://catchbox.com/storage/cms_uploads/vuwagabiyuci/hybrid-meeting-with-automated-notes.png"
                                alt="Description of the image"  // Accessibility text
                                width={1000}  // Width of the image
                                height={1000} // Height of the image
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Autometic Meeting Links</h2>
                            <p>
                                Generate Zoom or Google Meet links automatically for scheduled meetings.
                            </p>

                        </div>
                    </motion.div>
                </div>
                {/* card no 4 */}
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
                        <div className="card-body">
                            <h2 className="card-title">Updating Profile</h2>
                            <p>
                                Allow users to easily update their profile information, including personal details and preferences.
                            </p>

                        </div>
                    </motion.div>
                </div>
                {/* card no 5 */}
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
                        <div className="card-body">
                            <h2 className="card-title">Meeting Availability</h2>
                            <p>
                                Set and manage your availability to streamline the meeting scheduling process
                            </p>

                        </div>
                    </motion.div>
                </div>
                {/* card no 6 */}
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
                        <div className="card-body">
                            <h2 className="card-title">Selecting Meeting Type</h2>
                            <p>
                                Enable users to select different types of meetings such as one-on-one, group meetings, or webinars.,
                            </p>

                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default AutoRecord;
