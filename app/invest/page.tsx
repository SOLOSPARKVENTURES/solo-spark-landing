import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хөрөнгө оруулалт - Стартап хөрөнгө оруулалт",
  description: "Стартапуудад хөрөнгө оруулалт. Хурдан шийдвэр. Техникийн мэргэжил. Үүсгэн байгуулагчдад ээлтэй нөхцөл.",
  alternates: {
    canonical: "https://solospark.mn/invest",
  },
};

export default function InvestPage() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            Стартапуудад хөрөнгө оруулалт
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Бид эрт үеийн стартапуудад хөрөнгө оруулдаг. Хөрөнгө + мэргэжил. 
            Хурдан шийдвэр. Үүсгэн байгуулагчдад ээлтэй нөхцөл.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Бидний давуу тал
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Хурдан шийдвэр
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Ямар ч албан ёсны хэлэлцүүлэг байхгүй. Таны санал болгосон зүйлийг хурдан шалгаж, 
                хэрэв сонирхолтой бол хэдхэн хоногт шийдвэр гаргана.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Техникийн мэргэжил
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Бид зөвхөн хөрөнгө оруулагч биш - бүтээгчид. Техникийн зөвлөгөө, хөгжүүлэлтийн 
                дэмжлэг, бүтээгдэхүүний стратеги авах боломжтой.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Ээлтэй нөхцөл
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Шударга үнэлгээ. Стандарт нөхцөл. Ямар ч хор хөнөөлтэй заалт байхгүй. 
                Та ялбал бид ч ялна.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Бид юу хайж байна
          </h2>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Техникийн эсвэл салбарын мэргэжилтэй хүчирхэг үүсгэн байгуулагчдын баг
              </span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Тодорхой асуудал-шийдлийн тохиролцоо
              </span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Том зах зээлд хүрэх боломж
              </span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Эрт татагдал эсвэл хурдан өсөлтийн хүчтэй боломж
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-10 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:px-8 sm:py-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-2xl">
            Санал болгох бэлэн үү?
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Таны pitch deck-ийг илгээнэ үү. Бид бүх санал болгосон зүйлийг шалгана.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:info@solospark.mn?subject=Стартап санал - Pitch Deck"
              className="inline-block rounded-lg border-2 border-zinc-900 bg-zinc-900 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Санал илгээх
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
