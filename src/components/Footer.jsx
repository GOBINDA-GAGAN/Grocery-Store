import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaShippingFast, FaUndoAlt, FaLock, FaGift, FaHeadset } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export default function Footer() {
const services = [
  { icon: <FaShippingFast className="text-2xl text-primary" />, title: "Free Shipping", desc: "For all Orders Over ₹5000" },
  { icon: <FaUndoAlt className="text-2xl text-primary" />, title: "30 Days Returns", desc: "For an Exchange Product" },
  { icon: <FaLock className="text-2xl text-primary" />, title: "Secured Payment", desc: "UPI / Cards Accepted" },
  { icon: <FaGift className="text-2xl text-primary" />, title: "Special Gifts", desc: "Our First Product Order" },
  { icon: <FaHeadset className="text-2xl text-primary" />, title: "Support 24/7", desc: "Contact us Anytime" },
];

  const products = ["Prices drop", "New products", "Best sales", "Contact us", "Stores"];
  const company = ["Delivery", "Legal Notice", "Terms & Conditions", "About us", "Secure payment", "Login"];

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      {/* Top Service Section */}
     <div className="max-w-7xl mx-auto px-6 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-center">
      {services.map((item, i) => (
        <div key={i} className="flex flex-col items-center space-y-2">
          {item.icon}
          <div className="font-semibold">{item.title}</div>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>

      <div className="border-t border-gray-300"></div>

      {/* Middle Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">
        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact us</h3>
          <p>Classyshop - Mega Super Store</p>
          <p>507-Union Trade Centre, India</p>
          <p className="mt-2">sales@yourcompany.com</p>
          <p className="text-primary font-bold flex items-center gap-2 mt-2">
            <FaPhoneAlt /> (+91) 98765-43210
          </p>
          <p className="flex items-center gap-2 mt-2 text-primary cursor-pointer">
            <FiMessageSquare /> Online Chat - Get Expert Help
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            {products.map((p, i) => (
              <li key={i} className="hover:text-primary cursor-pointer">{p}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Our company</h3>
          <ul className="space-y-2 text-sm">
            {company.map((c, i) => (
              <li key={i} className="hover:text-primary cursor-pointer">{c}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe to newsletter</h3>
          <p className="text-sm text-gray-500 mb-3">Get latest news & special discounts</p>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-2 border rounded mb-3 focus:ring focus:ring-blue-300"
          />
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600 w-full">
            SUBSCRIBE
          </button>
          <div className="flex items-center mt-2 text-xs">
            <input type="checkbox" className="mr-2" />
            <span>I agree to terms & privacy policy</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2024 - Ecommerce Template</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
          <FaPinterestP className="cursor-pointer hover:text-red-600" />
          <FaYoutube className="cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </footer>
  );
}
