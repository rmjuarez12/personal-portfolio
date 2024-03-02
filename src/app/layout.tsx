import Header from "@/components/sections/Header";
import GeneralInfo from "@/components/sections/GeneralInfo";
import MainMenu from "@/components/sections/MainMenu";

import "../styles/globals.css";
import { poppins, robotoMono } from "@/utility/fonts";

export const metadata = {
  title: "Richard Rodriguez",
  description: "Portfolio for Richard Rodriguez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Helper for section classes
  const sharedSectionClasses = "mx-2 rounded-lg bg-slate-950 text-white";

  return (
    <html lang='en' className={`${robotoMono.variable} ${poppins.variable}`}>
      <body
        className='md:container md:mx-auto px-5 py-5 bg-cover bg-fixed'
        style={{ backgroundImage: "url(/static/images/body-bg.jpg)" }}
      >
        <Header />

        <main className='mt-40'>
          <div
            id='main-section'
            className='flex flex-row items-start scale-0 opacity-0'
          >
            <div
              id='section-1'
              className={`basis-1/5 opacity-0 translate-y-10 md:p-6 md:sticky top-32 ${sharedSectionClasses}`}
            >
              <GeneralInfo />
            </div>
            <div
              id='section-2'
              className={`basis-3/4 md:p-10 ${sharedSectionClasses}`}
            >
              {children}
            </div>
            <div
              id='section-3'
              className={` basis-1/12 opacity-0 translate-y-10 p-4 md:sticky top-2 ${sharedSectionClasses}`}
            >
              <MainMenu />
            </div>
          </div>
        </main>

        <footer>
          <h1>footer</h1>
        </footer>
      </body>
    </html>
  );
}
