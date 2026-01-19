import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үйлчилгээ - Захиалгат хөгжүүлэлт",
  description: "Вэбсайт болон мобайл апп хөгжүүлэлт. Орчин үеийн технологийн стек. Тогтмол үнэ. Баталгаатай хүргэлт.",
  alternates: {
    canonical: "https://solospark.mn/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            Таны бизнест зориулсан хөгжүүлэлт
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Вэбсайт эсвэл мобайл апп. Хурдан, найдвартай, масштаблаж болох. 
            Тогтмол үнэ. Гэрээнд тодорхой.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Website Development */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Вэбсайт хөгжүүлэлт
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Орчин үеийн, бүх төхөөрөмжид тохирсон вэбсайт. Зочдыг худалдан авагч болгох 
              зорилготой бүтээгдсэн. Next.js, React зэрэг технологи ашиглана.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Бүх төхөөрөмжид тохирсон дизайн
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Google хайлтад орох зорилготой бүтээгдсэн
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Хурдан ачаалах, хэрэглэхэд хялбар
                </span>
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Мобайл апп хөгжүүлэлт
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              iOS болон Android-д ажиллах апп. React Native эсвэл натив технологи ашиглана. 
              App Store болон Google Play дээр байршуулахад туслана.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  iOS болон Android дэмжлэг
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Орчин үеийн технологи
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  App Store байршуулалт
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Бидний ажлын явц
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1</div>
              <div className="mt-2 font-medium text-zinc-900 dark:text-zinc-50">Зөвлөгөө</div>
              <div className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Таны хэрэгцээ, зорилгыг ойлгох. Төсөлд тохирох шийдлийг санал болгох.
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">2</div>
              <div className="mt-2 font-medium text-zinc-900 dark:text-zinc-50">Хөгжүүлэлт</div>
              <div className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Орчин үеийн багаж, сайн практик ашиглан бүтээх. Тогтмол шинэчлэл, тайлбар.
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">3</div>
              <div className="mt-2 font-medium text-zinc-900 dark:text-zinc-50">Эхлүүлэх</div>
              <div className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Бүтээгдэхүүнийг байршуулах, дэмжлэг үзүүлэх. Эхлүүлснээс хойш 90 хоног дэмжлэг.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-10 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:px-8 sm:py-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-2xl">
            Төслөө хөгжүүлэхэд бэлэн үү?
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            15 минутын уулзалт хийцгээе. Ямар ч үүрэг хүлээх шаардлагагүй.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:info@solospark.mn?subject=Хөгжүүлэлт - Зөвлөгөө авах"
              className="inline-block rounded-lg border-2 border-zinc-900 bg-zinc-900 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Зөвлөгөө авах
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
