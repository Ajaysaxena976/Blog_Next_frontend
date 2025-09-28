"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Email:</span> info@jstemplate.net
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Phone:</span> 880 123 456 789
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/archived">Archived</Link></li>
            <li><Link href="/author">Author</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img src="/Logo.svg" alt="Logo" />
            <div className="flex flex-col">
              <p className="font-semibold">MetaBlog</p>
              <p>© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>

          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
