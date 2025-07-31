import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Award, Users, CheckCircle, Zap } from 'lucide-react';

// Local asset imports
import dentClinic1 from '../assets/dent-clinic-1.jpg';
import dentClinic3 from '../assets/dent-clinic-3.jpg';
import dentClinic4 from '../assets/dent-clinic-4.jpg';
import dentImg2 from '../assets/dent-img-2.jpg';
import dentImg3 from '../assets/dent-img-3.jpg';
import dentImg5 from '../assets/dent-img-5.jpg';
import FooterCTA from '../components/FooterCta';
import img16 from '../assets/home/16.jpg';
import img17 from '../assets/home/17.jpg';

const procedures = [
    { title: 'Implantimi dentar për zëvendësimin e dhëmbëve të humbur', img: dentImg5, desc: 'Zëvendësim i përhershëm me implante të cilësisë së lartë.' },
    { title: 'Ekstraktimi i dhëmbëve të impaktuar', img: dentClinic3, desc: 'Heqje e sigurt dhe minimale invazive e dhëmbëve të bllokuar.' },
    { title: 'Kirurgjia dhe heqja e cistave dentare', img: img17, desc: 'Eliminim i cistave orale me procedurë kirurgjikale të lehtë.' },
    { title: 'Denudimi i dhëmbëve për trajtim ortodontik', img: dentClinic4, desc: 'Ekspozim i dhëmbëve për të lehtësuar vendosjen e aparateve ortodontike.' },

];


const faq = [
    // Pyetjet për implantet dentare:
    {
        q: 'Çfarë janë implantet dentare?',
        a: 'Janë vida titani që vendosen në nofull për të zëvendësuar rrënjën e dhëmbit të humbur.'
    },
    {
        q: 'Cilat janë përparësitë e implanteve?',
        a: 'Duken dhe ndihen si dhëmbët natyralë, nuk kërkojnë prishje të dhëmbëve fqinje dhe përmirësojnë funksionin e përtypjes.'
    },
    {
        q: 'Sa kohë zgjasin implantet dentare?',
        a: 'Me mirëmbajtje të duhur, implantet mund të zgjasin 10–20 vjet.'
    },
    {
        q: 'Cilat janë fazat për vendosjen e një implanti?',
        a: `1) Konsultimi dhe planifikimi 3D (ortopanoramik),  
2) Vendosja kirurgjikale e implantit,  
3) Periudha e osteointegrimit (3–6 muaj),  
4) Vendosja e kurores protetike,  
5) Kujdesi dhe kontrolli pas-operator.`
    },
];

const stats = [
    { number: '500+', label: 'Pacientë të Kënaqur', icon: Users },
    { number: '10+', label: 'Vjet Përvojë', icon: Award },
    { number: 'AI', label: 'Teknologji Avancuar', icon: Zap },
    { number: '100%', label: 'Cilësi e Garantuar', icon: Shield },
];

const benefits = [
    'Staf me përvojë profesionale dhe certifikime ndërkombëtare',
    'Teknologji të fundit për diagnostikim dhe trajtim',
    'Konsultë individuale dhe plan trajtimi të personalizuar',
    'Staf i specializuar për kirurgji orale',
    'Kushtet sterile të punës',
    'Garanci për cilësi dhe përcjellje të mëtejshme të rastit'
];

const KirurgjiOrale: React.FC = () => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Enhanced */}
            <section className="relative bg-gradient-to-br from-[#0B2944] via-[#1e3a5f] to-[#0B2944] text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2944]/50 to-transparent"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FEFE98]/10 to-transparent"></div>
                <div className="relative container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white to-[#FEFE98] bg-clip-text text-transparent">
                                Kirurgji
                            </span>
                            <br />
                            <span className="text-white">Orale</span>
                        </h1>
                        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Trajtim kirurgjik oral me standarde të larta, pajisje të avancuara dhe staf specialistësh për rezultatet më të mira.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="https://wa.me/38345448822"
                                className="
                                group inline-flex items-center justify-center
                                bg-gradient-to-r from-[#FEFE98] to-[#D3A54B]
                                text-[#0B2944] font-bold text-lg
                                px-8 py-3 sm:py-4 rounded-full
                                 shadow-lg hover:shadow-2xl hover:scale-105
                                transition-all duration-300

                                /* match widths */
                                 w-full sm:w-auto min-w-[200px]
                             "
                            >
                                Rezervo Termin
                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="#procedurat"
                                className="
                                    inline-flex items-center justify-center
                                     text-white border-2 border-white/30
                                        font-semibold text-lg
                                         px-8 py-3 sm:py-4 rounded-full
                                         hover:bg-white/10 hover:border-white
                                        transition-all duration-300

                                         /* match widths */
                                         w-full sm:w-auto min-w-[200px]
                                        "
                            >
                                Shiko Shërbimet
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="bg-gradient-to-br from-[#003566] to-[#0B2944] w-16 h-16 rounded-2xl 
                                              flex items-center justify-center mx-auto mb-4 group-hover:scale-110 
                                              transition-transform duration-300 shadow-lg">
                                    <stat.icon className="w-8 h-8 text-[#FEFE98]" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-[#003566] mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Procedures Section - Enhanced */}
            <section id="procedurat" className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#003566]">
                            Procedurat Tona të Specializuara
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Ofrojmë eksperiencë të plotë në kirurgjinë orale, me teknologji të fundit dhe trajtim të dedikuar për çdo pacient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {procedures.map((svc) => (
                            <div key={svc.title}
                                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl 
                                          transition-all duration-500 overflow-hidden border border-gray-100
                                          hover:-translate-y-2">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={svc.img}
                                        alt={svc.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-[#003566] group-hover:text-[#0B2944] 
                                                 transition-colors">{svc.title}</h3>
                                    <p
                                        className="text-gray-600 mb-4 leading-relaxed h-16 overflow-hidden">
                                        {svc.desc}
                                    </p>                                   {/* Progress bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                                        <div className="bg-gradient-to-r from-[#0B2944] to-[#1e3a5f] h-1 rounded-full
                                  transition-all duration-1000 group-hover:w-full w-1/3"
                                        />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 font-medium">Ekspertiza Profesionale</span>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Redesigned */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <img
                                    src={img16}
                                    alt="Klinika Moderne"
                                    className="rounded-3xl shadow-2xl w-full object-cover h-96"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-[#003566] text-white p-6 
                                              rounded-2xl shadow-xl">
                                    <div className="text-2xl font-bold">10+</div>
                                    <div className="text-sm">Vjet Përvojë</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center bg-[#FEFE98]/20 rounded-full px-4 py-2 mb-6">
                                <Award className="w-4 h-4 text-[#D3A54B] mr-2" />
                                <span className="text-sm font-semibold text-[#003566]">Cilësi e Certifikuar</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#003566] leading-tight">
                                Pse të zgjedhni
                                <span className="text-[#D3A54B]"> shërbimet tona?</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Jemi të përkushtuar për të ofruar kujdesin më të mirë dentar me teknologji
                                të avancuar dhe qasje të personalizuar për çdo pacient.
                            </p>
                            <div className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3 group">
                                        <div className="bg-[#003566] rounded-full p-1 mt-1 group-hover:scale-110 
                                                      transition-transform duration-300">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed group-hover:text-[#003566] 
                                                       transition-colors">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ Section - Interactive */}
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
                                <div key={idx}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-lg 
                                              transition-all duration-300 overflow-hidden">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                        className="w-full text-left p-6 flex justify-between items-center
                                                 hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        <h3 className="text-lg font-semibold text-[#003566] pr-4">{item.q}</h3>
                                        <ChevronRight
                                            className={`w-5 h-5 text-[#003566] transition-transform duration-300
                                                      ${expandedFaq === idx ? 'rotate-90' : ''}`}
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

            <FooterCTA
                title="Riktheni estetikën e "
                highlight=" buzëqeshjes suaj!"
                description="Rezervoni tani një konsultë falas me specialistët tanë të kirurgjisë orale dhe zbuloni trajtimet më të avancuara për rikthimin e buzëqeshjes tuaj."
                buttonText="Rezervo Konsultë"
                buttonLink="https://wa.me/38345448822"
                showWorkingHours={false}
            />
        </div>
    );
};

export default KirurgjiOrale;
