import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import Camisa1 from "src/assets/Camisa-Maratona 1.png"
import {useKeenSlider} from "keen-slider/react"

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image 
          src={Camisa1}
          alt="Camisa"
          height={520}
        />
        <footer>
          <strong>Camisa Maratona</strong>
          <span>R$ 50,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image 
          src={Camisa1}
          alt="Camisa"
          height={520}
        />
        <footer>
          <strong>Camisa Maratona</strong>
          <span>R$ 50,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image 
          src={Camisa1}
          alt="Camisa"
          height={520}
        />
        <footer>
          <strong>Camisa Maratona</strong>
          <span>R$ 50,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image 
          src={Camisa1}
          alt="Camisa"
          height={520}
        />
        <footer>
          <strong>Camisa Maratona</strong>
          <span>R$ 50,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
