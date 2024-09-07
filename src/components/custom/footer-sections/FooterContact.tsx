import Link from "next/link"


function FooterContact() {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
                <li>
                    <Link href="mailto:oly.ice.pust@gmail.com" className="hover:text-gray-400 transition-colors">
                        oly.ice.pust@gmail.com
                    </Link>
                </li>
                <li>
                    <p>Dhaka, Bangladesh</p>
                </li>
            </ul>
        </div>
    )
}

export default FooterContact