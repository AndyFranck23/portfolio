'use client'
export const MyButton = ({ click }) => {
    return (
        <div className="flex justify-center items-center text-white">
            <a className='py-2 px-6 bg-blue-600' href={click}>
                Entrer
            </a>
        </div>
    )
}