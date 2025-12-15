import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      <main className="flex-1 px-6 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout