import './social.css'

function Social({
	href,
	icon,
	title,
}: {
	href: string
	icon: string
	title: string
}) {
	return (
		<a // eslint-disable-line react/jsx-no-target-blank
			className="social-button"
			title={title}
			href={href}
			target="_blank"
		>
			<i className={'icon-' + icon}></i>
		</a>
	)
}

export default Social
