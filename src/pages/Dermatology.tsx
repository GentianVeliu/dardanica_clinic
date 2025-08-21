import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Shield, Heart, ChevronRight } from 'lucide-react';
import logoDC from '../assets/logo-dc-shadow.png';


// Local images
import dermaClinic1 from '../assets/derma-clinic-1.jpg';
import dermaClinic2 from '../assets/derma-clinic-2.jpg';
import dermaImg1 from '../assets/derma-img-1.jpg';
import dermaImg2 from '../assets/derma-img-2.jpg';
import dermaImg3 from '../assets/derma-img-3.jpg';
import FooterCTA from '../components/FooterCta';


const conditions = [
    {
        title: 'Infeksionet bakteriale',
        desc: 'Stafilodermite, folikulite, impetigo, erizipelë, celulit.',
    },
    {
        title: 'Infeksionet virale',
        desc: 'Herpes simplex, Herpes zoster, lythat (verrucat).',
    },
    {
        title: 'Infeksionet fungale',
        desc: 'Tinea – myku i trupit, kokës dhe thonjve.',
    },
    {
        title: 'Sëmundjet e thonjve',
        desc: 'Onikomikoza dhe çrregullime të pllakës së thoit.',
    },
    {
        title: 'Sëmundjet e flokëve dhe skalpit',
        desc: 'Alopecitë, dermatit seborrheik, infeksione.',
    },
    {
        title: 'Ndryshimet tumorale & nishanet',
        desc: 'Vlerësim dermatoskopik dhe ndjekje.',
    },
    {
        title: 'Sëmundjet autoimune të lëkurës',
        desc: 'Vlerësim dhe trajtim sipas protokolleve.',
    },
    {
        title: 'Probleme estetike & kozmetike',
        desc: 'Hiperpigmentime, akne, shenja, pore të zgjeruara.',
    },
];

const faq = [
    {
        q: 'Çfarë mund të përdor për puçrrat në fytyrë?',
        a: 'Trajtimi i akneve është individual: varet nga tipi, shkalla e pezmatimit dhe lloji i lëkurës. Mund të variojë nga kremra të lehta, te terapi orale dhe trajtime dermatologjike bashkëkohore. Hapi i parë i duhur është vlerësimi profesional nga dermatologu.'
    },
    {
        q: 'Kjo skuqje që më kruhet — është alergji, ekzemë apo myk?',
        a: 'Dermatiti/ekzema, reaksionet alergjike dhe infeksionet fungale shpesh duken të ngjashme. Pa një ekzaminim dermatologjik të afërt nuk mund të përcaktohet saktë shkaku. Trajtimi ndryshon sipas diagnozës, prandaj rekomandohet vizitë profesionale.'
    },
    {
        q: 'Po më bien flokët shumë, çfarë duhet të bëj?',
        a: 'Rënia e flokëve mund të vijë nga stres, mungesë vitaminash, çrregullime hormonale ose faktorë gjenetikë. Ndonjëherë është kalimtare, por shpesh kërkon vlerësim të detajuar. Pas identifikimit të shkakut me konsultë dhe analiza, përcaktohet trajtimi i përshtatshëm.'
    }
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
                            Dermatologu trajton një spektër të gjerë problemesh që lidhen me lëkurën, flokët, thonjtë dhe mukozat.
                        </p>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-3">
                            Më poshtë janë disa nga sëmundjet më të zakonshme që trajtojmë.
                            Sëmundjet inflamatore të lëkurës përfshijnë: akne (puçrrat), dermatitet (ekzemë, dermatit atopik, i kontaktit, seborrheik), psoriaza, rozacea, etj.
                        </p>
                    </div>

                    {/* Treatments grid */}
                    <section className="py-16">
                        <div className="container mx-auto px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {conditions.map((b) => (
                                    <div
                                        key={b.title}
                                        className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl
                     transform hover:-translate-y-2 transition-all duration-300"
                                    >
                                        {/* Logo */}
                                        <div className="w-12 h-12 mb-4 mx-auto">
                                            <img
                                                src={logoDC}
                                                alt="Dardanica Clinic Logo"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <h3 className="text-xl font-semibold text-[#0B2944] mb-2 text-center">
                                            {b.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm text-center">
                                            {b.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


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

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#003566]">
                                Pyetjet e Shpeshta
                            </h2>
                            <p className="text-xl text-gray-600">
                                Gjeni përgjigjet për pyetjet më të zakonshme rreth shërbimeve tona
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faq.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        <h3 className="text-lg font-semibold text-[#003566] pr-4">
                                            {item.q}
                                        </h3>
                                        <ChevronRight
                                            className={`w-5 h-5 text-[#003566] transition-transform duration-300 ${expandedFaq === idx ? 'rotate-90' : ''
                                                }`}
                                        />
                                    </button>

                                    {expandedFaq === idx && (
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fade-in">
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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