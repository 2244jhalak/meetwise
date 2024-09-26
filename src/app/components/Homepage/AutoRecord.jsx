
import { useLanguage } from '../context/LanguageContext';


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

    return (
        <div className='flex my-12 flex-col container bg-[#b9d5c3] px-14 py-10 mx-auto md:flex-row md:justify-between gap-6'>
            <div className='bg-pink-50 shadow-xl md:h-[500px] w-full md:w-1/2 rounded-xl'>
                <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center h-80' style={{
                    backgroundImage: `url('https://docs.daily.co/assets/prebuilt-hero.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <h1 className='text-red-500 font-semibold md:text-xl text-center'>{currentTexts.title}</h1>
                </div>

                <div className='md:p-6 p-2'>
                    <h1 className='text-2xl font-semibold'>{currentTexts.title}</h1>
                    <p>{currentTexts.description}</p>
                    <button className='btn mt-2 bg-blue-700 text-white px-3 py-1 rounded-3xl'>{currentTexts.buttonLearnMore}</button>
                </div>
            </div>

            <div className='bg-violet-100 shadow-xl md:h-[500px] w-full md:w-1/2 rounded-xl'>
                <div className='grid grid-cols-1 mt-8 gap-3'>
                    <div className='p-3 w-3/5 rounded-2xl mx-auto bg-pink-100'>
                        <span className='font-semibold'>Andy</span> <br />{currentTexts.userMessages.andy}
                    </div>
                    <div className='p-3 w-3/5 rounded-2xl mx-auto bg-pink-100'>
                        <span className='font-semibold'>Johnson</span> <br />{currentTexts.userMessages.johnson}
                    </div>
                    <div className='opacity-50 p-3 w-3/5 rounded-2xl mx-auto bg-pink-100'>{currentTexts.userMessages.eva}</div>
                </div>

                <div className='p-8 md:mt-2'>
                    <h1 className='text-2xl mt-1 font-semibold'>Transcription</h1>
                    <p>{currentTexts.transcription}</p>
                    <button className='btn mt-2 bg-blue-700 text-white px-3 py-1 rounded-3xl'>{currentTexts.buttonLearnMore}</button>
                </div>
            </div>
        </div>
    );
};

export default AutoRecord;
