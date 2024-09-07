import Link from "next/link"


function FooterQuickLinks() {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
                <li>
                    <Link href="/about" className="hover:text-gray-400 transition-colors">About Me</Link>
                </li>
                <li>
                    <Link href="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
                </li>
                <li>
                    <Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterQuickLinks