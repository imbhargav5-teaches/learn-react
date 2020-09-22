import React, { useState, useEffect, useRef } from "react";

function Dropdown({ list, initialValue, onChange }) {
  const [selected, setSelected] = useState(initialValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function showDropdown(){
      setIsDropdownOpen(true)
  }

  function hideDropdown(){
    setIsDropdownOpen(false)

}


  function updateSelectedOption(option){
      setSelected(option)
      onChange(option);
  }
  const dropdownMenuRef = useRef();


    useEffect(() => {
      function handleClick(event){
          console.log(dropdownMenuRef.current);
        if(dropdownMenuRef && dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)){
            hideDropdown();
        }
      };
      document.addEventListener("click", handleClick)
      return () => {
        document.removeEventListener("click",handleClick);
      }
    },[]);



  console.log(selected)

  return (
    <div className="mb-64 relative" ref={dropdownMenuRef} >
        <button className="p-2" onClick={isDropdownOpen ? hideDropdown : showDropdown}>Selected option = {selected}</button>
        {
            isDropdownOpen && <div style={{
                top: "100%",
                left: 0,
            }} className="w-32 shadow absolute inset bg-white">
            {list.map((option) => (
                <p
                onClick={() => updateSelectedOption(option)}
                className={selected === option ? "text-indigo-400 p-2" : "p-2"}
                key={option}
                >
                {option}
                </p>
            ))}
            </div>
        }
    </div>
  );
}

export default Dropdown;
