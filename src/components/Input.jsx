function Input({ name, id, ...rest }) {
  return (
    <>
      <div>
        <label className="font-medium" htmlFor={`${id}`}>
          {name}
        </label>
        <input
          className="p-2 h-12 w-120 border-gray-400 border rounded-xl outline-purple-500 block"
          type="text"
          name={`${id}`}
          id={`${id}`}
          {...rest}
        />
      </div>
    </>
  );
}

export default Input;
