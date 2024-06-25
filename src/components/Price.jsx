import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import image3 from '../images/image3.svg'

const Price = () => {

	const images = [
		image1,
		image2,
		image1,
		image2,
		image3,
		image1
	]

  return (
	<div className='w-full customGrid'>
		{images.map((el) => {
			return <div className='w-[310px] h-[405px] bg-background2 flex flex-col justify-between items-center gap-[30px] cursor-pointer rounded-[15px] customEffect'><img className='w-[210px] h-[261px]' src={el} alt="" />
					<div className='w-full flex justify-between items-center p-[20px]'>
						<div className='flex flex-col items-start'>
							<h1 className='text-[20px] text-primary'>Model 000</h1>
							<span className=' text-primary'>Black</span>
						</div>
						<span>$145</span>

					</div>
			</div>
		})}
	</div>
  )
}

export default Price