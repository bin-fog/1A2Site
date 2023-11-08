export default function Question (props) {
    let res = props.answers.map(function(item){
        return (
            <p className="pt-2 text-left value-text text-md text-gray-100">
                <input name={props.id} type="radio" /> {item}
            </p>
        )
    });
    return (
        <>
        <h1 className="mb-5 mt-9 text-2xl font-semibold text-gray-200">
              {props.question}
        </h1>
        <div className="ml-20 pl-20">
            {res}
        </div>
        </>
    )
}