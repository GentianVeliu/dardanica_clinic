import React from 'react';

const TermsOfUse: React.FC = () => (
    <main className="container mx-auto px-4 sm:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6">Kushtet e Përdorimit</h1>
        <p className="mb-4">
            Duke përdorur këtë website, pranoni të respektoni këto kushte veprimi. Nëse nuk jeni dakord,
            ju lutemi mos e përdorni faqen.
        </p>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Përmbajtja</h2>
            <p>
                Të gjitha materialet në faqe (tekst, imazhe, logot) janë pronë e Dardanica Clinic dhe janë
                të mbrojtura nga të drejtat e autorit.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Përdorimi i Shërbimeve</h2>
            <p>
                Ju mund të përdorni faqen për informim personal dhe komunikim me klinikën. Nuk mund t’i
                përdorni materialet për qëllime komerciale pa leje.
            </p>
        </section>
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. Përgjegjësia</h2>
            <p>
                Dardanica Clinic nuk mban përgjegjësi për dëme indirekte ose të drejtpërdrejta që mund
                të lindin nga përdorimi i faqes.
            </p>
        </section>
        <section>
            <h2 className="text-2xl font-semibold mb-2">4. Ndryshimet</h2>
            <p>
                Ne mbajmë të drejtën për të ndryshuar këto kushte në çdo kohë. Ndryshimet do të publikohen në
                këtë faqe.
            </p>
        </section>
    </main>
);

export default TermsOfUse;