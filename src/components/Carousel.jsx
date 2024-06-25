import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import background from '../images/backgroundImage.svg'



const Carousel = () => {
  return (
	<div className='w-full '>
		<Swiper pagination={true} modules={[Pagination]} className="mySwiper rounded-[30px]">
		<SwiperSlide className='customBackground h-[450px] p-[20px] flex flex-col justify-end items-start gap-[40px] md:h-[720px] pb-[65px]'>
			<h1 className='text-[40px] customFont text-secondary leading-[42px] md:text-[66px] md:leading-[74px]'>Step inside, for <br /> 
				comfort and magic <br />
				await you.</h1>
			<button className='w-[180px] h-[56px] bg-buttonColor active:bg-hover'>Shop Now</button>




		</SwiperSlide>
		<SwiperSlide className='customBackground h-[450px] p-[20px] flex flex-col justify-end items-start gap-[40px] md:h-[720px] pb-[65px]'>
			<h1 className='text-[40px] customFont text-secondary leading-[42px] md:text-[66px] md:leading-[74px]'>Step inside, for <br /> 
				comfort and magic <br />
				await you.</h1>
			<button className='w-[180px] h-[56px] bg-buttonColor active:bg-hover'>Shop Now</button>




		</SwiperSlide>
		<SwiperSlide className='customBackground h-[450px] p-[20px] flex flex-col justify-end items-start gap-[40px] md:h-[720px] pb-[65px]'>
			<h1 className='text-[40px] customFont text-secondary leading-[42px] md:text-[66px] md:leading-[74px]'>Step inside, for <br /> 
				comfort and magic <br />
				await you.</h1>
			<button className='w-[180px] h-[56px] bg-buttonColor active:bg-hover'>Shop Now</button>




		</SwiperSlide>
      </Swiper>

	</div>
  )
}

export default Carousel