import Footer from "../components/Footer"
import Header from "../components/Header"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {  
    return (
      <main className="grow">
  <Header/>
        {children}
  <Footer />
      </main>
    )
  }