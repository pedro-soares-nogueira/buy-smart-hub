"use client";
import Link from "next/link";
import { LinkBreak, LinkSimpleHorizontal, Share } from "phosphor-react";

export default function Home() {
    return (
        <main className="bg-gray-950 text-white flex min-h-screen flex-col items-center justify-center p-24 gap-5">
            <h2 className="text-4xl font-semibold">
                Buy Smart Hub - Conte com a gente!
            </h2>
            <Link
                href={"/truque-da-banana"}
                className="flex gap-3 items-center justify-center font-semibold text-xl"
            >
                Truque da banana <LinkSimpleHorizontal size={32} />
            </Link>
        </main>
    );
}
