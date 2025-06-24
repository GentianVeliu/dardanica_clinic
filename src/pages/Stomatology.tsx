import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, Shield, Award, Users, CheckCircle, Zap } from 'lucide-react';

// Local asset imports
import dentClinic1 from '../assets/dent-clinic-1.jpg';
import dentClinic2 from '../assets/dent-clinic-2.jpg';
import dentClinic3 from '../assets/dent-clinic-3.jpg';
import dentClinic4 from '../assets/dent-clinic-4.jpg';
import dentImg1 from '../assets/dent-img-1.jpg';
import dentImg2 from '../assets/dent-img-2.jpg';
import dentProfile from '../assets/dent-profile.jpg';
import FooterCTA from '../components/FooterCta';

const procedures = [
    { title: 'Pastrim Profesional', img: dentClinic1, desc: 'Pastrim i thellë për dhëmbë të shëndetshëm me teknologji të avancuar.' },
    { title: 'Mbushje Dhëmbësh', img: dentClinic2, desc: 'Mbushje dentare me materiale cilësore dhe estetike.' },
    { title: 'Çrrënjosje Kariesi', img: dentClinic3, desc: 'Trajtim i avancuar për kariesin me metodat më të reja.' },
    { title: 'Kurora & Ura', img: dentClinic4, desc: 'Zëvendësim i dhëmbëve të dëmtuar me zgjidhje të qëndrueshme.' },
    { title: 'Zbardhim Dhëmbësh', img: dentImg1, desc: 'Zbardhim profesional për një buzëqeshje më të ndritshme.' },
    { title: 'Implant Dentar', img: dentImg2, desc: 'Implantime të sigurta dhe të qëndrueshme me garanci.' },
];

const team = [{ name: 'Dr. Spec. Shkurte Demolli-Veliu', role: 'Specialiste e kirurgjisë orale', img: dentProfile, experience: '10+ vjet përvojë', education: 'Universiteti i Prishtinës' }];

const faq = [
    { q: 'Sa kohë zgjat një seancë pastrimi?', a: 'Një seancë pastrimi profesional zgjat rreth 30–45 minuta, varësisht nga gjendja e dhëmbëve tuaj.' },
    { q: 'A është i dhimbshëm implantimi dentar?', a: 'Përdorim anestezi lokale dhe teknika moderne për të siguruar rehati maksimale gjatë gjithë procesit.' },
    { q: 'Sa shpesh duhet të bëj kontroll?', a: 'Rekomandojmë kontrolle të rregullta çdo 6 muaj për parandalim dhe mirëmbajtje optimale.' },
    { q: 'A pranoni sigurime shëndetësore?', a: 'Po, pranojmë shumë sigurime shëndetësore. Kontaktoni për më shumë detaje.' },
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
    'Metoda minimale invazive për rehati maksimale',
    'Qendra me higjenë dhe standarde të larta medicale',
    'Konsultë individuale dhe plan trajtimi të personalizuar',
    'Garanci për të gjitha shërbimet e ofruara'
];

const Stomatologji: React.FC = () => {
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
                                Stomatologji
                            </span>
                            <br />
                            <span className="text-white">Premium</span>
                        </h1>
                        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Kujdes maksimal për dhëmbët tuaj me teknologji të fundit dhe staf të specializuar
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="https://wa.me/38345448822"
                                className="group inline-flex items-center bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] 
                                         text-[#0B2944] px-8 py-4 rounded-full font-bold text-lg
                                         hover:scale-105 hover:shadow-2xl transition-all duration-300
                                         shadow-lg hover:shadow-[#FEFE98]/25"
                            >
                                Rezervo Termin
                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="#procedurat"
                                className="inline-flex items-center text-white border-2 border-white/30 
                                         px-8 py-4 rounded-full font-semibold text-lg
                                         hover:bg-white/10 hover:border-white transition-all duration-300"
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
                            Ofrojmë një gamë të plotë shërbimesh stomatologjike me teknologji të avancuar
                            dhe qasje të personalizuar për çdo pacient
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
                                    <p className="text-gray-600 mb-4 leading-relaxed">{svc.desc}</p>
                                    <button className="w-full bg-gradient-to-r from-[#003566] to-[#0B2944] 
                                                     text-white py-3 rounded-xl font-semibold
                                                     hover:shadow-lg transition-all duration-300
                                                     group-hover:from-[#FEFE98] group-hover:to-[#D3A54B] 
                                                     group-hover:text-[#003566]">
                                        Mëso Më Shumë
                                    </button>
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
                                    src={dentClinic1}
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
                                Pse të zgjidhni
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

            {/* Team Section - Enhanced */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#003566]">
                            Takoni Stafin Tonë të Specializuar
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Ekipi ynë i përbërë nga profesionistë të kualifikuar është gati t'ju ofrojë
                            kujdesin më të mirë
                        </p>
                    </div>

                    <div className="flex justify-center">
                        {team.map((member) => (
                            <div key={member.name}
                                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl 
                                          shadow-xl hover:shadow-2xl transition-all duration-500 
                                          w-full max-w-lg border border-gray-100 group
                                          hover:-translate-y-2">
                                <div className="text-center">
                                    <div className="relative inline-block mb-6">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full object-cover shadow-lg 
                                                     group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-[#003566] text-white 
                                                      p-2 rounded-full shadow-lg">
                                            <Star className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#003566] mb-2">{member.name}</h3>
                                    <p className="text-[#D3A54B] font-semibold mb-2">{member.role}</p>
                                    <p className="text-gray-600 mb-1">{member.experience}</p>
                                    <p className="text-gray-500 text-sm">{member.education}</p>
                                </div>
                            </div>
                        ))}
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
                title="Bëni një buzëqeshje"
                highlight="më të shëndetshme?"
                description="Rezervoni një konsultë falas për trajtime stomatologjike të avancuara."
                buttonText="Rezervo Konsultë"
                buttonLink="https://wa.me/38345448822"
                showWorkingHours={false}
            />
        </div>
    );
};

export default Stomatologji;
