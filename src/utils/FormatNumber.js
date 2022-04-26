const FormatNumber = ({number}) => {
    return <span>${new Intl.NumberFormat('en-US').format(number)}</span>
}

export default FormatNumber;