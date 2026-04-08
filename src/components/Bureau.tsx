import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { BUREAU_MEMBERS, BureauMember } from "@/data/constants";
import BureauClient from "./BureauClient";
import ObfuscatedLink from "./ObfuscatedLink";

export default async function Bureau() {
    const t = await getTranslations("Index");
    const sectionId = "bureau-section";
    const nametagsId = "nametags-container";

    // Helper to encode strings for obfuscation (Server-side)
    const encode = (str: string) => Buffer.from(str).toString("base64");

    return (
        <section
            id={sectionId}
            className="py-20 px-5 max-w-300 mx-auto text-center"
        >
            <BureauClient sectionId={sectionId} nametagsId={nametagsId} />
            <h2 className="font-ranchers text-[clamp(2rem,5vw,3.5rem)] mb-2 relative inline-block w-full">
                {t("bureauTitle")}
            </h2>
            <div className="wavy-underline" />
            <div className="font-ranchers text-xl text-[#888] my-10">
                {t("bureauSub")}
            </div>

            <div className="flex flex-col gap-5 md:gap-6">
                {/* First row: 4 members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {BUREAU_MEMBERS.slice(0, 4).map((m: BureauMember, i) => (
                        <div key={i} className="relative w-full flex nametag">
                            <div className="relative flex flex-col w-full rounded-xl overflow-hidden shadow-md border border-black/5 bg-white">
                                {/* Header */}
                                <div className="bg-bdi-red text-white text-center py-3.5 px-3 font-mono text-xs md:text-sm uppercase font-bold flex-none">
                                    {m.role}
                                </div>
                                {m.photo && (
                                    <div className="relative w-full aspect-3/4 overflow-hidden">
                                        <Image
                                            src={m.photo}
                                            alt={m.name}
                                            fill
                                            loading="eager"
                                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 300px"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                )}
                                <div className="text-center py-5 px-4 flex flex-col items-center justify-center flex-1 gap-2">
                                    <div className="font-ranchers text-3xl md:text-4xl text-bdi-dark leading-tight wrap-break-word w-full">
                                        {m.name}
                                    </div>
                                    {(m.email || m.phone) && (
                                        <div className="flex flex-col gap-1 text-xs text-[#777]">
                                            {m.email && (
                                                <ObfuscatedLink
                                                    encoded={encode(m.email)}
                                                    type="email"
                                                    className="hover:text-bdi-red transition-colors break-all font-mono"
                                                />
                                            )}
                                            {m.phone && (
                                                <ObfuscatedLink
                                                    encoded={encode(m.phone)}
                                                    type="tel"
                                                    className="hover:text-bdi-red transition-colors"
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second row: 5 members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
                    {BUREAU_MEMBERS.slice(4).map((m: BureauMember, i) => (
                        <div
                            key={i + 4}
                            className="relative w-full flex nametag"
                        >
                            <div className="relative flex flex-col w-full rounded-xl overflow-hidden shadow-md border border-black/5 bg-white">
                                {/* Header */}
                                <div className="bg-bdi-red text-white text-center py-3.5 px-3 font-mono text-xs md:text-sm uppercase font-bold flex-none">
                                    {m.role}
                                </div>
                                {m.photo && (
                                    <div className="relative w-full aspect-3/4 overflow-hidden">
                                        <Image
                                            src={m.photo}
                                            alt={m.name}
                                            fill
                                            loading="eager"
                                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 240px"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                )}
                                <div className="text-center py-5 px-4 flex flex-col items-center justify-center flex-1 gap-2">
                                    <div className="font-ranchers text-3xl md:text-4xl text-bdi-dark leading-tight wrap-break-word w-full">
                                        {m.name}
                                    </div>
                                    {(m.email || m.phone) && (
                                        <div className="flex flex-col gap-1 text-xs text-[#777]">
                                            {m.email && (
                                                <ObfuscatedLink
                                                    encoded={encode(m.email)}
                                                    type="email"
                                                    className="hover:text-bdi-red transition-colors break-all font-mono"
                                                />
                                            )}
                                            {m.phone && (
                                                <ObfuscatedLink
                                                    encoded={encode(m.phone)}
                                                    type="tel"
                                                    className="hover:text-bdi-red transition-colors"
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
