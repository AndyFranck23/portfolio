import React, { useEffect, useRef, useState } from 'react'
import image from "../assets/pdp1Prime.png"
import tailwind from "../assets/tailwind.svg"
import codeigniter from "../assets/codeigniter.svg"
import logomysql from "../assets/mysql.svg"
import sudoku from "../assets/imgSudoku.jpg"
import book from "../assets/book.jpg"
import gateau from "../assets/gateau.jpg"
import ardesign from "../assets/ardesign.jpg"
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export const NavComponent = () => {
    useEffect(() => {
        // Remettre le scroll en haut de la page lors du rendu initial
        window.scrollTo(0, 0);
    }, []);

    // Fonction pour défiler vers une section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Helmet>
                <title>Andy Franck PortFolio</title>
                <meta name='description' content='Découvrez mon portfolio avec mes projet et mes compétences' />
                <link rel="canonical" href="https://andy23portfolio.netlify.app/Home" />
            </Helmet>
            <div className="sm:text-md bg-background bg-auto bg-cover bg-contain">
                <div className="fixed w-full top-0 left-0 scroll-smooth z-50">
                    <div className="flex justify-between py-2 px-2 items-center text-md sm:text-lg h-[50px] bg-black/10 backdrop-blur-sm blakdrop-opacity-20 shadow-md animate-nav">
                        <h1 href='#' className='font-bold'>Andy F.</h1>
                        <div className="flex justify-between items-center w-[230px]">
                            <button onClick={() => scrollToSection("projet")} >
                                Projet
                            </button>
                            <button onClick={() => scrollToSection("contact")} >
                                Contact
                            </button>
                            <a href='https://github.com/AndyFranck23' className='bg-[#0081A7] px-3 py-1 rounded-[50px] text-white shadow-xl hover:bg-white hover:border-2 hover:border-[#0081A7] hover:text-[#0081A7] '>
                                <i className='fa-brands fa-github text-xl'></i> Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sm:border-b-2">
                    <div className="sm:flex block justify-between items-center p-5 pt-10">
                        <div className="border-b-4 mb-4 animate-imageProfil">
                            <img src={image} className='right sm:w-[600px] h-[300px]' />
                        </div>
                        <h1 className='text-black animate-textProfil'>
                            Hello world, Je m'appelle <br /><span className='text-2xl font-bold text-[#0081A7] '>Andy Franck</span><br /><p className='text-xl font-[600]'>Développeur FullStack JavaScript</p> <br /> Le develeppement informatique
                            est pour moi l'une de mes patient et je suis pret à realiser tout projet et améliorer mes compétences.
                        </h1><br />
                    </div>
                    <div className="px-2 animate-body">
                        <div id='projet' className="sm:flex justify-center items-center">
                            <div className="sm:w-[450px]">
                                <div className="flex justify-around items-center bg-white py-4 px-1 rounded-2xl">
                                    <a href='mailto:ironmanandy23@gmail.com' className='border border-[#0081A7] border-2 py-2 px-3 rounded-[15px] hover:bg-[#0081A7] hover:text-white '><i className='fa fa-envelope text-xl'></i>  Contact</a>
                                    <a href='https://www.linkedin.com/in/andy-franck-rakotoarimanitra-a368092bb/'
                                        className='border border-[#0081A7] border-2 py-2 px-3 rounded-[15px] hover:bg-[#0081A7] hover:text-white'><i className='fa-brands fa-linkedin text-xl'></i> LinkedIn</a>
                                    <a href='/CV.pdf' download="andyCV.pdf" className='border border-[#0081A7] border-2 py-2 px-3 rounded-[15px] hover:bg-[#0081A7] hover:text-white'><i className=' animate-bounce fa-solid fa-download text-xl'></i> CV</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[50px] font-[600]">
                            <div className="flex justify-center">
                                <div className="text-black">
                                    <p className='text-[40px] border-b-4 border-[#0081A7] flex justify-center mb-20'>Projets</p>
                                </div>
                            </div>
                            <ListProjet />
                        </div>
                        <div className="mt-[50px] font-[600]">
                            <div id='competences' className="flex justify-center">
                                <div className="text-white-100">
                                    <p className='text-[40px] border-b-4 border-[#0081A7] flex justify-center'>Compétences</p>
                                    <p className='text-lg  mb-20'>Mes principales technologies</p>
                                </div>
                            </div>
                            <Competence />
                        </div>
                        <div id='contact' className="mt-[50px] font-[600] ">
                            <div id='contact' className="flex justify-center">
                                <div className="text-black">
                                    <p className='text-[40px] border-b-4 border-[#0081A7] flex justify-center'>Contact</p>
                                    <p className='text-lg mb-20 text-center'>N'hésitez pas à me contacter pour <br /> toute demande ou quesion</p>
                                </div>
                            </div>
                            <Contact />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export const ListProjet = () => {
    return (
        <div className="sm:flex justify-center">
            <div className="sm:w-500px">
                <Projet lien={"https://andyfranck23.github.io/sudoku/"} git={"https://github.com/AndyFranck23/sudoku/tree/master"} image={sudoku} titre={"Sudoku"} description={"Un jeu de logique où l’on remplit une grille de 9x9 cases avec les chiffres de 1 à 9"} >
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>react</p>
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>tailwind</p>
                </Projet>
                <Projet git={"https://github.com/AndyFranck23/librairy/tree/master"} className="-ml-[50px] " image={book} titre={"Gestion de Bibliothèque"} description={"Une application conçue pour organiser et gérer les livres, les emprunts, les retours."} >
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>CodeIgniter</p>
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>Bootstrap</p>
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>css</p>
                </Projet>
                <Projet git={"https://github.com/AndyFranck23/cake/tree/master"} className="-ml-[50px] " image={gateau} titre={"Vente de Pâtisserie"} description={"Un projet qui permet de gérer et automatiser la vente de pâtisseries."} >
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>php</p>
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>css</p>
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>mysql</p>
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>JavaScript</p>
                </Projet>
                <Projet git={"https://github.com/AndyFranck23/ARDesign"} image={ardesign} titre={"AR Design"} description={"Une application mobile qui fait la vente des meubles intérieur."} >
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>ReactNative</p>
                    {/* <p className='bg-black/30 px-2 py-0 rounded-2xl'>css</p> */}
                    <p className='bg-black/30 px-2 py-0 rounded-2xl'>python</p>
                </Projet>
            </div>
        </div>
    )
}

export const Projet = ({ titre, description, image, lien, git, className, children }) => {
    return (
        <div className="overflow-hidden h-[150px] mb-5 rounded-2xl w-full sm:w-[600px] bg-black/15 backdrop-blur-sm blakdrop-opacity-20 shadow-lg py-2 pr-2 sm:pr-5 flex justify-between">
            <div className="flex items-center">
                <img src={image} alt="" className={`${className} rounded-[100%] w-[200px] h-[200px] bg-black mr-2 sm:mr-5 -ml-5 sm:w-[220px] sm:h-[250px]`} />
                <div className="font-normal">
                    <p className='font-bold text-white text-lg'>{titre}</p>
                    <p className='text-sm text-white w-[170px] h-[50px] '>{description}</p>
                    <div className="flex justify-between text-white text-xs sm:text-sm space-x-2">
                        {children}
                    </div>
                </div>
            </div>
            <div className="">
                <div className=" text-2xl text-black/30 flex items-center justify-between">
                    <a href={git}>
                        <i className='fa-brands fa-github mr-3'></i>
                    </a><br />
                    <a href={lien}>
                        <i className='fa-solid fa-play'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}


export const Competence = () => {
    return (
        <div className="sm:flex block justify-around text-white space-y-5 sm:space-y-0">
            <div className="display-none sm:display-block sm:flex">
                <div className="display-none sm:display-block sm:space-x-5">
                    <div className="sm:h-[130px] sm:w-[310px] bg-black/15 backdrop-blur-sm blakdrop-opacity-20 border-2 border-[#0081A7] px-5 py-2 sm:w-[300px] rounded-md mb-5">
                        <p className='text-lg font-bold flex justify-center mb-2 sm:mb-2'>Front-end</p>
                        <div className="flex items-center font-[300] justify-around">
                            <div className="space-y-3">
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><i className='fa-brands fa-react text-2xl mr-2'></i> React</p>
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><i className="fa-brands fa-html5 text-2xl mr-2"></i> Html</p>
                            </div>
                            <div className="space-y-3">
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><img src={tailwind} className='w-[25px] h-[25px] text-white mr-1' /> tailwindcss</p>
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><i className="fa-brands fa-css3-alt text-2xl mr-2"></i> css</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:h-[130px] sm:w-[310px]  bg-black/15 backdrop-blur-sm blakdrop-opacity-20 border-2 border-[#0081A7] px-5 py-2 sm:w-[300px] rounded-md mb-5">
                        <p className='text-lg font-bold flex justify-center mb-2 sm:mb-2'>Back-end</p>
                        <div className="flex items-center font-[300] justify-around">
                            <div className="space-y-3">
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><i className="fa-brands fa-node-js text-2xl mr-2"></i> Node.js</p>
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><i className="fa-brands fa-php text-2xl mr-2"></i> PHP</p>
                            </div>
                            <div className="space-y-3">
                                <p className='bg-black/30 px-2 py-1 rounded-2xl flex items-center'><img src={codeigniter} className='w-[25px] h-[25px] text-white mr-1' /> CodeIgniter</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="display-none sm:display-block sm:space-x-5">
                    <div className="sm:h-[130px] sm:w-[310px]  bg-black/15 backdrop-blur-sm blakdrop-opacity-20 border-2 border-[#0081A7] px-5 py-2 sm:w-[300px] rounded-md mb-5">
                        <p className='text-lg font-bold flex justify-center mb-2 sm:mb-2'>Mobile</p>
                        <div className="flex items-center font-[300] justify-around">
                            <div className="space-y-3">
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><i className='fa-brands fa-react text-2xl mr-2'></i> React Native</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:h-[130px] sm:w-[310px] bg-black/15 backdrop-blur-sm blakdrop-opacity-20 border-2 border-[#0081A7] px-5 py-2 sm:w-[300px] rounded-md mb-5">
                        <p className='text-lg font-bold flex justify-center mb-2 sm:mb-2'>Autres</p>
                        <div className="flex items-center font-[300] justify-around">
                            <div className="space-y-3">
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><i className="fa-brands fa-github text-2xl mr-2"></i> Git</p>
                                <p className='bg-black/30 px-2 py-0 rounded-2xl flex items-center'><img src={logomysql} className='w-[30px] h-[30px] text-white mr-2' /> MySQL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className="flex justify-center mt-[60px] bg-black py-2 text-white">
            <p className='text-center'><span className='font-bold'><i className="fa-regular fa-copyright text-md"></i> Andy Franck |</span> Développeur FullStack JavaScript</p>
        </footer>
    )
}

export const Contact = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[300px] sm:w-[400px] space-y-5 ">
                <div className="flex justify-around items-center">
                    <a href="mailto:ironmanandy23@gmail.com" className='bg-white border-2 border-[#0081A7] hover:bg-[#0081A7] hover:text-white text-[#0081A7] font-[300] rounded-md py-2 px-4'><i className="fa-solid fa-envelope text-xl"></i> Contactez-moi</a>
                    <a href="https://www.linkedin.com/in/andy-franck-rakotoarimanitra-a368092bb/" className='bg-white border-2 border-[#0081A7] hover:bg-[#0081A7] hover:text-white text-[#0081A7] font-[300] rounded-md py-2 px-4'><i className='fa-brands fa-linkedin text-xl'></i> Linkedin</a>
                </div>
                <div className="flex justify-around items-center">
                    <a href="https://github.com/AndyFranck23" className='bg-white border-2 border-[#0081A7] hover:bg-[#0081A7] hover:text-white text-[#0081A7] font-[300] rounded-md py-2 px-4'><i className='fa-brands fa-github text-xl'></i> Github</a>
                    <a href="https://www.facebook.com/andy.rakotoarimanitra" className='bg-white border-2 border-[#0081A7] hover:bg-[#0081A7] hover:text-white text-[#0081A7] font-[300] rounded-md py-2 px-4'><i className="fa-brands fa-facebook text-xl"></i> Facebook</a>
                </div>
            </div>
        </div>
    )
}

export const HelloWorld = () => {
    const [lettres, setLettres] = useState([])
    const [time, setTime] = useState(0)
    const text = "Hello world, Je m'appelle Andy et je suis un développeur fullStack JavaScript"
    const navigate = useNavigate();

    const Home = () => {
        navigate("/Home");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLettres((prevLettres) => {
                const nextIndex = prevLettres.length
                setTime(nextIndex)
                if (nextIndex < text.length) {
                    return [...prevLettres, text[nextIndex]]
                } else {
                    clearInterval(interval)
                    return prevLettres
                }
            })
        }, 100);
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <Helmet>
                <title>Andy PortFolio</title>
                <meta name='description' content='Découvrez mon portfolio Andy' />
                <link rel="canonical" href="https://andy23portfolio.netlify.app/" />
            </Helmet>
            <div className="flex justify-center items-center text-black h-screen w-screen bg-background bg-auto bg-cover bg-contain">
                <div className="">
                    <div className="relative inline-block p-4 m-4">
                        <div className="absolute top-0 left-0 border-t-8 border-l-8 border-blue-500 w-10 h-8"></div>
                        <div className="absolute border-b-8 border-r-8 border-blue-500 w-10 h-8 right-0 bottom-0 w-10 h-8"></div>
                        <div className='relative text-black font-bold '>{
                            lettres.map((lettre, i) => (
                                <span key={i}>{lettre}</span>
                            ))
                        }</div>
                    </div>
                    {time == 77 ? <MyButton click={Home} /> : ""}
                </div>
            </div>
        </>
    )
}

export const MyButton = ({ click }) => {
    return (
        <div className="flex justify-center items-center text-white">
            <button className='py-2 px-6 bg-blue-600' onClick={click}>
                Entrer
            </button>
        </div>
    )
}
