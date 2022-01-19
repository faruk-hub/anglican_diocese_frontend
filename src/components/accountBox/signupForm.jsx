import React, { useContext } from "react";
import {
  BoldLink,
  Box,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Option,
  Select,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <Box>
      <FormContainer>
      <Marginer direction="vertical" margin={10} />
      <label for="password">Nomenclature</label>
      <Select
      name="Nomenclature"
      id="Nomenclature">
        <Option></Option>
        <Option value="most-revd">Most Revd.</Option>
        <Option value="Rt. Revd">Rt. Revd.</Option>
        <Option value="Ven">Ven.</Option>
        <Option value="Can">Can.</Option>
        <Option value="Revdd">Revd.</Option>
        <Option value="Barr.">Barr..</Option>
        <Option value="Justice">Justice.</Option>
        <Option value="Dr">Dr.</Option>
        <Option value="Mrs"> Mrs.</Option>
        <Option value="Mr.">Mr.</Option>
        <Option value="Other please specif">Other please specify</Option>
      </Select>
      <label for="surname">Surname</label> 
      <Input type="text" id="surname" name="surname" />
      <label for="firstname">Firstname</label> 
      <Input type="text" id="firstname" name="firstname" />
       
      <Marginer direction="vertical" margin={10} />
      <label for="email">Email</label>
      <Input type="text" id="email" name="email" />
      <Marginer direction="vertical" margin={10} />
      <label for="phone">Phone Number</label>
      <Input type="tel" id="phone" name="phone" />
      <Marginer direction="vertical" margin={10} />
      <label for="password">Diocese</label>
      <Select
      name="diocese"
      id="diocese">
        <Option></Option>
        <Option value="Diocese jos">Diocese of Aba</Option>
        <Option  value="Diocese jos">Diocese of Aba Ngwa North</Option>
        <Option value="Diocese jos">Diocese of Abakaliki</Option>
        <Option value="Diocese jos">Diocese of Abuja</Option>
        <Option value="Diocese jos">Diocese of Afikpo</Option>
        <Option value="Diocese jos">Diocese of Aguata</Option>
        <Option value="Diocese jos">Diocese of Ahoada</Option>
        <Option value="Diocese jos">Diocese of Ajayi Crowther</Option>
        <Option value="Diocese jos">Diocese of Akoko</Option>
        <Option value="Diocese jos">Diocese of Akoko Edo</Option>
        <Option value="Diocese jos">Diocese of Akure</Option>
        <Option value="Diocese jos">Diocese of Amichi</Option>
        <Option value="Diocese jos">Diocese of Arochukwu/Ohafia</Option>
        <Option value="Diocese jos">Diocese of Asaba</Option>
      </Select>
      <label for="password">Province</label>
      <Select
      name="Province"
      id="baba">
        <Option></Option>
        <Option value="Angware">Angware</Option>
        <Option value="Angware">Angware</Option>
        <Option value="Angware">Angware</Option>
        <Option value="Angware">Angware</Option>
        <Option value="Angware">Angware</Option>


      </Select>
      <Marginer direction="vertical" margin={10} />
      <label for="password">House</label>
      <Select
      name="House"
      id="baba">
        <Option></Option>
        <Option value="Bishops">Bishops</Option>
        <Option value="Clergy">Clergy</Option>
        <Option value="Laity"> Laity</Option>
        <Option value="bishops-wife">bishops wife</Option>
        <Option value="women-reps">women reps</Option>


      </Select>
      <Marginer direction="vertical" margin={10} />
     <label for="passport">Uplode Passport</label>
     <Input type="file" name="file" ></Input>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" name="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="0" />
      <MutedLink href="#">
        Already started Registarton?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </Box>
  );
}
