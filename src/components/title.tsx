interface Props {
    img?: string
    name?: string
    title?: string
    desc?: string
}

function Title({img, name, title, desc}:Props){
    return(
        <div className="title">
            <img src={img}/>
            <h4>{desc}</h4>
            <h1>{title} {name}</h1>
        </div>
    )
}

export default Title