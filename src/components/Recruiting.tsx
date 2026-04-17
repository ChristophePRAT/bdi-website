import { getTranslations } from "next-intl/server";

export default async function Recruiting() {
    const t = await getTranslations("Index");

    return (
        <section
            id="recruiting"
            className="py-16 px-5 text-center bg-linear-to-r from-bdi-red to-bdi-yellow"
        >
            <div className="max-w-200 mx-auto">
                <h2 className="font-ranchers text-[clamp(2rem,5vw,3.5rem)] text-bdi-cream mb-4 drop-shadow-md">
                    {t("recruitingTitle")}
                </h2>
                <p className="text-bdi-cream text-[1.2rem] opacity-90 mb-8 max-w-150 mx-auto leading-relaxed">
                    {t("recruitingSub")}
                </p>
                <a
                    href="https://forms.gle/Q8zuGGD1tQ9HzCoJ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-ranchers text-xl bg-bdi-dark text-bdi-cream px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#1a0a05]"
                >
                    {t("recruitingCta")}
                </a>
            </div>
        </section>
    );
}
