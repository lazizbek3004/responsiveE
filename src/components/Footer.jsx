import logo from '../images/Logo.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'

const Footer = () => {
  return (
	<div className='w-full pt-[40px] md:pt-[80px] pl-[35px] md:pl-[70px] pr-[35px] md:pr-[70px] pb-[150px] md:pb-[75px]  bg-buttonColor '>
		<div className='w-full flex flex-col gap-[24px] xl:flex-row justify-center xl:justify-between items-center'>
			<div className='flex flex-col xl:justify-start xl:items-start items-center'>
				<img src={logo} alt="" className='mb-[48px]' />
				<p className='w-[370px] text-white text-[16px] leading-[22px] '>Stay informed about Sopa with our latest 
				releases and founder news.</p>
				<button className='w-[320px] h-[46px] text-[16px] text-white rounded-[32px] border-[1px] border-white mt-[20px] '>Enter email here for updates</button>
			</div>
			<ul className='flex flex-col gap-[20px] xl:justify-start xl:items-start items-center'>
				<li className='mb-[4px] text-[20px] leading-[24px] text-white'><a href="#">Products</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Model 000</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Model 001</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Laces</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Masks</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">No-show Socks</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Crew Socks</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Gift Cards</a></li>
			</ul>
			<ul className='flex flex-col gap-[20px] xl:justify-start xl:items-start items-center'>
				<li className='mb-[4px] text-[20px] leading-[24px] text-white'><a href="#">Support</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Help Center</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">FAQs</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Order</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Order Status</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Returns & Exchanges</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Contact Us</a></li>
				<li className='text-[16px] leading-[22px] text-buttonColor '>sdfsldkf</li>
			</ul>
			<ul className='flex flex-col gap-[20px] xl:justify-start xl:items-start items-center'>
				<li className='mb-[4px] text-[20px] leading-[24px] text-white'><a href="#">Everything Else</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Community</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Why Sopa</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">About</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Discount Program</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Sopa Blog</a></li>
				<li className='text-[16px] text-white leading-[22px]'><a href="#">Sopa Ambassodors</a></li>
				<li className='text-[16px] leading-[22px] text-buttonColor '>sdfsldkf</li>
			</ul>
			<div className='flex flex-col gap-[20px] xl:justify-start xl:items-start items-center'>
				<div className='flex gap-[15px] items-center'>
					<img src={twitter} alt="" />
					<a href='#' className='text-[16px] text-white leading-[22px] '>Twitter</a>
				</div>
				<div className='flex gap-[15px] items-center'>
					<img src={instagram} alt="" />
					<a href='#' className='text-[16px] text-white leading-[22px] '>Instagram</a>
				</div>
				<div className='flex gap-[15px] items-center'>
					<img src={facebook} alt="" />
					<a href='#' className='text-[16px] text-white leading-[22px] '>Facebook</a>
				</div>

			</div>

		</div>
	



	</div>
  )
}

export default Footer