import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Hero & services images
import stomatologyImg3 from '../assets/dent-clinic-3.jpg';
import dentImg5 from '../assets/dent-img-5.jpg';
import dentProfile from '../assets/dent-profile.jpg';
import dermaProfile from '../assets/derma-profile.jpg';
import img7 from '../assets/home/7.jpg';
import img8 from '../assets/home/8.jpg';

import clinic1 from '../assets/clinic-1.jpg';
import FooterCTA from '../components/FooterCta';


const modules = import.meta.glob('../assets/home/*.jpg', { eager: true }) as Record<
    string,
    { default: string }
>;


const galleryImages = Object.keys(modules)
    .sort((a, b) => {
        const na = Number(a.match(/\/(\d+)\.jpg$/)![1]);
        const nb = Number(b.match(/\/(\d+)\.jpg$/)![1]);
        return na - nb;
    })
    .map((path) => modules[path].default);

interface TeamMember {
    name: string;
    role: string;
    img: string;
    experience: string;
    clinic: string;
    description: string;
}

const team: TeamMember[] = [
    {
        name: 'Dr. Pleurat Bajçinca',
        role: 'Dermatolog & Venerolog',
        img: dermaProfile,
        experience: '10+ vjet përvojë',
        clinic: 'Dardanica Clinic | Prishtinë',
        description: `🔬 Specialist i dermatologjisë dhe venerologjisë me përvojë klinike dhe estetike të integruar.
Me përkushtim ndaj shëndetit të lëkurës dhe bukurisë estetike – në përputhje me standardet më të larta profesionale.
💉 I fokusuar në dermatologjinë moderne, trajtime klinike dhe estetike bashkëkohore dhe qasje të personalizuar për secilin pacient.

📚 Pjesëmarrës aktiv në:
✔️ Kongrese dhe konferenca shkencore vendore dhe ndërkombëtare
✔️ Trajnime dhe evente profesionale në dermatologji klinike dhe estetike
✔️ Simpoziume të vazhdueshme me ekspertë globalë

🤝 Anëtarësi profesionale:
🔹 Shoqata e Dermatologëve dhe Venerologëve të Kosovës
🔹 European Academy of Dermatology and Venereology – EADV

🌍 Gjithmonë në kërkim të përparimeve të reja, me qëllim që t’ju ofroj trajtime mjekësore dermatologjike klinike dhe estetike me standarde bashkëkohore.`
    },
    {
        name: 'Dr. Shkurte Demolli-Veliu',
        role: 'Specialiste e Kirurgjisë Orale',
        img: dentProfile,
        experience: '10+ vjet përvojë',
        clinic: 'Dardanica Clinic | Prishtinë',
        description: `Një profesioniste e përkushtuar me mbi një dekadë përvojë në fushën e stomatologjisë, e specializuar në kirurgji orale. Me një qasje të kujdesshme dhe të personalizuar për çdo pacient, ajo kombinon njohuritë klinike me teknologjinë moderne për të ofruar trajtime të avancuara dhe rezultate estetike të nivelit të lartë.

📍 Në kuadër të shërbimeve që ofron klinika jonë, nën kujdesin e saj profesional përfshihen:
✔️ Implantet dentare
✔️ Kurora estetike nga e-max dhe zirkon
✔️ Zbardhimi profesional i dhëmbëve
✔️ Terapitë restauruese dhe mbushjet e dhëmbëve
✔️ Drejtimi i dhëmbëve me maskerina transparente

Me përkushtim maksimal ndaj cilësisë dhe mirëqenies së pacientit, Dr. Shkurte synon jo vetëm të trajtojë, por të rikthejë buzëqeshjen dhe vetëbesimin në çdo hap.`
    }
];


const services = [
    {
        img: img7,
        title: 'Dermatologji',
        desc: 'Ofrojmë kujdes profesional për problemet tuaja lëkurore.',
        slug: '/dermatologji'
    },
    {
        img: stomatologyImg3,
        title: 'Stomatologji',
        desc: 'Trajtimet më moderne për shëndetin e dhëmbëve.',
        slug: '/stomatologji'
    },

    {
        img: img8,
        title: 'Mjekësi Estetike',
        desc: 'Bëhu versioni më i mirë i vetes me trajtimet tona profesionale.',
        slug: '/estetika'
    },
];

// Testimonials data
const testimonials = [
    { text: 'That chin and jawline contouring got me looking like Dua Lipa 😍 So happy with the results!', name: 'Kathi.S', service: 'Estetika' },
    { text: 'Stafi ishte shumë profesional dhe i kujdesshëm.', name: 'Meriton V.', service: 'Stomatologji' },
    { text: 'Dermatologjia këtu është fantastike.', name: 'Rrezarta K.', service: 'Dermatologji' },
];

const Home: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const prevTestimonial = () => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const nextTestimonial = () => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const openModal = (member: any) => setSelectedMember(member);
    const closeModal = () => setSelectedMember(null);

    const initialCount = 8;
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const galleryRef = useRef<HTMLDivElement>(null);

    const toggleGallery = () => {
        if (visibleCount < galleryImages.length) {
            setVisibleCount(galleryImages.length);
        } else {
            setVisibleCount(initialCount);
            galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                            className="
                                        inline-flex items-center justify-center
                                        bg-gradient-to-r from-[#FEFE98] to-[#D3A54B]
                                        text-[#0B2944] font-semibold
                                        text-sm sm:text-base
                                        px-6 sm:px-8 py-3 sm:py-4
                                        rounded-full shadow-lg
                                        hover:scale-105 transition-transform duration-300

                                        /* responsive width */
                                        w-full sm:w-auto min-w-[200px]
                                    "
                        >
                            Na Kontaktoni Sot
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={clinic1}
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
                        {services.map((svc) => (
                            <div key={svc.title} className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
                                <img
                                    src={svc.img}
                                    alt={svc.title}
                                    className="w-full h-40 sm:h-48 object-cover rounded mb-4"
                                />
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#003566]">
                                    {svc.title}
                                </h3>
                                <p className="text-base text-[#003566] mb-4 flex-grow">
                                    {svc.desc}
                                </p>
                                <Link
                                    to={svc.slug}
                                    className="mt-4 inline-block bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] 
                       text-[#0B2944] font-semibold px-5 py-2 rounded-full shadow hover:scale-105 
                       transition-transform duration-300"
                                >
                                    Më shumë
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#003566]">
                            Takoni Stafin Tonë të Specializuar
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Ekipi ynë i përbërë nga profesionistë të kualifikuar është gati t'ju ofrojë kujdesin më të mirë
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {team.map(member => (
                            <div
                                key={member.name}
                                onClick={() => openModal(member)}
                                className="cursor-pointer bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-80 md:w-96 max-w-lg border border-gray-100 group hover:-translate-y-2"
                            >
                                <div className="text-center">
                                    <div className="relative inline-block mb-6">
                                        {/* Kutia e fotos me hapësirë fikse dhe me overflow-hidden */}
                                        <div className="w-48 h-64 overflow-hidden rounded-3xl mx-auto">
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        {/* Ikona në cep */}
                                        <div className="absolute -bottom-2 -right-2 bg-[#003566] text-white p-2 rounded-full shadow-lg">
                                            <Star className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#003566] mb-2">{member.name}</h3>
                                    <p className="text-[#D3A54B] font-semibold mb-2">{member.role}</p>
                                    <p className="text-gray-600 mb-1">{member.experience}</p>
                                </div>
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
                                    'Staf i kualifikuar me përvojë ndërkombëtare',
                                    'Teknologji moderne dhe metoda inovative',
                                    'Mjedis premium për komfort maksimal',
                                    'Qasje e personalizuar për çdo pacient'
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


            {/* Gallery Section */}
            <section ref={galleryRef} className="py-12 md:py-20 bg-white px-4 sm:px-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003566] mb-4">
                        Dardanica Clinic
                    </h2>
                    <p className="text-sm sm:text-base text-[#003566] mb-6">
                        Shikoni hapësirat tona moderne dhe të pajisura me teknologji të avancuar
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {galleryImages.slice(0, visibleCount).map((src, idx) => (
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

                    {/* 3) Butoni toggle me type="button" */}
                    <button
                        type="button"
                        onClick={toggleGallery}
                        className="mt-6 px-6 py-3 bg-[#003566] text-white rounded-full hover:bg-[#002244] transition"
                    >
                        {visibleCount < galleryImages.length
                            ? 'Shiko më shumë foto'
                            : 'Shiko më pak foto'}
                    </button>
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


            {/* Lightbox Modal */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={() => setLightboxSrc(null)}
                >
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" />

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



            {/* Member Detail Modal */}
            {selectedMember && (
                <div
                    className="fixed inset-0 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" />

                    <div
                        className="bg-white rounded-2xl w-full max-w-2xl relative max-h-[90vh] overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* scrollable content */}
                        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[90vh]">
                            <button
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-500 hover:text-gray-700"
                                onClick={closeModal}
                            >
                                <X className="w-6 h-6" />
                            </button>
                            {/* Align text left and bold main title */}
                            <div className="flex flex-col items-start text-left space-y-4">
                                <img
                                    src={selectedMember.img}
                                    alt={selectedMember.name}
                                    className="w-40 h-64 rounded-3xl object-cover shadow-lg"
                                />
                                <h3 className="text-3xl font-extrabold text-[#003566]">
                                    {selectedMember.name}
                                </h3>
                                <p className="text-lg font-semibold text-[#D3A54B]">
                                    {selectedMember.role}
                                </p>
                                <p className="text-gray-600">
                                    {selectedMember.experience} | {selectedMember.clinic}
                                </p>
                                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                    {selectedMember.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default Home;
