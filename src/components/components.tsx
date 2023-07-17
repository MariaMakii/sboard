import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: 1px solid rgb(111, 62, 209);
  display: block;
  box-sizing: border-box;
  padding: 10px 22px;
  margin: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 4px inset;
  text-align: center;
  cursor: pointer;
  background-color: rgb(236, 233, 251);
  font-family: Corbel, serif;
  color: rgb(111, 62, 209);
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
`

export const Container = styled.div`
  width: fit-content;
  padding: 25px;
  border: 2px solid rgb(111, 62, 209);
  border-radius: 1rem;
  background-color: #f4e3ff;
`

export const Header = styled.h1`
  color: #2e0341;
`

export const Input = styled.input`
  border: 1px solid rgb(111, 62, 209);
  display: block;
  box-sizing: border-box;
  padding: 10px 22px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 4px inset;
  text-align: center;
  cursor: pointer;
  background-color: rgb(236, 233, 251);
  color: rgb(111, 62, 209);
  font-family: Corbel, serif;
`

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #a29dff;
`