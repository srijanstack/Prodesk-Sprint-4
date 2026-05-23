function Input({ name, id, placeholder }) {
  return (
    <>
      <div>
        <label className="font-medium" htmlFor={`${id}`}>
          {name}
        </label>
        <input
          placeholder={`${placeholder}`}
          className="p-2 h-12 w-120 border-gray-400 border rounded-xl outline-purple-500 block"
          type="text"
          name={`${id}`}
          id={`${id}`}
        />
      </div>
    </>
  );
}

export default Input;
