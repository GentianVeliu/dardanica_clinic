import React from 'react';

const PrivacyPolicy: React.FC = () => (
    <main className="container mx-auto px-4 sm:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6">Politika e Privatësisë</h1>
        <p className="mb-4">
            Kjo politikë e privatësisë shpjegon se si Dardanica Clinic mbledh, përdor dhe mbron
            informacionin tuaj personal kur vizitoni faqen tonë.
        </p>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Të Dhënat që Mbledhim</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>Emri dhe kontaktet (email, telefon)</li>
                <li>Informacioni i terminëve dhe historiku mjekësor</li>
                <li>Çdo informacion që ju zgjidhni të ndani përmes formularëve në faqen tonë</li>
            </ul>
        </section>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Si i Përdorim</h2>
            <p>
                Përdorim të dhënat tuaja për të konfirmuar terminet, përmirësuar shërbimet tona dhe
                për t’ju dërguar njoftime të rëndësishme (p.sh. ndryshime orari).
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. Ruajtja dhe Siguria</h2>
            <p>
                Të dhënat ruhen në mënyrë të sigurt në serverat tanë dhe nuk i ndajmë me palë të treta pa
                miratimin tuaj, përveç kur kërkohet ligjërisht.
            </p>
        </section>
        <section>
            <h2 className="text-2xl font-semibold mb-2">4. Kontaktoni</h2>
            <p>
                Nëse keni pyetje ose doni të zhbllokoni/ndryshoni të dhënat tuaja, na shkruani në
                <a href="mailto:privacy@dardanica-clinic.com" className="text-blue-600 hover:underline"> privacy@dardanica-clinic.com</a>.
            </p>
        </section>
    </main>
);

export default PrivacyPolicy;