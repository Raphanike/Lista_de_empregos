import styled from 'styled-components'

export const Form = styled.form.attrs(() => ({
  role: 'form'
}))<React.ComponentPropsWithoutRef<'form'>>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Campo = styled.input.attrs(() => ({
  type: 'text'
}))<React.ComponentPropsWithoutRef<'input'>>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`

export const BtnPesquisar = styled.button.attrs(() => ({
  type: 'button'
}))<React.ComponentPropsWithoutRef<'button'>>`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
