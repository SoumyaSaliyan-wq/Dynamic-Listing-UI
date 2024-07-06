interface Props{
    image:string,
    text:string,
    title:string
}

function Card({image,text,title}:Props){
    return (
      <>
        <div className="card">
          <img src={image} width="100%" height="500"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {text}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
}
export default Card