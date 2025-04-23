import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero sekce */}
      <section className="w-full px-4 py-12 md:py-24 lg:px-8 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Vytváříme <span className="text-amber-500">moderní weby</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Na míru vašim potřebám s důrazem na rychlost a design.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition">
              Kontaktujte nás
            </button>
          </div>
          <div className="flex-1">
            <Image
              src="/hero-image.webp"  // Nahraď skutečným obrázkem ve formátu WebP
              alt="Hero Image"
              width={600}
              height={400}
              priority
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Ostatní sekce... */}
    </main>
  );
}
