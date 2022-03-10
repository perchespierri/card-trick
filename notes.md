pegar a stack clicada
trocar ela de lugar com a middleStack
juntar essas stacks em um novo deck
cortar esse novo deck em outras 3 stacks
mandar essas 3 stacks pra cada <Stack />
repetir isso até count = 3
juntar essas stacks em um novo deck
mostrar a décima primeira carta (do começo ou do fim?)



<Stack stack={ initialStack } onClick={handleClick} /> 

export default function Stack({ stack, onClick }) {
  return (
    <ul className='Stack'>
      {stack.map(card => (
        <Card 
          key={`${card.value} of ${card.suit}`}
          card={ card }
          onClick={ () => onClick('initial') }
        />
      ))}
    </ul>
  )
}
