import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-white/10 bg-white/5 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-cyan-100">
                        HK
                    </div>
                    <div className="text-left leading-tight">
                        <Link href="/">
                            <p className="text-lg font-semibold">Social Media Clone</p>
                        </Link>
                    </div>
                </div>
                <nav className="flex items-center gap-3 text-sm text-white/85">
                    <Link href="/profile" className="rounded-md px-3 py-1 transition hover:bg-white/10 hover:text-white">
                        Profiles
                    </Link>
                </nav>
            </div>
        </header>
    );
}

