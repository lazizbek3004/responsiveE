import React from 'react'
import flower from '../images/Frame 18.svg'
import completeStar from '../images/completeStar.svg'
import incompleteStar from '../images/incompleteStar.svg'
import thatFlower from '../images/16.svg'

const Design = () => {
  return (
	<div className='customResponsive'>
		<div className='max-w-[740px] min-h-[633px] bg-background3 pt-[30px] flex flex-col justify-center items-center pl-[50px] pr-[50px]'>
			<h1 className='text-primary font-[700] text-[50px] leading-[66px]'>designed plants</h1>
			<div className='flex gap-[30px] items-center customResponsive2'>
				<img src={flower} alt="" />
				<div className='flex flex-col gap-[50px] items-center'>
					<div className='flex gap-[5px]'>
						<img src={completeStar} alt="" />
						<img src={completeStar} alt="" />
						<img src={completeStar} alt="" />
						<img src={completeStar} alt="" />
						<img src={incompleteStar} alt="" />
					</div>
					<p className='max-w-[268px] text-center text-[23px] font-[300] leading-[35px] text-primary'>Create a visually appealing and user-friendly e-commerce website to sell Bamboo Plants, Herbs, Ornamental Grasses, Ginseng, and Medicinal Plants."</p>
				</div>
			</div>

		</div>
		<div className='max-w-[350px] max-h-[633px] flex flex-col justify-start items-start bg-background3'>
			<div className='bg-buttonColor pt-[50px]'>
				<img src={thatFlower} alt="" />
			</div>
			<div className='w-full flex justify-between items-end pt-[30px] pb-[30px] pl-[15px] pr-[15px] bg-background3'>
				<div className='flex flex-col'>
					<h1 className='font-[500] text-[23px] text-primary'>Model 000</h1>
					<span className='font-[500] text-background text-[23px]'>Black</span>
				</div>
				<span className='text-primary font-[500] text-[23px] leading-[40px]'>$500</span>
			</div>


		</div>

	</div>
  )
}

export default Design