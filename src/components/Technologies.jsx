
export default function Technologies({children, icon}){

    return (
        <div>
            <h3>{children}</h3>
            <img src={icon} alt={children} />
        </div>
    )
}