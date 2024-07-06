interface Props{
    quote:string,
    quoteCredit:string
}

function Figure({quote,quoteCredit}:Props){
    return (
      <>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {quoteCredit} <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </>
    );
}
export default Figure