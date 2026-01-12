import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
                aria-label="Гол цэс"
            >
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-xl font-semibold text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300 font-[family-name:var(--font-logo)]"
                    >
                        Solo Spark Ventures
                    </Link>
                </div>
                <div className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/services"
                        className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                    >
                        Үйлчилгээ
                    </Link>
                    <Link
                        href="/invest"
                        className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                    >
                        Хөрөнгө оруулалт
                    </Link>
                    <Link
                        href="/hackathons"
                        className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
                    >
                        Хаккатон
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="mailto:hello@solospark.mn"
                        className="hidden rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:inline-block"
                    >
                        Холбогдох
                    </Link>
                </div>
            </nav>
        </header>
    );
}
