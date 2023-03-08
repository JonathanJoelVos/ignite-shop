import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Logo from "src/assets/logoIgnite.svg"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  
  return (
     <Container>
      <Header>
        <Image 
          src={Logo}
          alt="Logo"
          width={130}
          height={52}
        />
      </Header>
       <Component {...pageProps} /> 
     </Container>
  )
}
