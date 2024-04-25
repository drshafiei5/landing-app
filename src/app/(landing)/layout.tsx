import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="landing">
            <Header />
            <main className="main main--landing">
                {children}
            </main>
            <Footer />
        </div>
    );
}
