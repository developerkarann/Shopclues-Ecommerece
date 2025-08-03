import React from 'react'

const MainNavLinks = () => {


    const navLinks = [
    {
      label: 'MOBILES & MORE',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },
    {
      label: 'MEN',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },
    {
      label: 'WOMEN',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },
    {
      label: 'HOME & KITCHEN',
      subtabs: ''
    },
    {
      label: 'APPLIANCES',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },
    {
      label: 'SPORTS & MORE',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },
    {
      label: 'ESSENTIALS',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },
    {
      label: 'OFFERS ',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },
    {
      label: 'GLOBAL SHOPPING',
      subtabs: ['New Arrivals', 'Best Sellers', 'Discounts'],
    },

  ]


    return (
        <>

            <div className="bg-cyan-600 text-white text-xs flex ">
                <div className=" max-w-7xl mx-auto px-4 py-3 flex space-x-5">
                    <div className="relative group">
                        <span className="hover:cursor-pointer">MOBILES & MORE</span>
                        {/* Subtabs  */}
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group">
                        <span className="hover:cursor-pointer">MEN</span>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="hover:cursor-pointer">WOMEN</span>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="hover:cursor-pointer">HOME & KITCHEN</span>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="hover:cursor-pointer">APPLIANCES</span>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="hover:cursor-pointer">SPORTS & MORE</span>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="hover:cursor-pointer">OFFERS</span>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative group">
                        <span className="hover:cursor-pointer">GLOBAL SHOPPING</span>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                            <ul className="py-2">
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 1 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 2 </a></li>
                                <li> <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Sub tab 3 </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainNavLinks