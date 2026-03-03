'use client';
import { useState } from 'react';
 import Image from'next/image';
 import Link from'next/link';
 import Button from'../ui/Button';
 import SearchView from'../ui/SearchView';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const topBarLinks = [
    { text: "Become a Vendor", href: "/vendor" },
    { text: "Team", href: "/team" },
    { text: "Start Your Petoty Franchise", href: "/franchise" }
  ]

  const utilityLinks = [
    { 
      text: "Track Order", 
      href: "/track", 
      icon: "/images/img_layer_1.png" 
    },
    { 
      text: "Help Center", 
      href: "/help", 
      icon: "/images/img_layer_1_white_a700.png" 
    },
    { 
      text: "Blog", 
      href: "/blog", 
      icon: "/images/img_carbon_blog.png" 
    }
  ]

  const navigationItems = [
    "DOGS", "CATS", "BIRDS", "FISHES", "BRANDS", 
    "SHOP BY BREED", "SERVICES", "PAWSCRIPTION", 
    "PAWSURANCE", "COMMUNITY"
  ]

  return (
    <header className="w-full bg-header-background">
      {/* Top Bar */}
      <div className="w-full bg-primary-dark">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center py-2">
            {/* Left Section - Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-7">
              <div className="flex flex-wrap items-center gap-4 lg:gap-5">
                {topBarLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <Link 
                      href={link.href}
                      className="text-xl font-medium text-primary-foreground hover:opacity-80 transition-opacity"
                    >
                      {link.text}
                    </Link>
                    {index < topBarLinks.length - 1 && (
                      <span className="text-xl font-light text-primary-foreground hidden sm:block">
                        |
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Utility Links & Currency */}
            <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-2 lg:mt-0">
              {utilityLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-xl font-medium text-primary-foreground hover:opacity-80 transition-opacity"
                >
                  <Image 
                    src={link.icon} 
                    alt={link.text} 
                    width={20} 
                    height={20}
                    className="w-4 h-4 lg:w-5 lg:h-5"
                  />
                  {link.text}
                </Link>
              ))}
              
              {/* Currency Selector */}
              <div className="flex items-center gap-2 ml-2 lg:ml-4">
                <Image 
                  src="/images/img_twemoji_flag_india.png" 
                  alt="India Flag" 
                  width={18} 
                  height={18}
                  className="w-4 h-4 lg:w-[18px] lg:h-[18px]"
                />
                <span className="text-xl font-medium text-primary-foreground">INR</span>
                <div className="relative">
                  <span className="text-lg font-semibold text-primary-foreground">( )</span>
                  <Image 
                    src="/images/img_vector.svg" 
                    alt="Dropdown" 
                    width={6} 
                    height={8}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[6px] h-2"
                  />
                </div>
                <Image 
                  src="/images/img_formkit_down.svg" 
                  alt="Dropdown Arrow" 
                  width={8} 
                  height={3}
                  className="w-2 h-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo Overlay */}
        <div className="relative">
          <div className="absolute left-1/2 top-[-34px] transform -translate-x-1/2 z-10">
            <Image 
              src="/images/img_frame_427321168.png" 
              alt="Petoty Logo" 
              width={130} 
              height={38}
              className="w-20 h-6 sm:w-24 sm:h-7 lg:w-[130px] lg:h-[38px]"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full border-t border-border-dark">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-6 lg:py-9 gap-5">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image 
                src="/images/img_image_3.png" 
                alt="Petoty Main Logo" 
                width={170} 
                height={86}
                className="w-32 h-16 sm:w-40 sm:h-20 lg:w-[170px] lg:h-[86px]"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 flex justify-center px-4">
  <div className="w-full max-w-3xl">
    <SearchView
      placeholder="Search for anything"
      rightImage={{
        src: "/images/img_search.png",
        width: 18,
        height: 18
      }}
      containerClassName="w-full"
      className="w-full h-[48px] rounded-full border border-gray-200 bg-white shadow-sm text-sm pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-background"
    />
  </div>
</div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 lg:gap-6">

{/* Wishlist Button */}
<button className="w-14 h-14 lg:w-16 lg:h-16 bg-secondary-background border border-border-muted rounded-md shadow-[0px_4px_4px_#00000019] flex items-center justify-center hover:bg-secondary-light transition-colors">
<Image 
  src="/images/img_frame_427321158.png" 
  alt="Wishlist" 
  width={42} 
  height={42}
  className="w-11 h-11 lg:w-11 lg:h-11 object-contain scale-125"
 />
</button>

{/* Profile Button */}
<button className="w-14 h-14 lg:w-16 lg:h-16 bg-secondary-background border border-border-muted rounded-md shadow-[0px_4px_4px_#00000019] flex items-center justify-center hover:bg-secondary-light transition-colors">
  <Image 
    src="/images/img_frame_427321159.png" 
    alt="Profile" 
    width={44} 
    height={44}
    className="w-11 h-11 lg:w-11 lg:h-11 object-contain scale-125"
  />
</button>

{/* Cart Button */}
<button className="flex items-center gap-2 bg-accent-background px-4 py-3 lg:px-5 lg:py-4 rounded-md shadow-[0px_4px_4px_#00000019] hover:opacity-90 transition-opacity">
  <Image 
    src="/images/img_shopping_bag.png" 
    alt="Shopping Cart" 
    width={26} 
    height={26}
    className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
  />
  <span className="text-lg lg:text-xl font-semibold text-primary-foreground">
    Cart
  </span>
</button>

</div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="w-full border-t border-border-dark bg-secondary-background">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-full py-4 flex items-center justify-between text-lg font-semibold text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span>Menu</span>
            <span className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {/* Desktop Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-[60px] py-4 lg:py-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg font-semibold text-text-primary hover:text-primary-background transition-colors py-2 lg:py-0 border-b border-transparent hover:border-primary-background"
                  role="menuitem"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header