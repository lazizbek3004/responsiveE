import React, { useState } from 'react'
import logo from '../images/Vector.svg'
import person from '../images/person.svg'
import box from '../images/box.svg'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false)

	const links = [
		'Home',
		'Price',
		'About',
		'Contact'
	]

  return (
	<div className='w-full flex justify-between items-center p-[32px] md:pl-[90px] md:pr-[90px] pl-[45px] pr-[45px] relative'>
		<img src={logo} alt="" />
		<ul className='hidden md:flex md:gap-[24px]  md:font-[400] md:text-[18px]'>
			{links.map((el, index) => {
				return <li className='md:cursor-pointer md:text-primary md:hover:text-hover' key={index}><a className='' href={`#${el.toLowerCase()}`}>{el}</a></li>
			})}
		</ul>
		<div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
			<FaBars className='text-primary' />
		</div>
		<div className='flex items-center justify-center gap-[24px]'>
			<span className='font-[400] text-[18px] text-primary cursor-pointer'>Support</span>
			<img src={box} alt="" className=' cursor-pointer' />
			<img src={person} alt=""  className=' cursor-pointer'/>
		</div>
		{isOpen ? <div className='absolute z-10 top-0 left-0 w-full bg-primary md:hidden p-[12px]'>
			<ul className='flex flex-col gap-[12px] items-center justify-center'>
				{links.map((el, index) => {
					return <li key={index} className='cursor-pointer text-[18px] font-[500] text-white'><a className='' href={`#${el.toLowerCase()}`}>{el}</a></li>
				})}
				<FaXmark onClick={() => setIsOpen(false)} className='absolute top-[12px] right-[12px] text-white'  />
			</ul>
		</div> : <></>}

	</div>
  )
}

export default Navbar