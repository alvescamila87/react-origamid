const Checkbox = ({options}) => {
    return (
        <div>
            {options.map((option) => (
                <label>
                    <input type="checkbox" value={option}/> {option}
                </label>
            ))}
        </div>
    )
}

export default Checkbox