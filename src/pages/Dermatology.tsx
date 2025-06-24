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

const treatments = [
    {
        title: 'Trajtimi i Akneve',
        img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop',
        desc: 'Çrrënjosje e akneve dhe pastrim i thellë i lëkurës me teknologji të avancuara.',
        duration: '45-60 min',
        sessions: '3-4 seanca'
    },
    {
        title: 'Peeling Kimik',
        img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
        desc: 'Rinovim estetik me substrate kimike për lëkurë të shkëlqyer dhe të rinovuar.',
        duration: '30-45 min',
        sessions: '2-3 seanca'
    },
    {
        title: 'Laser Erbium',
        img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
        desc: 'Trajtim laser për njolla, shenja dhe rrudha të lehta me rezultate të dukshme.',
        duration: '60-90 min',
        sessions: '1-2 seanca'
    },
    {
        title: 'Microdermabrasion',
        img: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&h=400&fit=crop',
        desc: 'Eksfolim i butë për rigjenerim natyral të lëkurës dhe teksturë të përmirësuar.',
        duration: '30-45 min',
        sessions: '4-6 seanca'
    },
    {
        title: 'Injeksione Kolagjeni',
        img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop',
        desc: 'Rikthim i elasticitetit dhe volumit me injeksione të sigurt dhe të aprovuara.',
        duration: '15-30 min',
        sessions: '1-2 seanca'
    },
    {
        title: 'Elektroporacion',
        img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop',
        desc: 'Përthithje maksimale e serumëve me teknologji të avancuar elektroporacion.',
        duration: '45-60 min',
        sessions: '3-5 seanca'
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
    { number: '1000+', label: 'Pacientë të Kënaqur', icon: Heart },
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
            <section className="relative bg-gradient-to-br from-[#0B2944] via-[#1e3a5f] to-[#0B2944] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2944]/50 to-transparent"></div>

                {/* Animated background elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#FEFE98]/10 to-[#D3A54B]/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[#D3A54B]/10 to-[#FEFE98]/10 rounded-full blur-xl animate-pulse delay-1000"></div>

                <div className="container mx-auto px-4 sm:px-8 lg:px-24 relative z-10">
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
                                <Link to="https://wa.me/38345448822" target="_blank" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944] hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                    Rezervo Konsultë
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
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

            {/* Treatments Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2944] mb-6">
                            Trajtimet Tona Profesionale
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Ofrojmë një gamë të plotë trajtimesh dermatologjike duke përdorur teknologjitë më të fundit dhe teknikat më efikase.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {treatments.map((treatment) => (
                            <div key={treatment.title} className="group hover:shadow-2xl transition-all duration-300 shadow-lg overflow-hidden rounded-lg border bg-white text-gray-900">
                                <div className="relative">
                                    <img
                                        src={treatment.img}
                                        alt={treatment.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-[#0B2944] group-hover:text-[#1e3a5f] transition-colors">
                                        {treatment.title}
                                    </h3>
                                    <div className="flex gap-4 text-sm text-gray-500">
                                        <span>⏱️ {treatment.duration}</span>
                                        <span>📅 {treatment.sessions}</span>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                                        {treatment.desc}
                                    </p>
                                    <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground group-hover:bg-[#0B2944] group-hover:text-white transition-all duration-300">
                                        Më Shumë Info
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skin Care Tips Section */}
            <section className="py-20 bg-gradient-to-br from-[#0B2944] to-[#1e3a5f] text-white relative overflow-hidden">
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
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
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
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            </section>


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