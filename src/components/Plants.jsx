import plant1 from '../images/plant1.svg'
import plant2 from '../images/plant2.svg'
import plant3 from '../images/plant3.svg'
import plant4 from '../images/plant4.svg'

const Plants = () => {
  return (
	<div className="w-full flex flex-col justify-center items-center gap-[60px]">
		<h1 className="text-primary font-[900] text-[80px] leading-[70px] text-center">Plants or <br /> Everything</h1>
		<div className="w-full customGridTemplate">
			<div><img src={plant1} alt="" /></div>
			<div><img src={plant2} alt="" /></div>
			<div><img src={plant3} alt="" /></div>
			<div><img src={plant4} alt="" /></div>
		</div>

	</div>
  )
}

export default Plants