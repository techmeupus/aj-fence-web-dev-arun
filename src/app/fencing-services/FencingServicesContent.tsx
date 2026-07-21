'use client';

import OurServices from "@/components/home/OurServices";
import Contact from "@/components/home/Contact";
import ContactForm from "@/components/home/ContactForm";

export default function FencingServicesContent() {
    return (
        <main className="pt-20">
            <OurServices />
            <Contact showBgImage={false} />
            <ContactForm />
        </main>
    );
}
