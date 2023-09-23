const Input = ({ label, id, placeholder, name, required, value, onChange }) => {
  return (
    <div className="flex flex-col font-biryani text-center">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        type="text"
        name={name ? name : id}
        id={id}
        required={!required ? false : required}
        placeholder={placeholder ? placeholder : null}
        className={
          "py-2 px-3 mt-1 mb-4 border-solid border-black border-[0.5px] opacity-80 rounded-md outline-none" +
          "active:hover:border-1 valid:border-success valid:border-2"
        }
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
