import Image from "next/image";
import infoGraph from "@/assets/comparativo_img_CTA.png" 

export default function CallToAction(): JSX.Element {

    return (
        <section>
            <Image src={infoGraph} alt="Infográfico Leadster"/>
        </section>
    )

}