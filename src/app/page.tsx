import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#18181b] dark:to-[#232326] font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 sm:px-16">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="App logo" width={40} height={40} />
          <span className="text-2xl font-bold tracking-tight">FitConnect</span>
        </div>
        <a
          href="#download"
          className="rounded-full bg-foreground text-background px-5 py-2 font-medium text-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Baixar App
        </a>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Conecte-se ao seu melhor eu com o{" "}
          <span className="text-blue-600 dark:text-blue-400">FitConnect</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
          Seu aplicativo para treinos, saúde e bem-estar. Descubra planos
          personalizados, acompanhe seu progresso e faça parte de uma comunidade
          fitness.
        </p>
        <a
          href="#download"
          className="inline-block rounded-full bg-blue-600 text-white px-8 py-3 font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Comece agora
        </a>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="flex flex-col items-center max-w-xs">
            <Image
              src="/file.svg"
              alt="Planos"
              width={40}
              height={40}
              className="dark:invert"
            />
            <h3 className="font-semibold text-lg mt-3 mb-1">
              Planos Personalizados
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Treinos e dietas feitos para você, de acordo com seus objetivos.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <Image
              src="/window.svg"
              alt="Comunidade"
              width={40}
              height={40}
              className="dark:invert"
            />
            <h3 className="font-semibold text-lg mt-3 mb-1">Comunidade Ativa</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Participe de desafios, compartilhe conquistas e motive-se com outros
              usuários.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <Image
              src="/globe.svg"
              alt="Acompanhamento"
              width={40}
              height={40}
              className="dark:invert"
            />
            <h3 className="font-semibold text-lg mt-3 mb-1">
              Acompanhamento Completo
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Monitore seu progresso com gráficos, metas e lembretes inteligentes.
            </p>
          </div>
        </div>
      </main>

      {/* Download Section */}
      <section
        id="download"
        className="flex flex-col items-center py-10 bg-blue-50 dark:bg-[#232346]"
      >
        <h2 className="text-2xl font-bold mb-2">Baixe o FitConnect</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Disponível para Android e iOS
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-black text-white rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="inline"
            >
              <rect width="20" height="20" rx="4" />
            </svg>
            Google Play
          </a>
          <a
            href="#"
            className="bg-white border border-gray-300 text-black rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="inline"
            >
              <circle cx="10" cy="10" r="10" />
            </svg>
            App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center py-6 text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800 mt-auto">
        © {new Date().getFullYear()} FitConnect. Todos os direitos reservados.
      </footer>
    </div>
  );
}
