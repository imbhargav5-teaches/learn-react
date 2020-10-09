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




  return (
    <div className="relative" ref={dropdownMenuRef} >
        <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 dropdown-btn" onClick={isDropdownOpen ? hideDropdown : showDropdown}>{selected}</button>
        {
            isDropdownOpen && <div style={{
                top: "100%",
                left: 0,                
            }} className="w-32 mt-2 shadow-md border border-gray-400 absolute inset bg-white cursor-pointer">
            {list.map((option) => (
                <p
                onClick={() => updateSelectedOption(option)}
                className={selected === option ? "bg-indigo-400 text-white p-2 " : "p-2 hover:bg-gray-200"}
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
