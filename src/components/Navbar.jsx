import { navLinks } from '../../constants/index.js'

function Navbar() {
    return (
        <nav>
            <div className="">
                <a href="#home" className='flex item-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>Valvet Pour</p>
                </a>
            </div>
         <ul>
            {navLinks.map((link) => (
                <li key={link.id} className='cursor-pointer'>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
         </ul>
        </nav>
    )
}

export default Navbar