import React from 'react'
import { VagaContainer, VagaTitulo, VagaLink } from './styles'

type VagaProps = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga: React.FC<VagaProps> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}) => {
  return (
    <VagaContainer className="vaga">
      <VagaTitulo className="vagaTitulo">{titulo}</VagaTitulo>
      <p>
        {localizacao} - {nivel} - {modalidade}
      </p>
      <p>
        Salário: R${salarioMin} - R${salarioMax}
      </p>
      <p>Requisitos: {requisitos.join(', ')}</p>
      <VagaLink href="#">Saiba mais</VagaLink>
    </VagaContainer>
  )
}

export default Vaga
