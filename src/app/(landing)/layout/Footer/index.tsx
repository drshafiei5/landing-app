import Link from "next/link";
import FooterCard from "./FooterCard";

const Footer = () => {
    return (
        <div className="footer">
            <FooterCard title="Fiber">
                <p>
                    With fiber, you can setup your own personal portfolio in
                    minutes with dozens of premade, beautiful templates.
                </p>
                <p>Made with &hearts; in the Netherlands.</p>
            </FooterCard>

            <FooterCard title="Sitemap">
                <Link href="/">Homepage</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Testimonials</Link>
                <Link href="/">Features</Link>
            </FooterCard>
            <FooterCard title="Resources">
                <Link href="/">Support</Link>
                <Link href="/">Contact</Link>
                <Link href="/">FAQ</Link>
            </FooterCard>
            <FooterCard title="Company">
                <Link href="/">About</Link>
                <Link href="/">Customers</Link>
                <Link href="/">Blog</Link>
            </FooterCard>
            <FooterCard title="Portfolios">
                <Link href="/">Name</Link>
                <Link href="/">Name</Link>
                <Link href="/">Name</Link>
            </FooterCard>
        </div>
    );
};

export default Footer;
