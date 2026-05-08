import { getTranslations } from "next-intl/server";

export default async function InternationalVillage() {
    const t = await getTranslations("Index");

    const activities = [
        t("villageActivity1"),
        t("villageActivity2"),
        t("villageActivity3"),
        t("villageActivity4"),
        t("villageActivity5"),
        t("villageActivity6"),
    ];

    return (
        <section
            id="international-village"
            className="px-5 py-16 bg-linear-to-br from-bdi-dark via-[#3A2050] to-bdi-blue text-bdi-cream"
        >
            <div className="max-w-300 mx-auto rounded-[32px] border-2 border-dashed border-bdi-yellow bg-[rgba(255,248,240,0.08)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-10">
                <p className="font-ranchers text-[clamp(1.2rem,2.5vw,1.6rem)] text-bdi-yellow mb-2">
                    {t("villageTag")}
                </p>
                <h2 className="font-ranchers text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] mb-4">
                    {t("villageTitle")}
                </h2>
                <p className="text-[clamp(1rem,2.1vw,1.25rem)] opacity-95 max-w-200 mb-8 leading-relaxed">
                    {t("villageIntro")}
                </p>

                <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
                    <div className="rounded-[24px] bg-[rgba(255,248,240,0.12)] border border-[rgba(255,248,240,0.3)] p-5 md:p-6">
                        <div className="grid gap-3 text-[1.05rem]">
                            <p className="font-bold text-bdi-yellow">
                                {t("villageDate")}
                            </p>
                            <p className="font-bold text-bdi-yellow">
                                {t("villageTime")}
                            </p>
                            <p className="font-bold text-bdi-yellow">
                                {t("villagePlace")}
                            </p>
                        </div>

                        <p className="mt-5 text-[1.05rem]">
                            {t("villageMiss")}
                        </p>

                        <p className="mt-5 text-sm opacity-90 leading-relaxed">
                            {t("villageRegistration")}
                        </p>

                        <a
                            href="https://bde.telecom-paris.fr/shop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-5 font-ranchers text-lg bg-bdi-yellow text-bdi-dark px-7 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            {t("villageRegisterCta")}
                        </a>

                        <p className="mt-5 text-sm opacity-90 leading-relaxed">
                            {t("villageInvite")}
                        </p>
                    </div>

                    <div className="rounded-[24px] bg-[rgba(255,248,240,0.12)] border border-[rgba(255,248,240,0.3)] p-5 md:p-6">
                        <h3 className="font-ranchers text-[clamp(1.7rem,3vw,2.2rem)] mb-3 text-bdi-yellow">
                            {t("villageHighlightsTitle")}
                        </h3>
                        <p className="opacity-90 mb-4">
                            {t("villageHighlightsIntro")}
                        </p>
                        <ul className="space-y-2">
                            {activities.map((activity) => (
                                <li
                                    key={activity}
                                    className="rounded-xl bg-[rgba(255,248,240,0.12)] px-3 py-2"
                                >
                                    {activity}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-semibold text-bdi-yellow">
                            {t("villageSurprise")}
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-center font-ranchers text-[clamp(1.3rem,3vw,2rem)]">
                    {t("villageClosing")}
                </p>
                <p className="text-center mt-2 opacity-90">
                    {t("villageSignature")}
                </p>
            </div>
        </section>
    );
}
