import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='w-full'>
			<ul className='flex justify-between md:flex-row flex-col'>
				<li>
					<Link href={'/leaderboard'}>Leaderboard</Link>
				</li>
				<li>
					<Link href={'/faq'}>FAQ</Link>
				</li>
				<li>
					<Link href={'/login'}>Sign Up</Link>
				</li>
			</ul>
		</nav>
	)
}
