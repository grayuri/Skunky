import Navbar from "@/components/Navbar/Navbar";
import TransitionContextProvider from "@/context/TransitionContext";

export const metadata = {
  title: 'Skunky | Home',
  description: 'An amazing store of musical products to make your day more happy with synphonies and melodies made by incredible albums.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <TransitionContextProvider>
          <Navbar />
          {children}
        </TransitionContextProvider>
      </body>
    </html>
  )
}
