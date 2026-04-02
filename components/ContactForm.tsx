"use client";
import { skrivEpost } from "@/components/skrivEpost";
import { useRouter } from "next/navigation"

export default function ContactForm() {

    const router = useRouter()
    const RensBaraOmSakerDialog = () => {
        if (confirm("Är du säker på att du vill rensa formuläret?")) {
            document.querySelector("form")?.reset();
            router.back();
        }
    }

    const SkickaFormular = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = new FormData(document.querySelector("#kontakt") as HTMLFormElement);
        if (confirm("Är du säker på att du vill skicka formuläret?")) {
            skrivEpost(data);
            router.back();
        }
        document.querySelector("form")?.reset();
    }

    return (
        <>
            <div className="flex justify-center py-4 px-4">
                <div className="w-full max-w-lg bg-background border border-val3/20 rounded-2xl p-10">

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-xl font-medium text-val1 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                            Kontakta Glenn
                        </h2>
                        <p className="text-xs text-val3 mt-1">Vi återkopplar inom ett par arbetsdagar.</p>
                        <br />
                    </div>

                    <form id="kontakt" className="grid gap-5">

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-val2">
                                Namn
                            </label>
                            <input
                                type="text" id="name" name="name"
                                placeholder="Kalle Kula" required
                                className="px-3.5 py-2.5 text-sm rounded-lg border border-val3/40 bg-val4/10 text-val1 placeholder:text-val3/60 focus:outline-none focus:border-val3 focus:ring-2 focus:ring-val3/20 focus:bg-white transition-all duration-200" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-val2">
                                E-post
                            </label>
                            <input
                                type="email" id="email" name="email"
                                placeholder="kalle.kula@exempel.se" required
                                className="px-3.5 py-2.5 text-sm rounded-lg border border-val3/40 bg-val4/10 text-val1 placeholder:text-val3/60 focus:outline-none focus:border-val3 focus:ring-2 focus:ring-val3/20 focus:bg-white transition-all duration-200" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className="text-xs font-medium uppercase tracking-widest text-val2">
                                Ämne
                            </label>
                            <select
                                id="subject" name="subject" defaultValue="startvarde" required
                                className="px-3.5 py-2.5 text-sm rounded-lg border border-val3/40 bg-val4/10 text-val1 appearance-none focus:outline-none focus:border-val3 focus:ring-2 focus:ring-val3/20 focus:bg-white transition-all duration-200">
                                <option value="startvarde" disabled className="text-val3">Välj ett alternativ...</option>
                                <option value="produkt">Produkt</option>
                                <option value="feedback">Order</option>
                                <option value="betalning">Betalning / Faktura</option>
                                <option value="ovrigt">Övrigt</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-val2">
                                Meddelande
                            </label>
                            <textarea
                                id="message" name="message"
                                placeholder="Ditt meddelande..." required
                                rows={4}
                                className="px-3.5 py-2.5 text-sm rounded-lg border border-val3/40 bg-val4/10 text-val1 placeholder:text-val3/60 resize-y focus:outline-none focus:border-val3 focus:ring-2 focus:ring-val3/20 focus:bg-white transition-all duration-200" />
                        </div>

                        <div className="flex gap-3 mt-1">
                            <button
                                type="button" onClick={SkickaFormular}
                                className="flex-1 py-2.5 px-5 rounded-lg bg-val2 text-val4/90 text-sm font-medium hover:bg-val1 transition-colors duration-200">
                                Skicka
                            </button>
                            <button
                                type="button" onClick={RensBaraOmSakerDialog}
                                className="py-2.5 px-5 rounded-lg border border-val3/50 text-val3 text-sm hover:bg-val4/20 hover:text-val2 hover:border-val2 transition-all duration-200">
                                Ångra
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}