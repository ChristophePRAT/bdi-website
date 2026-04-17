import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhotoWall from "@/components/PhotoWall";
import About from "@/components/About";
import Missions from "@/components/Missions";
import Bureau from "@/components/Bureau";
import Events from "@/components/Events";
import Recruiting from "@/components/Recruiting";
import School from "@/components/School";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default async function IndexPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main>
            <Navbar />

            <Hero />
            <Divider text="🌍 🇫🇷 🇧🇷 🇩🇪 🇪🇸 🇨🇳 🇸🇦 🇮🇹 🇯🇵 🇰🇷 🇲🇦 🇬🇧 🌍" />

            <Recruiting />

            <PhotoWall />

            <About />
            <Divider text="✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨" />

            <Missions />
            <Divider text="✈️ 🗺️ 🎉 🍕 🎶 🌶️ 🥐 🧆 🫕 🍣 🎊 ✈️" />

            <Bureau />
            <Divider text="🪄 🪄 🪄 🪄 🪄 🪄 🪄 🪄 🪄 🪄 🪄 🪄" />

            <Events />
            <Divider text="🎓 📚 💻 🔬 🌐 📡 🤖 🧠 🎓" />

            <School />

            <Footer />
        </main>
    );
}
