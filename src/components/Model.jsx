import modelImage from '../images/modelImage.svg'
import kaktus from '../images/kaktus.svg'

const Model = () => {
  return (
	<div className="w-full flex flex-col gap-[48px] xl:flex-row xl:justify-between items-center pb-[80px] pt-[48px] md:pt-[0]">
		<div className="pl-[60px] pr-[60px] flex flex-col bg-modelBackground rounded-[30px]">
			<img src={modelImage} alt="" />
			<div className='flex justify-between items-end pb-[25px]'>
				<div className='flex flex-col items-start'>
					<h1 className='text-primary text-[32px]'>Model 000</h1>
					<span className='text-primary text-[24px]'>Black</span>
				</div>
				<span className='text-primary text-[32px]'>$500</span>
			</div>
		</div>
		<div className="flex flex-col justify-between">
			<div className='flex flex-col bg-background rounded-[30px]'>
				<img src={kaktus} alt="" />
				<div className='flex justify-between p-[15px]'>
					<div className='flex flex-col'>
						<h1 className='text-primary text-[23px]'>Model 000</h1>
						<span className='text-primary text-[18px]'>Black</span>
					</div>
					<span className='text-[23px] text-primary'>$500</span>
				</div>
			</div>


		</div>

	</div>
  )
}

export default Model