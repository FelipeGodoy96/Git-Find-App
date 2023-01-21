import "./styles.css"

export const Input = ({onChange, placeholder}) => {
    return (
        <input onChange={onChange} placeholder={placeholder}/>
    )
}