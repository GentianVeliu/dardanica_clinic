import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

interface WorkingHour {
    day: string;
    hours: string;
}

interface FooterCTAProps {
    title: string;
    highlight?: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    showWorkingHours?: boolean;
    workingHours?: WorkingHour[];
}

const FooterCTA: React.FC<FooterCTAProps> = ({
    title,
    highlight,
    description,
    buttonText,
    buttonLink,
    showWorkingHours = false,
    workingHours = [
        { day: 'Hënë – Premte', hours: '10:00 – 20:00' },
        { day: 'Shtunë', hours: '10:00 – 14:00' },
        { day: 'Dielë', hours: 'Mbyllur' }
    ]
}) => {
    const isExternal = /^https?:\/\//.test(buttonLink);

    return (
        <>
            {/* CTA Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#003566] via-[#0B2944] to-[#003566] text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FEFE98]/10 to-[#D3A54B]/10 pointer-events-none" />
                <div className="relative container mx-auto px-4 sm:px-8 lg:px-24 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                            {title}{' '}
                            {highlight && <span className="text-[#FEFE98]">{highlight}</span>}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-200 mb-10">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            {isExternal ? (
                                <a
                                    href={buttonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-[#FEFE98]/20"
                                >
                                    {buttonText}
                                    <Phone className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                                </a>
                            ) : (
                                <Link
                                    to={buttonLink}
                                    className="group inline-flex items-center bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg shadow-[#FEFE98]/20"
                                >
                                    {buttonText}
                                    <Phone className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                                </Link>
                            )}
                        </div>

                        {showWorkingHours && (
                            <div className="mx-auto w-full md:w-[75%] bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                <p className="text-sm font-medium mb-2">📅 Orari i Punës</p>
                                <div className="text-gray-200 text-sm space-y-1">
                                    <p>
                                        {workingHours
                                            .slice(0, 2)
                                            .map(w => `${w.day}: ${w.hours}`)
                                            .join('  |  ')}
                                    </p>
                                    <p>
                                        {workingHours
                                            .slice(2)
                                            .map(w => `${w.day}: ${w.hours}`)
                                            .join('  |  ')}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#081f33] text-white py-10 px-4 sm:px-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Dardanica Clinic</h3>
                        <p className="text-sm text-gray-400">
                            Qendra më moderne e kujdesit mjekësor në Kosovë.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Shërbimet</h4>
                        <ul className="text-sm space-y-1">
                            <li><Link to="/dermatologji" className="hover:underline">Dermatologji</Link></li>
                            <li><Link to="/estetika" className="hover:underline">Mjekësi Estetike</Link></li>
                            <li><Link to="/kirurgji-orale" className="hover:underline">Kirurgji Orale</Link></li>
                            <li><Link to="/stomatologji" className="hover:underline">Stomatologji</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Kontakti</h4>
                        <ul className="text-sm space-y-1">
                            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +383 45 44 88 22</li>
                            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Prishtinë, Lagjja e Spitalit rr.Muhamet Çami</li>
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> dardanicaclinic@gmail.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Na Ndiqni</h4>
                        <div className="flex items-center gap-4 text-2xl">
                            <a href="https://www.facebook.com/p/Dardanica-Clinic-61575301026935/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FEFE98]"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/dardanica.clinic/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FEFE98]"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                    © 2025 Dardanica Clinic | Të gjitha të drejtat e rezervuara |
                    <Link to="/privacy" className="hover:underline"> Politika e Privatësisë</Link> |
                    <Link to="/terms" className="hover:underline"> Kushtet e Përdorimit</Link> |
                    <Link to="/" className="hover:underline"> Powered by GM</Link>
                </div>
            </footer>
        </>
    );
};

export default FooterCTA;
