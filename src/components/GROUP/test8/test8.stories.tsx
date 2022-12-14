import { Meta, Story } from '@storybook/react/types-6-0'


import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { S_Test8 } from './S.test8'

export default {
  title: 'components/group/test8',
  
  
} as Meta

const _S_Test8 = styled.div`
  ${({theme}) => css`
    ${S_Test8}
  `}
`


export const Template: Story = (args) => (
	<_S_Test8>
		<h1>Conteudo</h1>
	</_S_Test8>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}