export default function Block (props) {
    return (
        <div className="ktq4 hover:bg-neyred-100 transition duration-500">
          <a href="#">
          <h3 className="pt-3 font-semibold text-lg text-white">
            {props.title}
          </h3>
          <p className="pt-2 value-text text-md text-gray-200 ">
            {props.description}
          </p>
          </a>
        </div>
    )
}