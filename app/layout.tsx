import ClientOnly from './components/ClientOnly'
import Footer from './components/Footer/Footer'
import Subscribe from './components/Subscribe'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import SearchModal from './search/SearchModal'
import { Suspense } from 'react'
import Loading from './loading'
import { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://podcast-proofdig321.vercel.app"),
  title: {
    default: "Unami EcoFusion Podcast Blog",
    template: `%s | Unami EcoFusion Podcast Blog`,
  },
  description: "An ecofriendly podcast blog that promotes sustainability and amplifies podcasts created by underrepresented voices. We highlight podcasts produced by marginalized communities and corporates, featuring a diverse range of perspectives and stories from independant content creators who seeks sponsorships and market access.",
  verification: {
    google: "",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
            <Navbar />
            <SearchModal />
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
            <Subscribe />
            <Footer />
          </ClientOnly>

      </body>
    </html>
  )
}
