import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import vogue from '../images/vogue.svg'
import esquire from '../images/esquire.svg'
import humans from '../images/humans.svg'
import Price from '../components/Price'
import Design from '../components/Design'
import About from '../components/About'
import Model from '../components/Model'
import Plants from '../components/Plants'
import Footer from '../components/Footer'

const Home = () => {
  return (
	<div>
		<Navbar />
		<section id='home' className='w-full md:pl-[90px] md:pr-[90px] md:pt-[58px] md:pb-[100px] bg-background md:bg-background p-[45px]'>
			<Carousel />
		</section>
		<section className='w-full bg-background md:pl-[90px] md:pr-[90px] pr-[45px] pl-[45px] md:pb-[130px] pb-[60px]'>
			<div className='w-full bg-background2 flex flex-col gap-[65px] pt-[36px] pb-[46px] justify-center items-center text-center'>
				<h1 className='text-[48px] text-primary'>“These are the most thoughtfully <br /> designed plants on the market.”</h1>
				<div className='w-full grid md:grid-cols-3 gap-[72px] items-center justify-items-center sm:grid-cols-2'>
					<img src={vogue} alt="" />
					<img src={esquire} alt="" />
					<h1 className='fontRubik text-[20px] font-[400] leading-[24px] text-primary w-full  flex justify-center md:w-[120px]'>HUMANS OF <br />
						NEW YORK</h1>
				</div>
			</div>
		</section>
		<section id='price' className='w-full bg-background md:pl-[90px] md:pr-[90px] pr-[45px] pl-[45px] md:pb-[130px] pb-[30px]'>
			<Price />
		</section>
		<section className='w-full bg-background md:pl-[90px] md:pr-[90px] pr-[45px] pl-[45px] pb-[90px]'>
			<Design />
		</section>
		<section id='about' className='w-full bg-buttonColor md:pl-[60px] md:pr-[60px] pr-[30px] pl-[30px] pb:[75px] md:pb-[150px] md:pt-[60px] pt:[30px]'>
			<About />
		</section>
		<section className='w-full pl-[30px] pr-[30px] md:pl-[60px] md:pr-[60px] bg-buttonColor'>
			<Model />
		</section>
		<section className='w-full bg-white pt-[60px] pl-[35px] pr-[35px] md:pl-[70px] md:pr-[70px] pb-[110px]'>
			<Plants />
		</section>
		<section id='contact'>
			<Footer />
		</section>

	</div>
  )
}

export default Home