import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';

// Assets
import fillerClinic1 from '../assets/filler-clinic-1.jpg';
import fillerClinic2 from '../assets/filler-clinic-2.jpg';
import fillerClinic3 from '../assets/filler-clinic-3.jpg';
import fillerImg1 from '../assets/filler-img-1.jpg';
import fillerImg2 from '../assets/filler-img-2.jpg';
import fillerImg3 from '../assets/filler-img-3.jpg';
import fillerImg4 from '../assets/filler-img-4.jpg';
import FooterCTA from '../components/FooterCta';
import { Star, Award, Shield, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const benefits = [
    { title: 'Rinovim Natyral', desc: 'Trajtim me botoks për mimikë natyrale.' },
    { title: 'Volumizim Preciz', desc: 'Fillers për buzë, faqe dhe konture.' },
    { title: 'Rezultate të Shpejta', desc: 'Efekt i menjëhershëm pas trajtimit.' },
    { title: 'Pa Dhimbje', desc: 'Anestezi lokale për rehati maksimale.' },
];

const treatments = [
    { name: 'Botoks në ballë', desc: 'Reduktim i rrudhave horizontale.' },
    { name: 'Botoks pranë syve', desc: 'Zbutje e linjave të qeshjes.' },
    { name: 'Fillers buzë', desc: 'Volumizim kundër buzësh të hollë.' },
    { name: 'Fillers faqe', desc: 'Rikthim i konturave rinore.' },
];

const specialists = [
    { name: 'Dr. Anna Berisha', title: 'Eksperte Estetike', img: fillerImg1 },
    { name: 'Dr. Marko Selmani', title: 'Specialist Fillers', img: fillerImg2 },
];

const faq = [
    { q: 'Sa zgjat efekti i botoksit?', a: 'Rreth 4–6 muaj, varësisht nga metabolizmi.' },
    { q: 'A dua pushim pas trajtimit?', a: 'Jo; mund të vazhdoni aktivitetet normale.' },
    { q: 'A janë fillers të përhershëm?', a: 'Jo; rekomandohen rigjenerime çdo 6–12 muaj.' },
];

const stats = [
    { number: '10+', label: 'Vite Përvojë', icon: Award },
    { number: '500+', label: 'Pacientë të Kënaqur', icon: Heart },
    { number: '100%', label: 'Shkalla e Suksesit', icon: Star },
    { number: '100%', label: 'Mbështetje', icon: Shield },
];


const showcaseImgs = [fillerImg1, fillerImg2, fillerImg3, fillerImg4];
const gallery = [fillerClinic1, fillerClinic2, fillerClinic3, fillerImg1, fillerImg2, fillerImg3, fillerImg4];

const Estetika: React.FC = () => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const toggleFaq = (i: number) => {
        setExpandedFaq(expandedFaq === i ? null : i);
    };

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944] py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                        Estetika në <span className="underline decoration-[#0B2944]/50">Dardanica Clinic</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
                        Ekspertizë profesionale në trajtime estetike me rezultate të qëndrueshme.
                    </p>
                    <Link
                        to="https://wa.me/38345448822"
                        target='_blank'
                        className="inline-block bg-[#0B2944] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
                    >
                        Rezervo Konsultë
                    </Link>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b) => (
                        <div key={b.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                            <p className="text-gray-700">{b.desc}</p>
                        </div>
                    ))}
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

            {/* Showcase */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-10 text-[#0B2944]">
                        Trajtime në Fokus
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {showcaseImgs.map((src, i) => (
                            <div key={i} className="relative overflow-hidden rounded-2xl shadow-lg group">
                                <img
                                    src={src}
                                    alt={`Trajtimi ${i + 1}`}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-semibold text-lg">{treatments[i]?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Treatments List */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-[#0B2944]">
                        Trajtimet tona
                    </h2>
                    <ul className="space-y-4">
                        {treatments.map((t) => (
                            <li key={t.name} className="flex items-start">
                                <FaUserMd className="text-[#D3A54B] mt-1 mr-4" />
                                <div>
                                    <h4 className="text-lg font-semibold">{t.name}</h4>
                                    <p className="text-gray-700">{t.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Specialists */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-10 text-[#0B2944]">
                        Takoni Specialistët
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {specialists.map((s) => (
                            <div key={s.name} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
                                <img
                                    src={s.img}
                                    alt={s.name}
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold mb-1">{s.name}</h3>
                                <p className="text-gray-600">{s.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Gallery */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-10 text-[#0B2944]">
                        Galeria Estetike
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {gallery.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Estetika ${i + 1}`}
                                className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            />
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
                            <div
                                key={index}
                                className="rounded-lg bg-white shadow-sm overflow-hidden"
                            >
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
                                        <p className="text-gray-700 leading-relaxed">{item.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterCTA
                title="Ndriçoni"
                highlight="bukurinë tuaj?"
                description="Zbuloni trajtimet estetike për një pamje rinore dhe të freskët."
                buttonText="Rezervo Konsultë"
                buttonLink="https://wa.me/38345448822"
                showWorkingHours={false}
            />
        </>
    );
};

export default Estetika;