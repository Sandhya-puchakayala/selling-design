'use client';
import { useState, useEffect } from 'react';
 import Image from'next/image';
 import Link from'next/link';
 import Header from'../../components/common/Header';
 import Button from'../../components/ui/Button';
 import EditText from'../../components/ui/EditText';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SellerCategory {
  id: number;
  title: string;
}

interface Statistic {
  id: number;
  value: string;
  label: string;
}

interface CategoryItem {
  id: number;
  name: string;
}

export default function SellerLandingPage() {
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([])
  const [sellerCategories, setSellerCategories] = useState<SellerCategory[]>([])
  const [statistics, setStatistics] = useState<Statistic[]>([])
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([])
  const [selectedTab, setSelectedTab] = useState<string>('Cats')
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    loadPageData()
  }, [])

  const loadPageData = (): void => {
    try {
      // Simulate API call
      setTimeout(() => {
        setProcessSteps([
          {
            id: 1,
            title: 'Register Your Business',
            description: 'Fill out the form and share your basic details.',
            icon: '/images/img_tabler_edit.png'
          },
          {
            id: 2,
            title: 'List Your Products',
            description: 'Upload product photos, pricing, and descriptions.',
            icon: '/images/img_icon_park_list_two.png'
          },
          {
            id: 3,
            title: 'Receive Orders',
            description: 'We will notify you instantly when customers place an order.',
            icon: '/images/img_hugeicons_package_receive.png'
          },
          {
            id: 4,
            title: 'Deliver & Get Paid',
            description: 'We manage logistics, and you receive timely payouts.',
            icon: '/images/img_hugeicons_payment_02.png'
          }
        ])

        setSellerCategories([
          { id: 1, title: 'Pet food manufacturers' },
          { id: 2, title: 'Pet accessory and toy sellers' },
          { id: 3, title: 'Grooming product suppliers' },
          { id: 4, title: 'Home-based pet businesses' },
          { id: 5, title: 'Retail pet store owners' },
          { id: 6, title: 'Handmade pet product creators' },
          { id: 7, title: 'Pet treat and bakery brands' },
          { id: 8, title: 'Pet Healthcare Product Brands' }
        ])

        setStatistics([
          { id: 1, value: '10K+', label: 'Monthly Pet Shoppers' },
          { id: 2, value: '500+', label: 'Active Sellers' },
          { id: 3, value: '5K+', label: 'Listed Pet Products' },
          { id: 4, value: '100%', label: ' Delivery Support' }
        ])

        setCategoryItems([
          { id: 1, name: 'Food & Treats' },
          { id: 2, name: 'Litter Supplies' },
          { id: 3, name: 'Health & Wellness' },
          { id: 4, name: 'Accessories' }
        ])

        setLoading(false)
      }, 1000)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleStartSelling = (): void => {
    // Handle seller registration
  }

  const handleSubscribe = (): void => {
    if (email.trim()) {
      setEmail('')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const tabs = ['Cats', 'Dogs', 'Birds', 'Fishes']
  const catsItems = [
    "Food & Treats",
    "Litter Supplies",
    "Health & Wellness",
    "Accessories"
  ];
  
  const dogsItems = [
    "Food",
    "Treats & Chews",
    "Health & Wellness",
    "Accessories"
  ];
  
  const birdsItems = [
    "Food & Feeding",
    "Cages",
    "Perches & Toys",
    "Health & Grooming"
  ];
  
  const fishesItems = [
    "Filter & Media",
    "Accessories",
    "Treatment",
    "Live Fishes"
  ];
  const CategoryItem = ({
    number,
    name,
  }: {
    number: number;
    name: string;
  }) => (
    <div className="flex items-center bg-[#50083019] 
                    rounded-xl px-4 py-3 
                    hover:bg-[#50083030] 
                    transition-all duration-300">
      <div className="w-10 h-10 
                      bg-primary-background 
                      rounded-full 
                      flex items-center justify-center 
                      text-white font-semibold 
                      text-lg 
                      mr-4">
        {number}
      </div>
  
      <span className="text-base font-medium text-text-dark">
        {name}
      </span>
    </div>
  );

  return (
    <main className="w-full bg-secondary-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-accent-cream overflow-hidden">

<div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
  <div className="min-h-[700px] flex items-center">

    {/* LEFT CONTENT */}
    <div className="w-full lg:w-[55%] py-16">

      <h1 className="text-[32px] sm:text-[42px] lg:text-[44px] xl:text-[52px] font-bold leading-[44px] lg:leading-[54px] xl:leading-[64px] text-text-dark mb-6">
        Reach Pet Lovers Nationwide and{" "}
        <span className="text-primary-background">Grow</span>{" "}
        Your Business with Ease
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-text-overlay mb-10 max-w-[550px]">
        Join Petoty's growing marketplace and start selling premium pet
        products with full support in logistics, payments, and visibility.
      </p>

      <button
  onClick={handleStartSelling}
  className="
    bg-primary-background
    text-white
    text-xl lg:text-2xl
    font-semibold
    px-16 py-6
    rounded-full
    shadow-[0_15px_35px_rgba(129,9,85,0.35)]
    hover:scale-105
    hover:shadow-[0_20px_45px_rgba(129,9,85,0.45)]
    active:scale-95
    transition-all
    duration-300
    ease-in-out
    w-fit
  "
>
  Start Selling
</button>

    </div>

  </div>
</div>

{/* BIG IMAGE — ABSOLUTE */}
<div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-10%] xl:right-[0%] w-[90%] xl:w-[95%] h-[120%] xl:h-[130%] pointer-events-none">

  <Image
    src="/images/img_image_53.png"
    alt="Seller Success"
    fill
    priority
    className="object-contain object-right"
  />

</div>

</section>

      {/* Why Sell With Petoty Section */}
      <section className="w-full bg-secondary-background py-12 sm:py-16 lg:py-[60px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-[60px]">
            <h2 className="text-[28px] sm:text-[38px] lg:text-11xl font-semibold leading-[34px] sm:leading-[46px] lg:leading-[59px] text-text-dark mb-4 sm:mb-6">
              <span className="text-text-dark">Why </span>
              <span className="text-primary-background">Sell With Petoty?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-3xl font-normal leading-[22px] sm:leading-[26px] lg:leading-7xl text-text-overlay max-w-3xl mx-auto">
              Grow your pet business with a trusted marketplace built specifically for pet lovers and sellers.
            </p>
          </div>

          {/* Benefits Grid */}
         {/* Benefits Grid - Bento Layout */}
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

{/* 1️⃣ Easy Seller Onboarding (Big Left Card) */}
<div className="bg-accent-light border border-border-accent rounded-4xl p-6 flex flex-col justify-between lg:row-span-2">

  <div>
    <h3 className="text-2xl lg:text-3xl font-semibold text-text-dark mb-4">
      Easy Seller Onboarding
    </h3>
    <p className="text-base text-text-overlay">
      Register in minutes and kickstart your online journey effortlessly.
    </p>
  </div>

  <div className="mt-6 flex justify-center">
  <Image
    src="/images/img_image_65.png"
    alt="Easy Onboarding"
    width={360}
    height={360}
    className="object-contain w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] xl:max-w-[400px] h-auto"
  />
</div>
</div>

{/* 2️⃣ Large Customer Base */}
<div className="bg-accent-lighter border border-border-accent rounded-4xl p-6 flex flex-col justify-between">

  <div>
    <h3 className="text-2xl font-semibold text-text-dark mb-4">
      Large Customer Base
    </h3>
    <p className="text-base text-text-overlay">
      Tap into a fast-growing community of pet parents who shop regularly.
    </p>
  </div>

  <div className="mt-6 flex justify-end">
    <Image
      src="/images/img_image_66.png"
      alt="Customer Growth"
      width={180}
      height={160}
      className="object-contain"
    />
  </div>
</div>

{/* 3️⃣ Secure Payments */}
<div className="bg-accent-light border border-border-accent rounded-4xl p-6 flex flex-col justify-between">

  <div>
    <h3 className="text-2xl font-semibold text-text-dark mb-4">
      Secure & Transparent Payments
    </h3>
    <p className="text-base text-text-overlay">
      Automatic payouts with clear commission breakdowns.
    </p>
  </div>

  <div className="mt-6 flex justify-end">
    <Image
      src="/images/img_image_67.png"
      alt="Payment Security"
      width={200}
      height={170}
      className="object-contain"
    />
  </div>
</div>

{/* 4️⃣ Logistics Support */}
<div className="bg-accent-light border border-border-accent rounded-4xl p-6 flex flex-col justify-between">

  <div>
    <h3 className="text-2xl font-semibold text-text-dark mb-4">
      Logistics & Delivery Support
    </h3>
    <p className="text-base text-text-overlay">
      We help handle packaging, shipping, and returns, stress-free selling.
    </p>
  </div>

  <div className="mt-6 flex justify-end">
    <Image
      src="/images/img_image_68.png"
      alt="Logistics"
      width={180}
      height={160}
      className="object-contain"
    />
  </div>
</div>

{/* 5️⃣ Zero Technical Hassle */}
<div className="bg-accent-light border border-border-accent rounded-4xl p-6 flex flex-col justify-between">

  <div>
    <h3 className="text-2xl font-semibold text-text-dark mb-4">
      Zero Technical Hassle
    </h3>
    <p className="text-base text-text-overlay">
      No coding or setup required, we manage the backend, you manage your business.
    </p>
  </div>

  <div className="mt-6 flex justify-end">
    <Image
      src="/images/img_image_69.png"
      alt="Technical Support"
      width={180}
      height={160}
      className="object-contain"
    />
  </div>
</div>

</div>
        </div>
      </section>

      {/* How Selling Works Section */}
      <section className="w-full bg-accent-warm py-12 sm:py-16 lg:py-[58px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-[68px]">
            <h2 className="text-[28px] sm:text-[32px] lg:text-9xl font-semibold leading-[34px] sm:leading-[38px] lg:leading-[47px] text-text-primary">
              How Selling Works? (Process Timeline)
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-24 bg-accent-light rounded-lg mb-4"></div>
                  <div className="h-4 bg-accent-light rounded mb-2"></div>
                  <div className="h-3 bg-accent-light rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative">
                  {/* Step Icon */}
                  <div className="w-20 sm:w-24 lg:w-[94px] h-20 sm:h-24 lg:h-[96px] bg-gradient-to-b from-primary-background to-primary-background rounded-[24px_22px_0px_22px] flex items-center justify-center mb-4 sm:mb-6">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={56}
                      height={56}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14"
                    />
                  </div>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
  <div className="hidden lg:block absolute top-[48px] left-[calc(100%+4px)] xl:left-full xl:ml-2 w-[70px] xl:w-[120px]">
    <Image
      src="/images/img_ellipse_79.png"
      alt="Connector"
      width={120}
      height={28}
      className="w-full h-auto object-contain"
    />
  </div>
)}

                  {/* Step Content */}
                  <div className="text-center max-w-[280px] sm:max-w-[300px] lg:max-w-[298px]">
                    <h3 className="text-lg sm:text-xl lg:text-3xl font-bold leading-[24px] sm:leading-[26px] lg:leading-7xl text-primary-background mb-2 sm:mb-3 capitalize">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-xl font-light leading-[18px] sm:leading-[20px] lg:leading-2xl text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Who can Sell Section */}
      <section className="w-full bg-secondary-background py-12 sm:py-16 lg:py-[58px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="w-full lg:w-[32%] flex justify-center lg:justify-start">
              <div className="w-[200px] sm:w-[300px] lg:w-[340px] xl:w-[400px] 2xl:w-[454px] h-[280px] sm:h-[420px] lg:h-[500px] xl:h-[580px] 2xl:h-[670px]">
                <Image
                  src="/images/img_image_70.png"
                  alt="Pet Business Owners"
                  width={454}
                  height={670}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[60%] xl:w-[64%]">
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-[28px] sm:text-[32px] lg:text-9xl font-semibold leading-[34px] sm:leading-[38px] lg:leading-[47px] text-text-dark mb-3 sm:mb-4 lg:mb-[18px]">
                  Who can Sell?
                </h2>
                <p className="text-base sm:text-lg lg:text-3xl font-normal leading-[22px] sm:leading-[26px] lg:leading-7xl text-text-secondary">
                  Petoty welcomes all types of pet product sellers — big or small.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {sellerCategories.map((category, index) => (
                  <div
                    key={category.id}
                    className="flex items-center border border-primary-dark rounded-lg p-3 sm:p-4 bg-secondary-background hover:bg-accent-light transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] bg-primary-dark rounded-3xl flex items-center justify-center flex-shrink-0 mr-4 sm:mr-5 lg:mr-[26px]">
                      <span className="text-base sm:text-lg lg:text-4xl font-semibold leading-[20px] sm:leading-[24px] lg:leading-5xl text-primary-foreground">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-base sm:text-lg lg:text-3xl font-normal leading-[22px] sm:leading-[26px] lg:leading-7xl text-text-dark">
                      {category.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Petoty at a Glance Section */}
      <section className="w-full bg-secondary-background py-12 sm:py-16 lg:py-[54px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-[62px]">
            <h2 className="text-[28px] sm:text-[38px] lg:text-11xl font-semibold leading-[34px] sm:leading-[46px] lg:leading-[59px] text-text-dark mb-4 sm:mb-6 lg:mb-[18px]">
              <span className="text-text-dark">Petoty at a </span>
              <span className="text-primary-background">Glance</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-3xl font-normal leading-[22px] sm:leading-[26px] lg:leading-7xl text-text-overlay max-w-4xl mx-auto">
              Reach a fast-growing community of pet parents and scale your business with Petoty's trusted platform.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px] xl:gap-[72px] mb-8 sm:mb-12 lg:mb-[66px]">
            {/* Left Content */}
            <div className="w-full lg:w-[55%] xl:w-[60%]">
              <p className="text-lg sm:text-2xl lg:text-7xl font-medium leading-[26px] sm:leading-[34px] lg:leading-[50px] text-text-dark">
                At Petoty, we connect passionate pet brands with a rapidly expanding community of pet parents across India. With seamless onboarding, reliable logistics, and powerful visibility tools, we help sellers build trust, boost sales, and grow their business effortlessly.
              </p>
            </div>

            {/* Right Stats Grid */}
            <div className="w-full lg:w-[40%] xl:w-[35%]">
              <div className="grid grid-cols-2 gap-4 lg:gap-x-[30px] xl:gap-x-[58px] lg:gap-y-[30px] xl:gap-y-[44px]">
                {statistics.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className="text-[32px] sm:text-[48px] lg:text-12xl font-semibold leading-[40px] sm:leading-[56px] lg:leading-[88px] text-text-green mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base lg:text-3xl font-medium leading-[18px] sm:leading-[22px] lg:leading-7xl text-text-gray-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-4">
            <div className="w-full sm:w-1/2">
              <Image
                src="/images/img_unsplash_swkkiitjmyc.png"
                alt="Pet Business Success"
                width={652}
                height={438}
                className="w-full h-[200px] sm:h-[250px] lg:h-[438px] object-cover rounded-xl"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <Image
                src="/images/img_unsplash_lru2jpt1yd0.png"
                alt="Happy Pet Customers"
                width={652}
                height={438}
                className="w-full h-[200px] sm:h-[250px] lg:h-[438px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="w-full bg-accent-warm py-12 sm:py-16 lg:py-[54px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 sm:mb-12 lg:mb-[34px]">
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="flex items-center gap-4 lg:gap-6">
                <h2 className="text-[28px] sm:text-[36px] lg:text-10xl font-semibold leading-[34px] sm:leading-[42px] lg:leading-[53px] text-text-dark">
                  Popular Categories to Sell on Petoty
                </h2>
                <div className="w-10 h-10 lg:w-[46px] lg:h-[46px] flex-shrink-0">
                  <Image
                    src="/images/img_rectangle_190.gif"
                    alt="Category Icon"
                    width={46}
                    height={46}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-[150px] sm:w-[200px] lg:w-[302px] h-[60px] sm:h-[80px] lg:h-[128px]">
                  <Image
                    src="/images/img_ellipse_43.png"
                    alt="Category Background"
                    width={302}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
         

          {/* Category Grid */}
         {/* Category Box */}
<div className="bg-accent-cream border border-primary-background rounded-3xl 
                px-6 sm:px-10 lg:px-8 xl:px-20 
                py-10 sm:py-14 lg:py-16">

 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {/* Cats */}
    <div>
      <div className="mb-6 flex justify-center">
        
        <span className="
  px-10 sm:px-12 lg:px-8 xl:px-14
  py-4 sm:py-5 lg:py-4 xl:py-6
  rounded-full
  bg-primary-background
  text-primary-foreground
  text-xl sm:text-2xl lg:text-xl xl:text-3xl
  font-bold
  shadow-md
">
  Cats
</span>
         
      </div>
      <div className="space-y-4">
        {catsItems.map((item, index) => (
          <CategoryItem key={index} number={index + 1} name={item} />
        ))}
      </div>
    </div>

    {/* Dogs */}
    <div>
      <div className="mb-6 flex justify-center">
       
        <span className="
  px-10 sm:px-12 lg:px-8 xl:px-14
  py-4 sm:py-5 lg:py-4 xl:py-6
  rounded-full
  bg-primary-background
  text-primary-foreground
  text-xl sm:text-2xl lg:text-xl xl:text-3xl
  font-bold
  shadow-md
">
          Dogs
        </span>
      </div>
      <div className="space-y-4">
        {dogsItems.map((item, index) => (
          <CategoryItem key={index} number={index + 1} name={item} />
        ))}
      </div>
    </div>

    {/* Birds */}
    <div>
      <div className="mb-6 flex justify-center">
        
        <span className="
  px-10 sm:px-12 lg:px-8 xl:px-14
  py-4 sm:py-5 lg:py-4 xl:py-6
  rounded-full
  bg-primary-background
  text-primary-foreground
  text-xl sm:text-2xl lg:text-xl xl:text-3xl
  font-bold
  shadow-md
">
          Birds
        </span>
      </div>
      <div className="space-y-4">
        {birdsItems.map((item, index) => (
          <CategoryItem key={index} number={index + 1} name={item} />
        ))}
      </div>
    </div>

    {/* Fishes */}
    <div>
      <div className="mb-6 flex justify-center">
        
        <span className="
  px-10 sm:px-12 lg:px-8 xl:px-14
  py-4 sm:py-5 lg:py-4 xl:py-6
  rounded-full
  bg-primary-background
  text-primary-foreground
  text-xl sm:text-2xl lg:text-xl xl:text-3xl
  font-bold
  shadow-md
">
          Fishes
        </span>
      </div>
      <div className="space-y-4">
        {fishesItems.map((item, index) => (
          <CategoryItem key={index} number={index + 1} name={item} />
        ))}
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Support Section */}
      {/* <section className="w-full bg-primary-dark py-12 sm:py-16 lg:py-[60px]"> */}
      <section className="relative w-full bg-primary-dark py-12 sm:py-16 lg:py-[60px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[52px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-[42%]">
              <h2 className="text-[28px] sm:text-[32px] lg:text-9xl font-semibold leading-[34px] sm:leading-[42px] lg:leading-[56px] text-primary-foreground mb-6 sm:mb-8">
                Petoty Seller Support — We're Here 24/7
              </h2>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[58%] space-y-8 sm:space-y-10 lg:space-y-[30px] xl:space-y-[50px]">
              <p className="text-lg sm:text-2xl lg:text-7xl font-normal leading-[26px] sm:leading-[30px] xl:leading-[33px] text-accent-cream-light">
                At Petoty, we support you at every step of your selling journey, from onboarding to order fulfillment and growth.
              </p>

              <div className="flex items-start gap-4 lg:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-[82px] flex-shrink-0">
                  <Image
                    src="/images/img_group.png"
                    alt="Support Team"
                    width={80}
                    height={82}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-lg sm:text-2xl lg:text-7xl font-normal leading-[26px] sm:leading-[32px] lg:leading-[39px] text-accent-cream-light mb-2 sm:mb-3">
                    You can reach our support team at:
                  </p>
                  <Link 
                    href="mailto:seller@petoty.com"
                    className="text-lg sm:text-2xl lg:text-7xl font-normal leading-[26px] sm:leading-[32px] lg:leading-[39px] text-accent-cream-light underline hover:opacity-80 transition-opacity"
                  >
                    seller@petoty.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Support Image */}
          <div className="absolute bottom-0 right-0 
  w-[180px] sm:w-[240px] lg:w-[350px] 
  h-auto 
  hidden lg:block"
>
  <Image
    src="/images/img_union.png"
    alt="Support Illustration"
    width={350}
    height={380}
    className="w-full h-auto object-contain"
  />
</div>
        </div>
      </section>

      {/* Footer */}
      
      <footer
  className="w-full bg-secondary-background border-t border-line-background bg-no-repeat bg-left-bottom"
  style={{
    backgroundImage: "url('/images/img_group_gray_900_58x58.png')",
    backgroundSize: "380px",
    backgroundPosition: "-60px 60%",
  }}
>
  <div className="w-full max-w-[1440px] mx-auto px-8 py-12">
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* Left: Logo + Nav Columns */}
      <div className="flex flex-1 gap-6 items-start">
        {/* Logo */}
        {/* <div className="w-[110px] flex-shrink-0">
          <Image
            src="/images/img_group_gray_900_58x58.png"
            alt="Petoty Footer Logo"
            width={110}
            height={110}
            className="w-full h-full"
            priority
            
          />
        </div> */}

        {/* Nav Columns */}
        <div className="flex flex-1 flex-wrap gap-x-12 gap-y-8">
          {/* Get to Know Us */}
          <div className="space-y-4 min-w-[140px]">
            <h3 className="text-xl font-bold text-text-secondary">Get to Know Us</h3>
            <div className="space-y-3">
              {["About Us", "News & Blog", "Careers", "Investors", "Contact Us"].map((item, i) => (
                <Link key={i} href="#" className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 min-w-[160px]">
            <h3 className="text-xl font-bold text-text-secondary">Customer Service</h3>
            <div className="space-y-3">
              {["Help Center", "FAQ's", "Franchise", "Feedback", "Become a Vendor", "Payment Method"].map((item, i) => (
                <Link key={i} href="#" className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4 min-w-[120px]">
            <h3 className="text-xl font-bold text-text-secondary">Legal</h3>
            <div className="space-y-3">
              {["Privacy Policy", "Terms of Use", "Legal", "Sitemap"].map((item, i) => (
                <Link key={i} href="#" className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Orders & Returns */}
          <div className="space-y-4 min-w-[180px]">
            <h3 className="text-xl font-bold text-text-secondary">Orders & Returns</h3>
            <div className="space-y-3">
              {["Track Order", "Shipping & Delivery", "Return & Exchange", "Price Match Guarantee"].map((item, i) => (
                <Link key={i} href="#" className="block text-base font-normal text-text-secondary hover:text-primary-background transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Newsletter + Social */}
      <div className="w-full lg:w-[320px] flex-shrink-0 space-y-5">
        <div>
          <h4 className="text-xl font-bold text-text-secondary mb-1">Let's keep in touch</h4>
          <p className="text-base text-text-variants">Get recommendations, tips, updates and more.</p>
        </div>

       
       {/* Email Subscribe Section - Proper CTA Fix */}
<div className="flex flex-col sm:flex-row gap-4 w-full items-stretch">

<EditText
  placeholder="Enter your email address"
  value={email}
  onChange={handleEmailChange}
  text_font_size="text-base"
  text_font_family="Inter"
  text_font_weight="font-normal"
  text_line_height="leading-base"
  text_color="text-text-light"
  fill_background_color="bg-input-background"
  border_border="border border-border-primary"
  border_border_radius="rounded-full"
  padding="t=16px,r=20px,b=16px,l=20px"
  containerClassName="flex-1 w-full"
/>

<button
  onClick={handleSubscribe}
  className="
    bg-primary-dark
    text-white
    text-xl
    font-semibold
    px-10
    py-4
    rounded-full
    shadow-lg
    hover:bg-primary-dark/90
    hover:shadow-xl
    hover:scale-105
    active:scale-95
    transition-all
    duration-300
    ease-in-out
    whitespace-nowrap
    min-w-[200px]
  "
>
  Subscribe
</button>

</div>

        {/* Social Icons */}
        <div>
          <h4 className="text-base font-normal text-text-secondary mb-3">Stay Connected</h4>
          <div className="flex items-center gap-5">
            {[
              { src: "/images/img_image (2).png", alt: "Twitter", w: 22, h: 22 },
              { src: "/images/img_image_14x14 (2).png", alt: "Facebook", w: 22, h: 22 },
              { src: "/images/img_image_10x14 (2).png", alt: "YouTube", w: 22, h: 22 },
              { src: "/images/img_image_1 (2).png", alt: "Instagram", w: 22, h: 22 },
              { src: "/images/img_image_2.png", alt: "WhatsApp", w: 22, h: 22 },
            ].map(({ src, alt, w, h }) => (
              <Link key={alt} href="#" className="hover:opacity-75 transition-opacity flex-shrink-0">
                <Image src={src} alt={alt} width={w} height={h} style={{ width: w, height: h, objectFit: 'contain' }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-line-background mt-10 pt-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base text-text-muted">Copyright © 2025 Petoty, All rights reserved.</p>
        <div className="flex-shrink-0">
          <Image
            src="/images/img_image_59.png"
            alt="Payment Methods"
            width={302}
            height={18}
            style={{ width: 302, height: 18, objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}