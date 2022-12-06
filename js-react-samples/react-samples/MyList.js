export default function NumberList(props){
    const numbers = props.numbers;
    const ListItems = numbers.map( (number)=>
        <li key = {number.toString()}>
            {number}
        </li>
    )
    return(
        <ul>{ListItems}</ul>
    )
}