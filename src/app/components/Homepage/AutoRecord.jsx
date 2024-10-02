
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import FeatureCard from './FeatureCard';


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
                console.log(Data);
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
                {
                    Data.map(data => <FeatureCard data={data} key={data.id}></FeatureCard>)
                }
            </div>

        </div>
    );
};

export default AutoRecord;
