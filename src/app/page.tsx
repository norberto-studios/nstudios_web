import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
        <header>
            <Nav/>
        </header>

        <main className="bg-gray-600 flex min-h-screen flex-col items-center justify-between p-24">
            <div >
         Norberto Testing
         </div>

        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
