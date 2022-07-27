

const Button = ({ title, handleAction })=>{

    return(
        <>
        <button onClick={ handleAction }  >
        {title}
        </button>
        </>
    )
}

export default Button;