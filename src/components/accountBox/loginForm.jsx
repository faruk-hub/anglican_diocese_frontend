import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <label for="email">Email</label>
        <Input type="email" name="email"/>
        {/* <Input type="password" placeholder="Password" /> */}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      {/* <MutedLink href="#"></MutedLink> */}
      <Marginer direction="vertical" margin="1em" /> 
      {/* <Marginer direction="vertical" margin="1.6em" /> */}
      <SubmitButton type="submit" name="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <Marginer direction="vertical" margin="1em" />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
