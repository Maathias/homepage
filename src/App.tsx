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
						Alongside development, I host my projects and apps on a small
						network, that I run with my friend. It consists of 3x locations,
						with main machines running Proxmox VE. They are all connected with
						IPSEC, running on OPNsense boxes. Load balancing is done by NGINX,
						and certificates are generated automatically from Letsencrypt. My
						software projects are automated with Github Actions and Ansible, to
						automatically deploy new builds to target machines (VMs).
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
						'nodejs-plain bigger',
						'typescript-plain bigger',
						'react-original bigger',
						'mongodb-plain bigger',
						'nginx-original bigger',
						'linux-plain bigger',
						'ansible-plain bigger',
						//
						' spacer',
						//,
						'docker-plain big',
						'express-original',
						'terraform-plain',
						'python-plain big',
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
						image="https://github.com/Maathias/auth/raw/master/docs/example.png"
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
