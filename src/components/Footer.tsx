import { getTranslations } from "next-intl/server";
import { WELCOME_TEXTS } from "@/data/constants";
import FooterClient from "./FooterClient";

export default async function Footer() {
    const t = await getTranslations("Index");

    return (
        <footer
            id="footer"
            className="bg-bdi-dark text-bdi-cream py-15 px-5 text-center overflow-hidden relative"
        >
            <FooterClient />
            <h2 className="font-ranchers text-[clamp(2rem,5vw,3rem)] mb-5">
                {t("footerTitle")}
            </h2>
            <p className="mb-6 font-ranchers text-[1.2rem] opacity-80">
                {t("footerSub")}
            </p>

            <div className="flex gap-5 justify-center mb-5 flex-wrap">
                <a
                    href="https://www.instagram.com/bdi.telecomparis/"
                    target="_blank"
                    className="inline-block bg-bdi-red text-white px-9 py-4 rounded-[50px] font-bold text-lg animate-[pulse_2s_infinite] transition-transform duration-300 hover:scale-110 no-underline"
                >
                    📸 @bdi.telecomparis
                </a>
            </div>

            <p className="font-mono text-[0.7rem] opacity-40 mt-7.5">
                made with ❤️ by the BDI family —{" "}
                <span className="text-shimmer text-[0.8rem] inline-block font-bold">
                    Bureau Des Internationaux
                </span>
            </p>

            <div className="welcome-marquee mt-10">
                <div className="welcome-marquee-inner">
                    {WELCOME_TEXTS.repeat(8)}
                </div>
            </div>
        </footer>
    );
}
