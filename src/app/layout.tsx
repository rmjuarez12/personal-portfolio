import Header from "@/components/sections/Header";
import GeneralInfo from "@/components/sections/GeneralInfo";
import MainMenu from "@/components/sections/MainMenu";

import "../styles/globals.css";
import { poppins, robotoMono } from "@/utility/fonts";

export const metadata = {
  title: "Richard Rodriguez Portfolio | Software Engineer Showcase",
  description:
    "Experienced Miami-based software engineer dedicated to crafting innovative solutions with expertise in [specific technologies/areas]. Passionate about driving efficiency and excellence in every project.",
  icons: {
    icon: "/static/favicon.ico",
  },
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
            className='flex sm:flex-row flex-col sm:items-start items-center scale-0 opacity-0'
          >
            <div
              id='section-1'
              className={`md:basis-1/5 opacity-0 translate-y-10 p-6 md:sticky top-32 mb-5 ${sharedSectionClasses}`}
            >
              <GeneralInfo />
            </div>

            <div className='flex md:flex-row flex-col-reverse md:basis-4/5 md:items-start sm:items-end items-center'>
              <div
                id='section-2'
                className={`basis-11/12 p-10 md:w-auto w-full ${sharedSectionClasses}`}
              >
                {children}
              </div>
              <div
                id='section-3'
                className={`basis-1/12 opacity-0 translate-y-10 p-4 sticky top-2 mb-5 z-50 ${sharedSectionClasses}`}
              >
                <MainMenu />
              </div>
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
