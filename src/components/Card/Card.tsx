import './card.css'

function Card({
	image,
	badges,
	label,
	link,
	children,
}: {
	image: string
	badges: string[]
	label: string
	link: string
	children: any
}) {
	return (
		<div className="card">
			<div
				className="image"
				style={{
					backgroundImage: `url('${image}')`,
				}}
			></div>
			<div className="content">
				<a href={link} className="label" target="_blank">
					{label} <i className="icon-link-ext"></i>
				</a>
				<div className="badge">
					{badges.map((badge) => (
						<i key={badge} className={`devicon-${badge}`}></i>
					))}
				</div>
				{children}
			</div>
		</div>
	)
}

export default Card
