import { createContext, useContext, useEffect, useState } from 'react'

import './nav.css'
import './nav-button.css'

// if (document.location.hash) window.scrollTo(0, 0)

// window.onhashchange = (e) => {
// 	window.scrollTo(0, 0)
// 	e.preventDefault()
// }

function NavButton({
	label,
	active,
	onClick,
}: {
	label: any
	active: boolean
	onClick: (label: string) => void
}) {
	return (
		<div
			className="nav-button"
			data-active={active}
			onClick={(e) => onClick(label)}
		>
			{label}
		</div>
	)
}

function Nav({ buttons }: { buttons: string[] }) {
	const [active, setActive] = useState('home')

	useEffect(() => {
		const onScroll = () => {
			let nth = Math.round(Math.abs(window.scrollY / window.innerHeight - 0.25))
			setActive(['home', ...buttons][nth])
		}

		document.addEventListener('scroll', onScroll)
	}, [])

	function onClick(label: string) {
		let nth = buttons.includes(label) ? buttons.indexOf(label) + 3 : 2

		document
			.querySelector(`section:nth-child(${nth})`)
			?.scrollIntoView({ behavior: 'smooth' })
		// setActive(label)
	}

	return (
		<nav className="nav">
			<NavButton
				key="home"
				label={<i className="icon-home"></i>}
				active={active == 'home'}
				onClick={() => onClick('home')}
			/>
			{buttons.map((label) => {
				return (
					<NavButton
						key={label}
						label={label}
						active={active == label}
						onClick={onClick}
					/>
				)
			})}
		</nav>
	)
}

export default Nav
