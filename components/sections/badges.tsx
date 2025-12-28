"use client"

import Image from "next/image"
import badges from "@/data/badges.json"

export function BadgesSection() {
    return (
        <section id="badges" className="py-20 px-4">
            <div className="max-w-4xl mx-auto w-full text-center">
                <h2 className="text-3xl font-bold mb-8">Digital Badges</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {badges.map((badge, index) => (
                        <a
                            key={index}
                            href={badge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative transition-transform duration-500 hover:scale-110"
                        >
                            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] flex items-center justify-center">
                                <Image
                                    src={badge.image}
                                    alt={badge.title}
                                    fill
                                    sizes="(max-width: 768px) 140px, 180px"
                                    className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:rotate-3"
                                    priority={index < 4}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
