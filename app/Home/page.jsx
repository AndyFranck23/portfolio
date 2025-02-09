import Container from "@/components/Container"

export const metadata = {
    title: "Andy Franck",
    description: "Je m'appel Andy Franck et découvrez mon portfolio avec mes projet et mes compétences",
};

// export async function generateMetadata() {
//     const response = await fetch(`https://botia.ai/api/offres`)
//     const data = await response.json()
//     return {
//         title: data[0].title,
//         description: JSON.parse(data[0].descriptionOC)
//     }
// }

const page = () => {

    return (
        <>
            <Container />
        </>
    )
}

export default page