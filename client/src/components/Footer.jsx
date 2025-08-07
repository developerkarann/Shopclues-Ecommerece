import { IndianRupee, Shield, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Product', href: '/products' },
    { name: 'Wishlist', href: '/wishlist' },
    { name: 'Cart', href: '/cart' },
    { name: 'Login', href: '/login' }
  ];

  return (
    <>
      <footer className="bg-gray-50 text-gray-700 text-sm">

        <div className="border-b border-gray-200 p-6 grid grid-cols-3 sm:grid-cols-3 text-center gap-4">
          <div className='flex flex-col justify-center items-center'>
            <Shield className="text-blue-400 text-4xl mb-1" />
            <p className="font-medium">Great Selection</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <IndianRupee className="text-blue-400 text-8xl" />
            <p>Low Price</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <ShoppingCart className='text-blue-400 text-4xl mb-1' />
            <p className="font-medium">Speedy Delivery</p>
          </div>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 py-8 border-b border-gray-200">

          <div>
            <h4 className="font-semibold mb-2">Shopper Central</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Easy Returns & Replacement</li>
              <li>Our Policies</li>
              <li>CluesBucks</li>
              <li>Payment Options</li>
              <li>ShopClues Surety</li>
              <li>FAQs (Help)</li>
              <li>Service Centers</li>
              <li>User Agreement</li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-2">Merchant Central</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Merchant Panel</li>
              <li>How To Sell</li>
              <li>Commission Structure</li>
              <li>Fulfillment Policy</li>
              <li>Policies & Rules</li>
              <li>User Agreement</li>
              <li>Testimonials</li>
              <li>Seller Summit</li>
              <li>Merchant Blog</li>
              <li>Developer Resources</li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <ul className="space-y-1 text-gray-600">
              <li>History</li>
              <li>Band of Trust</li>
              <li>In the News</li>
              <li>Awards</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-gray-600">
              {quickLinks.map((item, index) => (
                <li key={index}

                >
                  <Link to={item.href} target='_blank'
                    className="text-gray-600 hover:cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>


        <div className="px-6 py-6 flex flex-col sm:flex-row items-center justify-between">

          <div className="flex space-x-4 text-blue-500 mb-4 sm:mb-0">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-1 text-gray-900 text-sm">
                <span>© 2025 Shopclues.com</span>
              </div>
            </div>
          </div>


          <div className="text-center">
            <p className="font-semibold mb-2">100% Secure and Trusted Payment</p>

          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer