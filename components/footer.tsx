import Link from "next/link"

export default function Footer() {
    return (
        <footer className=" bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="flex items-center shadow-2xl mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                        </Link>
                        <p className=" text-sm">
                            Connecting students at Kenule Benson Saro-Wiwa Polytechnic for better academic collaboration and
                            networking.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className=" hover:text-purple-600 transition-colors text-sm">Home</Link></li>
                            <li><Link href="/creators" className=" hover:text-purple-600 transition-colors text-sm">Creators</Link></li>
                            <li><Link href="/directory" className=" hover:text-purple-600 transition-colors text-sm">Directory</Link></li>
                            <li><Link href="/about" className=" hover:text-purple-600 transition-colors text-sm">About</Link></li>
                            <li><Link href="/pricing" className=" hover:text-purple-600 transition-colors text-sm">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className=" hover:text-purple-600 transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/privacy" className=" hover:text-purple-600 transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/contact" className=" hover:text-purple-600 transition-colors text-sm">Contact Us</Link></li>
                            <li><Link href="/donate" className=" hover:text-purple-600 transition-colors text-sm">Make a Donation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <address className=" text-sm not-italic">
                            Kenule Benson Saro-Wiwa Polytechnic<br />
                            Bori, Rivers State, Nigeria<br />
                            <a href="mailto:info@polytechnic.edu.ng" className="hover:text-purple-600 transition-colors">info@polytechnic.edu.ng</a>
                        </address>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center  text-sm">
                    <p>©2024 Kenule Benson Saro-Wiwa Polytechnic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}