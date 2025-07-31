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
import { Star, Award, Shield, Heart, ChevronRight } from 'lucide-react';
import logoDC from '../assets/logo-dc-shadow.png';
import estetik1 from '../assets/estetik1.jpg';
import estetik2 from '../assets/estetik2.jpg';
import estetik4 from '../assets/estetik4.jpg';

const benefits = [
    {
        title: 'Tretman Anti-rrudhë',
        desc: 'Tretman anti-rrudhë për pamje rinore dhe natyrale.'
    },
    {
        title: 'Filler Dermal',
        desc: 'Volumizim, konturim, korrigjim i asimetrive dhe balancim profili.'
    },
    {
        title: 'Microneedling (Fytyrë, Qafë, Dekolte, Flokë)',
        desc: 'Microneedling + PRP, Microneedling + Exosome PDRN, Microneedling + mezoterapi (PRP, acid hialuronik, koktej vitaminash).'
    },
    {
        title: 'Double Tite (RF Microneedling + Injection)',
        desc: 'Shtrëngim dhe tonifikim i lëkurës, rritje të prodhimit të kolagjenit, përmirësim i strukturës së lëkurës.'
    },
    {
        title: 'Skin Booster (Mezoterapi)',
        desc: 'Profhilo, Karisma RH Collagen, Nucleofill Strong, Nucleofill Eyes, Croma Revitalis, Rejuran.'
    },
    {
        title: 'Peeling (PQ Age Evolution, PRX-T33)',
        desc: 'Ndriçim i lëkurës, përmirësim i strukturës, zhdukje e njollave/hiperpigmentimeve, reduktim i poreve, rrudhave të imëta dhe akneve.'
    },
    {
        title: 'Lipolizë (Aqualyx fytyrë, Aqualyx trup)',
        desc: 'Eliminim i mjekrës së dyfishtë dhe i dhjamit në zona të ndryshme të trupit.'
    },
    {
        title: 'Trajtimet e lëkurës',
        desc: 'Hydrofacial, Diamond Dermabrazion, Radiofrekuencë, LED Light Therapy, Oxygen Therapy, maskë kolagjeni, pastrim i thellë i fytyrës.'
    },
];


const faq = [
    {
        q: 'Sa zgjat efekti i botoksit?',
        a: 'Rreth 4–6 muaj, varësisht nga metabolizmi.'
    },
    {
        q: 'A janë fillers të përhershëm?',
        a: 'Jo; rekomandohen rigjenerime çdo 6–12 muaj.'
    },
    {
        q: 'Në cilat zona aplikohet tretmani anti-rrudhë?',
        a: 'Balli, ndërmjet vetullave (glabella), rreth syve (“crow’s feet”), hunda, lartësimi i vetullave, rreth buzës dhe mjekra.'
    },
    {
        q: 'Çfarë është Filleri Dermal?',
        a: 'Acid hialuronik i injektuar për të shtuar volum, konturim dhe korrigjim të asimet rive.'
    },
    {
        q: 'Sa seanca Double Tite rekomandohen?',
        a: 'Zakonisht 2–3 seanca, të ndara nga 4–6 javë për rezultate afatgjata.'
    },
    {
        q: 'Çfarë është Hydrofacial dhe sa shpesh bëhet?',
        a: 'Trajtim hidratuese/pastrues me sistem të avancuar; rekomandohet 1–2 herë në muaj për lëkurë me shkëlqim.'
    },
];
const stats = [
    { number: '10+', label: 'Vite Përvojë', icon: Award },
    { number: '1000+', label: 'Pacientë të Kënaqur', icon: Heart },
    { number: '100%', label: 'Shkalla e Suksesit', icon: Star },
    { number: '100%', label: 'Mbështetje', icon: Shield },
];


const showcaseImgs = [estetik1, estetik2, fillerImg2, estetik4];
const gallery = [fillerClinic1, fillerClinic2, fillerClinic3, fillerImg1, fillerImg2, fillerImg3, fillerImg4];

const Estetika: React.FC = () => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);


    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944] py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
                        Mjekësia Estetike në  <span className="underline decoration-[#0B2944]/50">Dardanica Clinic</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
                        Trajtime estetike profesionale me rezultate natyrale.
                    </p>
                    <Link
                        to="https://wa.me/38345448822"
                        target="_blank"
                        className="
    inline-flex items-center justify-center
    bg-[#0B2944] text-white font-medium text-lg
    px-8 py-3 sm:py-4 rounded-full
    hover:opacity-90 transition-opacity duration-300

    /* match widths */
    w-full sm:w-auto min-w-[200px]
  "
                    >
                        Rezervo Konsultë
                    </Link>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-gradient-to-br from-gray-100 to-white">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((b) => (
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
                                <div className="absolute inset-0 bg-black/10 bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Gallery Estetike */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#0B2944] mb-6">
                            Galeria Estetike
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Zbuloni ambientet dhe pajisjet tona moderne për trajtimet estetike.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {gallery.map((src, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-xl">
                                <img
                                    src={src}
                                    alt={`Estetika ${i + 1}`}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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