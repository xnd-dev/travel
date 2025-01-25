import { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navbar')

    const showNav = () => {
        setActive('navbar activeNavbar')
    }

    const removeNav = () => {
        setActive('navbar')
    }

  return (
    <section className="navbarSection">
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon" />Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink">Pacotes</a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink">Loja</a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink">Sobre</a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink">Páginas</a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink">Novidades</a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink">Contato</a>
                    </li>

                    <button className="btn">
                        <a href="#">Reserve Agora</a>
                    </button>
                </ul>

                <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className="icon" />
                </div>

            </div>

            <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
            </div>

        </header>
    </section>
  )
}

export default Navbar
