interface Props{
    music?: string
    desc?: string
    img?: string
    type?: string
}


const MusicItem = ({music, desc, img, type}: Props) => {

    return(
        <button className={type}>
            <img src={img}/>
            <h4>{music}</h4>
            <p>{desc}</p> 
        </button>
    )
}

export default MusicItem