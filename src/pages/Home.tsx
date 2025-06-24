import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Hero & services images
import clinicLobby from '../assets/clinic-1.jpg';
import stomatologyImg3 from '../assets/dent-clinic-3.jpg';
import dermatologyImg from '../assets/derma-clinic-1.jpg';
import fillersImg from '../assets/filler-clinic-1.jpg';
import dentImg5 from '../assets/dent-img-5.jpg';
import dermaClinic1 from '../assets/derma-clinic-1.jpg';
import dermaClinic2 from '../assets/derma-clinic-2.jpg';
import fillerClinic1 from '../assets/filler-clinic-1.jpg';
import fillerClinic2 from '../assets/filler-clinic-2.jpg';

// Gallery images
import clinic1 from '../assets/clinic-1.jpg';
import clinic2 from '../assets/clinic-2.jpg';
import clinic3 from '../assets/clinic-3.jpg';
import clinic4 from '../assets/clinic-4.jpg';
import clinic5 from '../assets/clinic-5.jpg';
import clinicOutside1 from '../assets/clinic-outside-1.jpg';
import clinicOutside2 from '../assets/clinic-outside-2.jpg';
import clinicOutside3 from '../assets/clinic-outside-3.jpg';
import FooterCTA from '../components/FooterCta';

const galleryImages = [clinic1, clinic2, clinic3, clinic4, clinic5, clinicOutside1, clinicOutside2, clinicOutside3, dermaClinic1, dermaClinic2, fillerClinic1, fillerClinic2];

// Testimonials data
const testimonials = [
    { text: 'Stafi ishte shumë profesional dhe i kujdesshëm.', name: 'Meriton V.', service: 'Stomatologji' },
    { text: 'Trajtimi i fillers më dha një pamje të rinovuar.', name: 'Kushtrim P.', service: 'Estetika' },
    { text: 'Dermatologjia këtu është fantastike.', name: 'Rrezarta K.', service: 'Dermatologji' },
];

const Home: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const prevTestimonial = () => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const nextTestimonial = () => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0B2944] via-[#1e3a5f] to-[#0B2944] text-white px-4 sm:px-8">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2944]/50 to-transparent"></div>
                <div className="container mx-auto py-16 md:py-24 relative z-10 flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Mirësevini në
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FEFE98] to-[#D3A54B]">Dardanica Clinic</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                            Përkujdesje gjithëpërfshirëse mjekësore: stomatologji, dermatologji & trajtime estetike.
                        </p>
                        <Link
                            to="https://wa.me/38345448822"
                            target="_blank"
                            className="inline-block bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944] font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                        >
                            Na Kontaktoni Sot
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={clinicLobby}
                            alt="Clinic Lobby"
                            className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto rounded-2xl shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50 px-4 sm:px-8 lg:px-24">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#003566]">
                        Shërbimet tona
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { img: stomatologyImg3, title: 'Stomatologji', desc: 'Trajtimet më moderne për shëndetin e dhëmbëve.' },
                            { img: dermatologyImg, title: 'Dermatologji', desc: 'Përkujdesje e lëkurës me teknologji të avancuar.' },
                            { img: fillersImg, title: 'Estetika', desc: 'Rinovim estetik për një pamje më të freskët.' }
                        ].map((svc, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
                                <img
                                    src={svc.img}
                                    alt={svc.title}
                                    className="w-full h-40 sm:h-48 object-cover rounded mb-4"
                                />
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#003566]">
                                    {svc.title}
                                </h3>
                                <p className="text-base text-[#003566]">
                                    {svc.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] relative overflow-hidden px-4 sm:px-8">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-transparent"></div>
                </div>
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <img src={dentImg5} alt="Stafi i Klinikes" className="w-full rounded-3xl shadow-2xl object-cover max-h-96 hover:scale-105 transition" />
                        </div>
                        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003566]">Përse të Zgjidhni Dardanica Clinic?</h2>
                            <ul className="space-y-2 text-base sm:text-lg text-[#003566]">
                                {[
                                    'Staf i Kualifikuar me përvojë ndërkombëtare',
                                    'Teknologji Moderne dhe metoda inovative',
                                    'Mjedis Premium për komfort maksimal',
                                    'Qasje e Personalizuar për çdo pacient'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <Star className="h-6 w-6 text-[#003566] flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 md:py-20 bg-gray-50 px-4 sm:px-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003566] mb-4">Çfarë Thonë Klientët Tanë</h2>
                    <p className="text-sm sm:text-base text-[#003566] mb-8">Dëshmitë e pacientëve tanë të kënaqur</p>
                    <div className="relative max-w-lg mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center">
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-[#6afd7e]" />)}
                            </div>
                            <p className="text-base sm:text-lg italic text-gray-700 mb-4">"{testimonials[currentTestimonial].text}"</p>
                            <h3 className="text-sm sm:text-base font-semibold text-[#003566]">{testimonials[currentTestimonial].name}</h3>
                            <p className="text-xs sm:text-sm inline-block px-2 py-1 rounded-full text-[#0B2944]">{testimonials[currentTestimonial].service}</p>
                        </div>
                        <button onClick={prevTestimonial} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#003566] text-white p-2 rounded-full hover:bg-[#1f2f3f]">
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button onClick={nextTestimonial} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#003566] text-white p-2 rounded-full hover:bg-[#1f2f3f]">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>


            {/* Gallery Section */}
            <section className="py-12 md:py-20 bg-white px-4 sm:px-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003566] mb-4">
                        Dardanica Clinic
                    </h2>
                    <p className="text-sm sm:text-base text-[#003566] mb-6">
                        Shikoni hapësirat tona moderne dhe të pajisura me teknologji të avancuar
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {galleryImages.map((src, idx) => (
                            <div
                                key={idx}
                                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                                onClick={() => setLightboxSrc(src)}
                            >
                                <img
                                    src={src}
                                    alt={`Foto ${idx + 1}`}
                                    className="w-full h-32 sm:h-40 object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setLightboxSrc(null)}
                >
                    <div
                        className="relative max-w-3xl max-h-[90vh] p-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                            onClick={() => setLightboxSrc(null)}
                        >
                            ✕
                        </button>
                        <img
                            src={lightboxSrc}
                            alt="Enlarged"
                            className="w-full h-auto max-h-[85vh] rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            )}

            <FooterCTA
                title="Gati për një eksperiencë"
                highlight="më të mirë?"
                description="Jemi vetëm një thirrje larg — telefononi tani për informacione ose për të rezervuar takimin tuaj."
                buttonText="Na Thirr në WhatsApp"
                buttonLink="https://wa.me/38345448822"
                showWorkingHours={false}
            />
        </>
    );
};

export default Home;
