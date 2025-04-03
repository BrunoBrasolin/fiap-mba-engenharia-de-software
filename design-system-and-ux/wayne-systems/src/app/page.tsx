import Image from "next/image";
import { Button } from "../../lib/components/Button";
import { Typography_H1, Typography_H3 } from "../../lib/utils/typography";
import logo from '../../public/wayne_enterprises.png'
import gotham from '../../public/gotham.png'
import vector from '../../public/vector.png'
import { Container, GothamImage, TitleContainer, VectorImage } from "./styles";

export default function Home() {
  return (
    <>
      <Container>
        <Image src={logo} alt='Logo' width="415" height="169" />
        <TitleContainer>
          <Typography_H1 className="title">Gotham Tech Solutions</Typography_H1>
          <Typography_H3 className="subtitle">
            O caos digital está lá fora.
            <br />
            Aqui dentro, você tem o controle. 🦇
          </Typography_H3>
        </TitleContainer>
        <Button className="button" text="Acessar BatSistema" buttonstyle="default" rightIcon={false} />
      </Container>
      <GothamImage src={gotham} alt='Gotham' width="689" height="218" />
      <VectorImage src={vector} alt='Vector' />
    </>
  );
}

