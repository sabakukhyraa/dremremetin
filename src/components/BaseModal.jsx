export default function BaseModal({state, title, text, closer}) {
  return (
    <div className={`fixed z-[100000] top-0 left-0 w-full h-full bg-black bg-opacity-5 backdrop-blur flex justify-center items-center ${state ? "block" : "hidden"}`}>
      <div className={`w-full h-full md:w-1/2 md:h-2/3 bg-sky-100 md:rounded-lg z-[100001]`}>
        <button onClick={closer}>X</button>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
