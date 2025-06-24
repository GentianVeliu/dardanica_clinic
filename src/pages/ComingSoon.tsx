import React from 'react';
import logoAll from '../assets/dc-logo-all.png';

const ComingSoon: React.FC = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/38345448822', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B2944] via-[#1e4a6b] to-[#0B2944] flex items-center justify-center p-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Logo placeholder - you can replace this with your actual logo */}
                <div className="mb-12">
                    <div className="w-40 h-40 mx-auto">
                        <img
                            src={logoAll}
                            alt="Dardanica Clinic Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Main heading */}
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                    Coming
                    <span className=" text-[#F7DD72] mt-2"> Soon</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Po punojmë për të sjellë diçka të jashtëzakonshme.
                    Mbani kontakt për lajme të reja!
                </p>

                {/* Contact section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/20">
                    <h2 className="text-3xl font-bold text-white mb-6">Na Kontaktoni</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Keni pyetje? Jemi këtu për t'ju ndihmuar!
                    </p>

                    <button
                        onClick={handleWhatsAppClick}
                        className="group inline-flex items-center bg-[#25D366] hover:bg-[#20b55a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <svg
                            className="w-6 h-6 mr-3 group-hover:animate-pulse"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097" />
                        </svg>
                        Shkruani në WhatsApp
                    </button>

                    <div className="mt-6 text-[#F7DD72] font-semibold text-lg">
                        +383 45 448 822
                    </div>
                </div>

                {/* Progress indicator */}
                <div className="max-w-md mx-auto">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>75%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                        <div className="bg-gradient-to-r from-[#F7DD72] to-yellow-400 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
                    </div>
                </div>

                {/* Animated dots */}
                <div className="flex justify-center space-x-2 mt-12">
                    <div className="w-3 h-3 bg-[#F7DD72] rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-[#F7DD72] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-[#F7DD72] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;