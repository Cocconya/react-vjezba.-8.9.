const ConditionalRendering = (props) => {
    const veciBroj = <p>je veci od 5</p>
    const manjiBroj = <p>je manji od 5</p>
    const provjera = props.number > 5 ? veciBroj : manjiBroj
    return (
      <>
        <h1>ConditionalRendering {props.number}</h1>
        {provjera}
      </>
    )
  }
  
  export default ConditionalRendering