import React from 'react';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCta';

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
        ),
        title: 'Adresa',
        info: 'Prishtinë, Lagjja e Spitalit rr.Muhamet Çami',
        subInfo: 'Parking i disponueshëm',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.86.74a1 1 0 011 1v3.5a1 1 0 01-.91 1C10.07 21.5 2.5 13.93 2.5 4.91A1 1 0 013.5 4h3.5a1 1 0 011 1c0 1.36.26 2.66.74 3.86a1 1 0 01-.22 1.11l-2.9 2.82z" />
            </svg>
        ),
        title: 'Telefoni',
        info: '+383 45 44 88 22',
        subInfo: 'WhatsApp & Viber',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18a2 2 0 002 2h16a2 2 0 002-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
        title: 'Email',
        info: 'info@dardanica-clinic.com',
        subInfo: 'Përgjigje brenda 24 orësh',
    },
];

const workingHours = [
    { day: 'Hënë – Premte', hours: '08:00 – 20:00' },
    { day: 'Shtunë', hours: '09:00 – 15:00' },
    { day: 'Dielë', hours: 'Mbyllur' },
];

const Contact: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0B2944] via-[#1a3d5c] to-[#0B2944] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div
                    className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
                />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Jemi Këtu për<span className="text-[#F7DD72]"> Ju</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Jemi gjithmonë të gatshëm t'ju ndihmojmë. Na shkruani, na telefononi ose vizitoni zyrat tona moderne.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
                        {contactInfo.map((item) => {
                            const cleanedNumber = item.info
                                .replace(/[^+\d]/g, '')
                                .replace(/^\+/, '');
                            const isPhone = item.title === 'Telefoni';
                            const isEmail = item.title === 'Email';

                            return (
                                <div key={item.title} className="group">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#F7DD72] to-[#f5d354] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <div className="text-[#0B2944]">{item.icon}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0B2944] mb-3">{item.title}</h3>

                                        {isPhone ? (
                                            <a
                                                href={`https://wa.me/38345448822`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-semibold text-[#0B2944] hover:underline block mb-2"
                                            >
                                                {item.info}
                                            </a>
                                        ) : isEmail ? (
                                            <a
                                                href={`mailto:${item.info}`}
                                                className="text-lg font-semibold text-[#0B2944] hover:underline block mb-2"
                                            >
                                                {item.info}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-semibold text-gray-800 mb-2">
                                                {item.info}
                                            </p>
                                        )}
                                        <p className="text-gray-600 text-sm">{item.subInfo}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-12 lg:px-44">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <iframe
                            title="Dardanica Clinic Location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d341.53933928023065!2d21.169297579206358!3d42.643341281928386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1750232672480!5m2!1sen!2s"
                            className="w-full h-80 sm:h-96 lg:h-[500px] border-0"
                            allowFullScreen
                            loading="lazy"
                        />
                        <div className="absolute top-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm p-5 rounded-2xl shadow-lg max-w-xs">
                            <div className="flex items-center mb-2">
                                <span className="text-2xl text-[#FEFE98] mr-3">📍</span>
                                <h4 className="text-xl font-semibold text-[#0B2944]">Dardanica Clinic</h4>
                            </div>
                            <p className="text-gray-700 text-sm">
                                Prishtinë, Lagjja e Spitalit rr.Muhamet Çami
                            </p>
                            <Link
                                to="https://wa.me/38345448822"
                                className="mt-4 inline-block text-sm text-white bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
                            >
                                Na Kontaktoni
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA + Footer */}
            <FooterCTA
                title="Jemi këtu për"
                highlight="të ju ndihmojmë?"
                description="Na kontaktoni për çdo pyetje ose rezervoni vizitën tuaj."
                buttonText="Na Kontaktoni"
                buttonLink="https://wa.me/38345448822"
                showWorkingHours={true}
                workingHours={workingHours}
            />
        </div>
    );
};

export default Contact;
