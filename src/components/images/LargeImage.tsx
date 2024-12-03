import Image from "next/image";

export default function LargeImage(props: {src: string, alt: string}) {
    return (
        <Image src={props.src} alt={props.alt} width={460} height={652} />
    )
}