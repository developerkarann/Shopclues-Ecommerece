import { IndianRupee, Shield, ShoppingCart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-50 text-gray-700 text-sm">

        <div class="border-b border-gray-200 p-6 grid grid-cols-3 sm:grid-cols-3 text-center gap-4">
          <div className='flex flex-col justify-center items-center'>
           <Shield class="text-blue-400 text-4xl mb-1"/>
            <p class="font-medium">Great Selection</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <IndianRupee  class="text-blue-400 text-8xl"/>
            <p>Low Price</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <ShoppingCart className='text-blue-400 text-4xl mb-1'/>
            <p class="font-medium">Speedy Delivery</p>
          </div>
        </div>


        <div class="grid grid-cols-2 sm:grid-cols-5 gap-6 px-6 py-8 border-b border-gray-200">

          <div>
            <h4 class="font-semibold mb-2">Shopper Central</h4>
            <ul class="space-y-1 text-gray-600">
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
            <h4 class="font-semibold mb-2">Merchant Central</h4>
            <ul class="space-y-1 text-gray-600">
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
            <h4 class="font-semibold mb-2">About Us</h4>
            <ul class="space-y-1 text-gray-600">
              <li>History</li>
              <li>Band of Trust</li>
              <li>In the News</li>
              <li>Awards</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>


          <div>
            <h4 class="font-semibold mb-2">Contact Us</h4>
            <ul class="space-y-1 text-gray-600">
              <li>Merchant Support</li>
              <li>Bulk Orders</li>
              <li>Press</li>
            </ul>
          </div>


          <div>
            <h4 class="font-semibold mb-2">Press</h4>
            <ul class="space-y-1 text-gray-600">
              <li>In the News</li>
            </ul>
          </div>
        </div>


        <div class="px-6 py-6 flex flex-col sm:flex-row items-center justify-between">

          <div class="flex space-x-4 text-blue-500 mb-4 sm:mb-0">
            {/* <a href="#"><i class="fab fa-facebook-f">F</i></a>
            <a href="#"><i class="fab fa-pinterest">P</i></a>
            <a href="#"><i class="fab fa-twitter">T</i></a>
            <a href="#"><i class="fab fa-google-plus-g">G+</i></a>
            <a href="#"><i class="fab fa-youtube">YT</i></a>
            <a href="#"><i class="fab fa-linkedin-in">in</i></a> */}
          </div>


          <div class="text-center">
            <p class="font-semibold mb-2">100% Secure and Trusted Payment</p>
            {/* <div class="flex flex-wrap justify-center gap-2">
              <img src="https://via.placeholder.com/60x20?text=Visa" alt="Visa" />
              <img src="https://via.placeholder.com/60x20?text=MasterCard" alt="MasterCard" />
              <img src="https://via.placeholder.com/60x20?text=RuPay" alt="RuPay" />
              <img src="https://via.placeholder.com/60x20?text=Amex" alt="Amex" />
              <img src="https://via.placeholder.com/60x20?text=EMI" alt="EMI" />
            </div> */}
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer