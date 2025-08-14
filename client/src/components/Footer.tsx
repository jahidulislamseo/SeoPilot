import { Link } from "wouter";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-seo-text-dark text-white py-12" data-testid="main-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4 font-poppins" data-testid="footer-logo">
              Fatema Akter
            </div>
            <p className="text-gray-400" data-testid="footer-description">
              Professional SEO Expert helping businesses achieve sustainable organic growth through data-driven strategies.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-400">
                Email: fatemaakter39@gmail.com
              </p>
              <p className="text-sm text-gray-400">
                Phone: +880 1516089599
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-title">Core Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-technical-seo">
                    Technical SEO
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-onpage-seo">
                    On-Page SEO
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-offpage-seo">
                    Off-Page SEO
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-seo-audits">
                    SEO Audits
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-specialized-title">Specialized Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Local SEO
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Keyword Research & Strategy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Content SEO
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    eCommerce SEO
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Analytics & Reporting
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-resources-title">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/portfolio">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-case-studies">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-seo-blog">
                    SEO Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer" data-testid="footer-link-contact">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Testimonials
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">
            &copy; 2024 All rights reserved by Jahidul Islam.
          </p>
        </div>
      </div>
    </footer>
  );
}
