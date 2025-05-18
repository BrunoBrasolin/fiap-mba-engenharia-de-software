"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "../../lib/components/Input";
import { Button } from "../../lib/components/Button";
import { Typography_H1, Typography_H3 } from "../../lib/utils/typography";
import logo from "../../public/wayne_enterprises.png";
import gotham from "../../public/gotham.png";
import vector from "../../public/vector.png";
import arrow from "../../public/arrow.png";
import lock from "../../public/lock.png";
import { Container, TitleContainer, VectorImage, GothamImage, FormContainer } from "./styles";
import { Spacings } from "../../lib/utils/spacings";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [pwdError, setPwdError] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<string | undefined>();

  const handleSubmit = () => {
    let error: boolean = false;
    if (!email) {
      setEmailError("Favor preencher um e-mail válido");
      error = true;
    }
    if (!password) {
      setPwdError("Favor preencher uma senha válida");
      error = true;
    }
    if (error) return;

    alert('Ainda não implementado :(');
  };

  return (
    <>
      <Container>
        <Image src={logo} alt="Logo" width={Number(Spacings.s10.replace(".px", ""))} height={169} />

        <TitleContainer>
          <Typography_H1>Gotham Tech Solutions</Typography_H1>
          <Typography_H3>
            O caos digital está lá fora.
            <br />
            Aqui dentro, você tem o controle. 🦇
          </Typography_H3>
        </TitleContainer>

        <FormContainer>
          <Input
            label="E‑mail"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(undefined);
            }}
            error={emailError}
            value={email}
          />

          <Input
            label="Senha"
            type={showPwd ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (pwdError) setPwdError(undefined);
            }}
            error={pwdError}
            rightIcon={lock}
            onClickIcon={() => {
              if (!pwdError) setShowPwd((v) => !v);
            }}
          />
        </FormContainer>

        <Button
          text="Acessar BatSistema"
          buttonstyle="default"
          rightIcon={arrow}
          onClick={handleSubmit}
        />
      </Container>

      <GothamImage src={gotham} alt="Gotham" width={689} height={218} />
      <VectorImage src={vector} alt="Vector" />
    </>
  );
}
