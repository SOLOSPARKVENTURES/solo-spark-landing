import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хаккатон - Бүтээж, өрсөлдөж, ял",
  description: "Хаккатон зохион байгуулалт. Бодит бүтээгдэхүүн бүтээх. Дээд түвшний авьяастнуудтай холбогдох. 48 цагт санаагаа бодит болгох.",
  alternates: {
    canonical: "https://solospark.mn/hackathons",
  },
};

export default function HackathonsPage() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            Бүтээж, өрсөлдөж, ял
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Манай хаккатонд оролцоорой. Бодит бүтээгдэхүүн бүтээх. Дээд түвшний авьяастнуудтай холбогдох. 
            48 цагт санаагаа бодит болгох.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Яагаад манай хаккатонд оролцох вэ
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Багийн гишүүд олох
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Дээд түвшний хөгжүүлэгч, дизайнер, бүтээгдэхүүний бүтээгч нарыг үйл ажиллагаанд нь харах. 
                Тэд асуудлыг хэрхэн шийдэж, дарамт дор ажиллаж, үр дүн гаргаж байгааг ажиглах.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Бодит бүтээгдэхүүн
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Чухал зүйл бүтээх. Манай хаккатонууд бодит асуудлыг бодит шийдлээр шийдэхэд анхаардаг. 
                Манай арга хэмжээнээс олон төсөл бодит бүтээгдэхүүн, бүр компани болсон.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <svg className="h-6 w-6 text-zinc-900 dark:text-zinc-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Хурдан суралцах
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                48 цагт энгийн ажлаас олон сар суралцах. Шинэ технологи, өөр багийн бүтэц, 
                хатуу хугацаатай ажиллах. Энд ур чадварыг шалгаж, нотолж байна.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Хэрхэн ажилладаг вэ
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                1
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Бүртгүүлэх</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Хувь хүн эсвэл багаар бүртгүүлэх. Бүх түвшний ур чадвар хүлээн авах.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                2
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Бүтээх</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Шийдлээ бүтээх, турших, танилцуулах 48 цаг.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                3
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Танилцуулах</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Шүүгчдэд болон нийгэмд бүтээгдэхүүнээ танилцуулах.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 font-semibold text-white dark:bg-zinc-50 dark:text-zinc-900">
                4
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Ялах ба холбогдох</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Ялагчид шагнал авна. Бүх хүн холбоо, боломж авах.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Та юу авах вэ
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">₮10 сая+</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Арга хэмжээ бүрт шагнал
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">100+</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Арга хэмжээ бүрт оролцогч
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">48</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Цаг гайхалтай зүйл бүтээхэд
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">∞</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Сүлжээлэх боломжууд
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-10 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:px-8 sm:py-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 sm:text-2xl">
            Бүтээхэд бэлэн үү?
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Дараагийн хаккатонд оролцоорой. Бүртгэл удахгүй нээгдэнэ.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:info@solospark.mn?subject=Хаккатон - Мэдээлэл авах"
              className="inline-block rounded-lg border-2 border-zinc-900 bg-zinc-900 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Мэдээлэл авах
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
