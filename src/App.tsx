import Nav from 'components/Nav/Nav'
import Social from 'components/Social/Social'

import Card from 'components/Card/Card'

import 'App.css'

import './css/socials.css'
import './css/about.css'
import './css/projects.css'
import './css/home.css'
import './css/tools.css'

import './css/dark.css'

const socials = [
	['Github', 'github', 'https://github.com/Maathias'],
	['e-mail', 'mail-alt', 'mailto:pstrucha.mateusz@gmail.com'],
	[
		'LinkedIn',
		'linkedin',
		'https://www.linkedin.com/in/mateusz-pstrucha-bbb8511bb/',
	],
]

function App() {
	return (
		<div className="main">
			<Nav buttons={['About me', 'Projects']} />
			<section id="home">
				<header>
					<div className="greeting small">Hi, my name is</div>
					<div className="greeting big">Mateusz Pstrucha</div>
					<div className="greeting medium">I'm a web developer</div>
				</header>

				<aside className="socials">
					{socials.map(([title, icon, href]) => (
						<Social title={title} key={href} href={href} icon={icon} />
					))}
				</aside>
			</section>

			<section id="about">
				<div className="bio">
					<p>
						Hi, I'm Mathew, I've been fascinated with programming since hearing
						about it as a child. My experience started with C and C++, then PHP.
						Most of my recent projects are written in JavaScript, with React and
						Typescript.
					</p>
					<p>
						Alongside development, I host my projects and apps on two servers
						running Ubuntu Server. All my domains are being balanced by NGINX. I
						maintain all the local services we use on our home network. Most of
						them are running on a PfSense box.
					</p>
					<p>
						I write a significant portions of my own tooling, and experiment
						with many different technologies between projects. Below are
						tools/languages I've used so far. This list is constantly expanding,
						as I'm constantly learning.
					</p>
				</div>
				<div className="stack">
					{[
						'mongodb-plain bigger',
						'express-original bigger',
						'react-original bigger',
						'nodejs-plain bigger',
						'nginx-original bigger',
						'linux-plain bigger',
						'typescript-plain bigger',
						//
						' spacer',
						//
						'python-plain big',
						'docker-plain big',
						'git-plain big',
						'socketio-original',
						'javascript-plain',
						//
						' spacer',
						//
						'css3-plain',
						'html5-plain',
						'arduino-plain',
						'bootstrap-plain',
						'jquery-plain',
						'npm-original-wordmark',
						'mysql-plain',
						'redis-plain',
						'ubuntu-plain',
						'vim-plain',
						'vscode-plain',
						'yarn-plain',
						'bash-plain',
						'raspberrypi-line',
					].map((icon, i) => (
						<i
							key={i}
							className={`devicon-${icon}`}
							title={icon.split('-')[0]}
						></i>
					))}

					{/* <li>React</li>
							<li>JQuery</li>
							<li>Express.js</li>
							<li>Redis</li>
							<li>MongoDB</li>
							<li>MySQL</li> */}
				</div>
			</section>

			<section id="projects">
				<div className="carousel-nav">
					<i className="icon-left-open"></i>
					<i className="icon-right-open"></i>
				</div>
				<div className="cards">
					<Card
						label="radio-rolnik"
						badges={['react-original', 'nodejs-plain']}
						link="https://github.com/maathias/radio-rolnik"
						image="https://github.com/Maathias/radio-rolnik/raw/master/img/ss_track.png"
					>
						Voting app, for our school's hall audio system. Accounts are managed
						with facebook, and track data is fetched from spotify.
					</Card>
					<Card
						label="motd"
						badges={['python-plain', 'bash-plain']}
						link="https://github.com/maathias/motd"
						image="https://github.com/Maathias/motd/raw/master/example.png"
					>
						Custom motd generator, made for keeping an eye on important metrics
						of your remote server.
					</Card>
					<Card
						label="auth"
						badges={['javascript-plain', 'nodejs-plain']}
						link="https://github.com/maathias/auth"
						image="https://user-images.githubusercontent.com/24920514/172725558-dcb40535-f13e-4f8e-852f-2c573b606ff1.png"
					>
						Cross subdomain log in page. Made to easily integrate socials
						accounts into one username&password, for all custom services on a
						domain
					</Card>
				</div>
			</section>
		</div>
	)
}

export default App
