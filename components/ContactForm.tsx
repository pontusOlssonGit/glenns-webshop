"use client";
import { skrivEpost } from "@/components/skrivEpost";

export default function ContactForm() {

    const RensBaraOmSakerDialog = () => {
        if (confirm("Är du säker på att du vill rensa formuläret?")) {
            document.querySelector("form")?.reset();
        }
    }

    const SkickaFormular = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = new FormData(document.querySelector("form") as HTMLFormElement);
        if (confirm("Är du säker på att du vill skicka formuläret?")) {
            skrivEpost(data);
        }
        document.querySelector("form")?.reset();
    }

    return (
        <>
            <form className="grid">
                <label htmlFor="name">Namn:</label>
                <input type="text" id="name" name="name" placeholder="Kalle Kula" required />

                <label htmlFor="email">Epost:</label>
                <input type="email" id="email" name="email" placeholder="kalle.kula@exempel.se" required />

                <label htmlFor="subject">Ämne:</label>
                <select id="subject" name="subject" defaultValue="startvarde" required>
                    <option value="startvarde" disabled>Välj ett alternativ...</option>
                    <option value="produkt">Produkt</option>
                    <option value="feedback">Order</option>
                    <option value="betalning">Betalning/Faktura</option>
                    <option value="ovrigt">Övrigt</option>
                </select>

                <label htmlFor="message">Meddelande:</label>
                <textarea id="message" name="message" placeholder="Ditt meddelande..." required></textarea>

                <section className="flex gap-4">
                    <button type="button" onClick={SkickaFormular}>Skicka</button>
                    <button type="button" onClick={RensBaraOmSakerDialog}>Ångra</button>
                </section>

            </form>
        </>
    );
}