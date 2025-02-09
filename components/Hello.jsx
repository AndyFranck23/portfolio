'use client'

import { useEffect, useState } from "react"
import { MyButton } from "./MyButton"

const Hello = () => {
    const [lettres, setLettres] = useState([])
    const [time, setTime] = useState(0)
    const text = "Hello world, Je m'appelle Andy et je suis un développeur fullStack JavaScript"

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
            <div className="flex justify-center items-center text-black h-screen w-screen bg-background bg-auto bg-cover bg-contain">
                <div className="">
                    <div className="relative inline-block p-4 m-4">
                        <div className="absolute top-0 left-0 border-t-8 border-l-8 border-blue-500 w-10 h-8"></div>
                        <div className="absolute border-b-8 border-r-8 border-blue-500 w-10 h-8 right-0 bottom-0 w-10 h-8"></div>
                        <div className='relative text-black font-bold'>
                            {
                                lettres.map((lettre, i) => (
                                    <span key={i}>{lettre}</span>
                                ))
                            }
                        </div>
                    </div>
                    {time === text.length ? <MyButton click={"/Home"} /> : ""}
                </div>
            </div>
        </>
    )
}

export default Hello;
