import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Shield, Heart, ChevronDown, ChevronUp } from 'lucide-react';

// Local images
import dermaClinic1 from '../assets/derma-clinic-1.jpg';
import dermaClinic2 from '../assets/derma-clinic-2.jpg';
import dermaImg1 from '../assets/derma-img-1.jpg';
import dermaImg2 from '../assets/derma-img-2.jpg';
import dermaImg3 from '../assets/derma-img-3.jpg';
import FooterCTA from '../components/FooterCta';

import filler1 from '../assets/filler-clinic-1.jpg';
import filler2 from '../assets/filler-clinic-2.jpg';
import filler3 from '../assets/filler-clinic-3.jpg';

interface Treatment {
    img: string;
    title: string;
    desc: string;
    duration: string;
    sessions: string;
    slug: string;
}

const treatments: Treatment[] = [
    {
        img: dermaImg3,
        title: 'Dermatologji Klinike',
        desc: 'Diagnostikë dhe trajtime të avancuara dermatologjike.',
        duration: '60 min',
        sessions: '1 seancë',
        slug: '/dermatologji'
    },
    {
        img: dermaImg2,
        title: 'Estetika Lëkure',
        desc: 'Peeling, mikropigmentim dhe rinovim lëkure.',
        duration: '45 min',
        sessions: '3 seanca',
        slug: '/estetika'
    },
    {
        img: dermaImg1,
        title: 'Laser Terapi',
        desc: 'Trajtim me laser për njolla dhe skuqje.',
        duration: '30 min',
        sessions: '5 seanca',
        slug: '/dermatologji'
    },
    {
        img: filler1,
        title: 'Filler Hyaluronic',
        desc: 'Rinovim volumetrik me filler të pastër.',
        duration: '30 min',
        sessions: '1 seancë',
        slug: '/estetika'
    },
    {
        img: filler2,
        title: 'Botox & Muskuj',
        desc: 'Relaksim muskujsh për rrudha të shpejta.',
        duration: '20 min',
        sessions: '1 seancë',
        slug: '/estetika'
    },
    {
        img: filler3,
        title: 'Mikrofluidë Plasma',
        desc: 'Trajtim PRP për rinovim natyral.',
        duration: '50 min',
        sessions: '2 seanca',
        slug: '/estetika'
    },
];

const faq = [
    { q: 'Sa seanca duhen për peeling kimik?', a: 'Zakonisht 3-4 seanca, me një pauzë 10-14 ditore ndërmjet tyre për rezultate optimale.' },
    { q: 'A ka dhimbje trajtimi me laser?', a: 'Ndjesi e lehtë shpimi nën anestezi lokale; shumica e pacientëve e tolerojnë mirë procedurën.' },
    { q: 'Sa kohë duhet për rikuperim pas peelingut?', a: 'Zakonisht 3-7 ditë varësisht nga thellësia e trajtimit.' },
    { q: 'A janë trajtimet e sigurt për të gjitha llojet e lëkurës?', a: 'Po, por bëjmë një analizë të detajuar para çdo trajtimi për të siguruar rezultatet më të mira.' },
];

const stats = [
    { number: '15+', label: 'Vite Përvojë', icon: Award },
    { number: '10000+', label: 'Pacientë të Kënaqur', icon: Heart },
    { number: '100%', label: 'Shkalla e Suksesit', icon: Star },
    { number: '100%', label: 'Mbështetje', icon: Shield },
];

const skinCareTips = [
    {
        title: 'Pastrim I Rregullt',
        desc: 'Pastro lëkurën dy herë në ditë me produkte të buta dhe të përshtatshme për llojin e lëkurës.',
        icon: '🧴'
    },
    {
        title: 'Mbrojtje nga Dielli',
        desc: 'Përdor krem hidratues me SPF minimum 30 çdo mëngjes, edhe në ditë me re.',
        icon: '☀️'
    },
    {
        title: 'Hidratim i Rregullt',
        desc: 'Apliko krem hidratues i përshtatshëm për llojin e lëkurës së paku dy herë në ditë.',
        icon: '💧'
    },
    {
        title: 'Ekzaminim Vjetor',
        desc: 'Vizitoni dermatologun një herë në vit për kontrolle dhe këshilla profesionale.',
        icon: '🔍'
    },
];

const galleryImages = [
    dermaClinic1,
    dermaClinic2,
    dermaImg1,
    dermaImg2,
    dermaImg3,
];


const Dermatologji: React.FC = () => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0B2944] via-[#1e3a5f] to-[#0B2944] text-white py-24 overflow-hidden px-4 sm:px-8">                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2944]/50 to-transparent"></div>

                {/* Animated background elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#FEFE98]/10 to-[#D3A54B]/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#D3A54B]/10 to-[#FEFE98]/10 rounded-full blur-xl animate-pulse delay-1000"></div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                                Dermatologji
                                <span className="block text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] bg-clip-text text-transparent">
                                    Profesionale
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
                                Trajtimet më të fundit për lëkurë të shëndetshme dhe rinovim estetik me ekspertizë botërore dhe teknologji të avancuar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to="https://wa.me/38345448822"
                                    target="_blank"
                                    className="
      inline-flex items-center justify-center gap-2 whitespace-nowrap
      bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944]
      font-medium text-lg
      px-8 py-3 sm:py-4 rounded-full
      hover:shadow-2xl hover:scale-105 transition-all duration-300

      /* responsive width */
      w-full sm:w-auto min-w-[200px]
      
      /* focus styles */
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50
    "
                                >
                                    Rezervo Konsultë
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#FEFE98]/20 to-[#D3A54B]/20 rounded-3xl blur-2xl"></div>
                                <img
                                    src={dermaClinic1}
                                    alt="Dermatologji Clinic"
                                    className="relative rounded-2xl shadow-2xl w-full object-cover h-96 lg:h-[500px] transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-amber-50/50"></div>
                <div className="container mx-auto px-4 sm:px-8 lg:px-24 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-gradient-to-br from-[#0B2944] to-[#1e3a5f] w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <stat.icon className="w-8 h-8 text-[#FEFE98]" />
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold text-[#0B2944] mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
                {/* Pattern background */}
                <div
                    className="absolute inset-0 opacity-30"
                // style={{
                //     backgroundImage: `url("data:image/svg+xml,${dotPatternSvg}")`,
                // }}
                />

                <div className="container mx-auto px-4 sm:px-8 lg:px-24 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block p-2 bg-[#0B2944]/10 rounded-full mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0B2944] to-[#1e3a5f] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-bold text-[#0B2944] mb-8 leading-tight">
                            Trajtimet Tona
                            <span className="block text-3xl sm:text-4xl font-light text-gray-600 mt-2">Profesionale</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Ofrojmë një gamë të plotë trajtimesh dermatologjike duke përdorur teknologjitë më të fundit dhe teknikat më efikase për rezultate të shkëlqyera.
                        </p>
                    </div>

                    {/* Treatments grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12">
                        {treatments.map((t) => (
                            <div
                                key={t.title}
                                className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
                            >
                                <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={t.img}
                                        alt={t.title}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-[#0B2944] mb-2">{t.title}</h3>
                                <p className="text-gray-600 text-sm flex-grow mb-4">{t.desc}</p>
                                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">{t.duration}</span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">{t.sessions}</span>
                                </div>
                                <Link
                                    to={t.slug}
                                    className="mt-4 inline-block 
                                    bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] 
                                    text-[#0B2944] font-semibold 
                                    px-5 py-2 rounded-full 
                                    shadow hover:scale-105 
                                    transition-transform duration-300 text-center"
                                >
                                    Rezervo Tani
                                </Link>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Skin Care Tips Section */}
            < section className="py-20 bg-gradient-to-br from-[#0B2944] to-[#1e3a5f] text-white relative overflow-hidden" >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-amber-900/20"></div>
                <div className="container mx-auto px-4 sm:px-8 lg:px-24 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Këshilla për Kujdesin e Lëkurës
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Mëso të kujdesesh për lëkurën tënde me këshillat e ekspertëve tanë.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skinCareTips.map((tip, index) => (
                            <div key={index} className="group">
                                <div className="rounded-lg border bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full text-white shadow-sm">
                                    <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {tip.icon}
                                        </div>
                                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
                                            {tip.title}
                                        </h3>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <p className="text-gray-300 text-center leading-relaxed text-sm">
                                            {tip.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < section className="py-20 bg-white" >
                <div className="container mx-auto px-4 sm:px-8 lg:px-24 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2944] mb-6">
                            Pyetjet e Shpeshta
                        </h2>
                        <p className="text-xl text-gray-600">
                            Gjej përgjigjet për pyetjet më të zakonshme rreth trajtimeve tona.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faq.map((item, index) => (
                            <div key={index} className="rounded-lg border bg-white text-gray-900 shadow-sm overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-[#0B2944] pr-4">
                                            {item.q}
                                        </h3>
                                        {expandedFaq === index ? (
                                            <ChevronUp className="w-5 h-5 text-[#0B2944] flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-[#0B2944] flex-shrink-0" />
                                        )}
                                    </div>
                                </button>
                                {expandedFaq === index && (
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-gray-700 leading-relaxed">
                                            {item.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Gallery Section */}
            < section className="py-20 bg-gradient-to-b from-gray-50 to-white" >
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2944] mb-6">
                            Galeria Dermatologjisë
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Shiko ambientet dhe pajisjet tona moderne për trajtimet dermatologjike.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl">
                                <img
                                    src={src}
                                    alt={`Dermatologji ${index + 1}`}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >


            <FooterCTA
                title="Lëkura juaj meriton"
                highlight="kujdesin më të mirë?"
                description="Rezervoni një konsultë dermatologjike dhe rinovoni pamjen tuaj."
                buttonText="Rezervo Konsultë"
                buttonLink="https://wa.me/38345448822"
                showWorkingHours={false}
            />
        </>
    );
};

export default Dermatologji;