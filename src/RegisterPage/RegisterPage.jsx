import React, {useState} from 'react'
import NavbarSection from '../Components/NavbarSection/NavbarSection';
import Register from '../Components/Register/Register';
import FooterSection from '../Components/FooterSection/FooterSection';

const RegisterPage = () => {
  const [register, setRegister] = useState(true);
  const setCurrentRegis = (x) => {
    setRegister(()=> x)
  }
  return (
    <>
      <NavbarSection regis={true} redirect={register}/>
      <Register register={register} setCurrentRegis={setCurrentRegis}/>
      <FooterSection />
    </>
  )
}

export default RegisterPage
