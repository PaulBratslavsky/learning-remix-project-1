import LinkStyled from '~/components/LinkStyled'

export default function() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <h2>Our Posts will go here</h2>
      <LinkStyled to="/">Go back to home Page</LinkStyled>
    </div>
  )
}
