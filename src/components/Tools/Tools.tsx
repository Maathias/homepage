import { createContext, useContext, useState } from 'react'

const activeContext = createContext({
	active: -1,
	setActive: (i: number) => {},
})

const tools = [
	{
		id: 'send',
		display: 'Send',
		description: 'lorem asd as ',
		href: 'https://send.mtps.pl/',
	},
	{
		id: 'auth',
		display: 'Auth',
		description: 'loremasd as das ',
		href: 'https://send.mtps.pl/',
	},
	{
		id: 'redirect',
		display: 'Redirect',
		description: 'loremas das das das',
		href: 'https://send.mtps.pl/',
	},
]

function ToolButton({ i, display }: { i: number; display: string }) {
	const { active, setActive } = useContext(activeContext)

	return (
		<div className={active === i ? 'active' : ''} onClick={() => setActive(i)}>
			{tools[i].display} <i className="icon-link-ext"></i>
		</div>
	)
}

function ToolDisplay({ active }: { active: number }) {
	if (active < 0)
		return (
			<div className="tools-preview empty">
				Choose an app from the list below.
			</div>
		)

	const { display, href } = tools[active]

	fetch(href).then(console.log)

	return (
		<div className="tools-preview">
			{active} {display}
		</div>
	)
}

function Tools() {
	const [active, setActive] = useState(-1)

	return (
		<>
			<ToolDisplay active={active} />
			<activeContext.Provider value={{ active, setActive }}>
				<div className="tools-buttons">
					{tools.map(({ id, display }, i) => (
						<ToolButton key={id} i={i} display={display} />
					))}
				</div>
			</activeContext.Provider>
		</>
	)
}

export default Tools
