import React, {useState} from 'react';

// const jobData = {
//     "id": 1,
//     "title": "Director of Sales",
//     "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
//   }

function Job(props) {
    const {jobItem} = props;
    const {title, description} = jobItem
     
    const [showDescription, setShowDescription] = useState(false);
    
    function enableShowDescription(){
        setShowDescription(true)
    }

    return (
        <div onClick={enableShowDescription} className="job leading-5">
            <h1 className="mb-2">{title}</h1>
            {showDescription ? <p className="text-xs text-gray-700"> {description}</p> : null}
        </div>
    );
}

export default Job;