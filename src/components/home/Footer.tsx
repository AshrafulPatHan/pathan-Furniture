import Image from "next/image";
import Link from "next/link";
import Facebook from "@/assets/icon/facebook.svg"
import yt from "@/assets/icon/youtube.svg"
import wha from "@/assets/icon/whatsapp.svg"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-8 text-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Pathan <span className="text-amber-800">Furniture</span>
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                            A world of style, comfort, and elegance. Dedicated to delivering premium handcrafted furniture tailored to modern homes and customer satisfaction.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a href="" className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-amber-100 hover:text-white flex items-center justify-center text-xs font-semibold transition-colors duration-200">
                                <Image src={Facebook} alt="socel icon" />
                            </a>
                            <a href="" className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-amber-100 hover:text-white flex items-center justify-center text-xs font-semibold transition-colors duration-200">
                                <Image src={yt} alt="socel icon" />
                            </a>
                            <a href="" className="w-9 h-9 rounded-full bg-slate-200/70 hover:bg-amber-100 hover:text-white flex items-center justify-center text-xs font-semibold transition-colors duration-200">
                                <Image src={wha} alt="socel icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col">
                        <h4 className="text-base font-bold text-slate-900 mb-4">About Us</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-amber-800 transition-colors">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-amber-800 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-amber-800 transition-colors">
                                    Frequently Asked Questions
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-amber-800 transition-colors">
                                    News & Articles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service Column */}
                    <div className="flex flex-col">
                        <h4 className="text-base font-bold text-slate-900 mb-4">Customer Support</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/shipping" className="hover:text-amber-800 transition-colors">
                                    Shipping & Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="hover:text-amber-800 transition-colors">
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link href="/warranty" className="hover:text-amber-800 transition-colors">
                                    Warranty Information
                                </Link>
                            </li>
                            <li>
                                <Link href="/care-guide" className="hover:text-amber-800 transition-colors">
                                    Furniture Care Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details Column */}
                    <div className="flex flex-col">
                        <h4 className="text-base font-bold text-slate-900 mb-4">Contact Info</h4>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="font-semibold text-slate-900 shrink-0">Location:</span>
                                <span>Kuripara, Bandar, Narayanganj, Dhaka</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-slate-900 shrink-0">Phone:</span>
                                <a href="tel:+880123456789" className="hover:text-amber-800 transition-colors">
                                    +880 1234-567890
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-semibold text-slate-900 shrink-0">Email:</span>
                                <a href="mailto:info@pathanfurniture.com" className="hover:text-amber-800 transition-colors">
                                    info@pathanfurniture.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-slate-200 my-8" />

                {/* Bottom Rights Reserved */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-4">
                    <p className="text-center sm:text-left">
                        © {currentYear} Ashraful Pathan. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-slate-800 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-slate-800 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}