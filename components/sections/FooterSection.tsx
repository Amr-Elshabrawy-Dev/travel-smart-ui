"use client";

import Icon from "../Icon";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Travel Smart UI</h4>
            <p className="text-gray-400 text-sm">
              Revolutionizing travel planning with artificial intelligence
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Destinations</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Europe</li>
              <li>Asia</li>
              <li>America</li>
              <li>Caribbean</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Connect</h5>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Icon name="Instagram" size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Travel Smart UI. Powered by Artificial Intelligence for the
            perfect travel experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
