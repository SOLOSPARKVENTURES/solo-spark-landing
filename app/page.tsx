import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero - Alex Hormozi Style: Believable, Specific, Natural */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            Таны санааг 30 хоногт бүтээгдэхүүн болгоё
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Бид таны MVP-г хурдан, найдвартай, тогтмол үнээр хөгжүүлнэ. 
            Хэрэв цагт хүргэж чадахгүй бол гэрээний нөхцөлөөр буцаан төлнө.
          </p>
          <div className="mt-8">
            <Link
              href="mailto:hello@solospark.mn?subject=MVP хөгжүүлэлт - Зөвлөгөө авах"
              className="inline-block rounded-lg border-2 border-zinc-900 bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Үнэгүй зөвлөгөө авах
            </Link>
          </div>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
            15 минутын уулзалт. Ямар ч үүрэг хүлээх шаардлагагүй.
          </p>
        </div>
      </section>

      {/* What You Get - Specific, Believable Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Бид танд юу өгч чадах вэ
          </h2>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Бүтэн MVP хөгжүүлэлт
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Вэбсайт эсвэл мобайл апп. React, Next.js зэрэг орчин үеийн технологи ашиглана. 
                Бүтээгдэхүүнд шууд ашиглах боломжтой код.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Тодорхой хугацаа
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Гэрээнд тодорхойлсон хугацаанд хүргэнэ. Хэрэв бидний алдаанаас хоцорвол, 
                гэрээний нөхцөлөөр буцаан төлнө.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Тогтмол үнэ
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Эхлээд тогтоосон үнэ. Гэрээнд тодорхойлсон ажлын хамрах хүрээ. 
                Нэмэлт зардал гэнэт гарч ирэхгүй.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Хөрөнгө оруулалтын боломж
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Чанартай, боломжтой стартапуудын хувьд хөрөнгө оруулалтын хэлэлцүүлэг хийх боломжтой. 
                Бид өөрсдөө бүтээсэн зүйлд хөрөнгө оруулах сонирхолтой.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Эхлээд хойш дэмжлэг
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Эхлүүлснээс хойш 90 хоногт алдаа засах, бага өөрчлөлт хийх, 
                техникийн асуултанд хариулах үнэгүй.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Гэрээнд тодорхой
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Бүх зүйл гэрээнд тодорхой бичсэн. Хүргэх хугацаа, үнэ, ажлын хамрах хүрээ, 
                баталгаа - бүгд урьдчилан тохиролцсон.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Realistic Numbers */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">30</div>
              <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Хоног дундаж хугацаа
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">100%</div>
              <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Гэрээнд тодорхой
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">90</div>
              <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Хоног дэмжлэг
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Natural, Conversational */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-10 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:px-8 sm:py-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-2xl">
            Таны санаа бүтээгдэхүүн болох боломжтой
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Эхлэхийн тулд 15 минутын уулзалт хийцгээе. Ямар ч үүрэг хүлээх шаардлагагүй.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:hello@solospark.mn?subject=MVP хөгжүүлэлт - Зөвлөгөө авах"
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
