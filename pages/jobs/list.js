import React, {useState, useEffect, useRef} from 'react';
import Dropdown from '../../components/Dropdown';
import Job from '../../components/Job'


const data = [{
    "id": 1,
    "title": "Quality Engineer",
    "tags": ["React", "Marketing"],
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "featured": true
  }, {
    "id": 2,
    "title": "Actuary",
    "tags": ["React", "Angular"],
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "featured": false
  }, {
    "id": 3,
    "title": "Human Resources Assistant IV",
    "tags": ["Marketing"],
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    "featured": true
  }, {
    "id": 4,
    "title": "Administrative Officer",
    "tags": ["Vue"],
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "featured": true
  }, {
    "id": 5,
    "title": "Financial Advisor",
    "tags":  ["React", "Vue"],
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "featured": true
  }, {
    "id": 6,
    "title": "Structural Engineer",
    "tags": ["Vue", "Marketing"],
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "featured": true
  }, {
    "id": 7,
    "title": "Budget/Accounting Analyst I",
    "tags": ["React", "Vue"],
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    "featured": false
  }, {
    "id": 8,
    "title": "Paralegal",
    "tags": [ "Angular", "Vue"],
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "featured": false
  }, {
    "id": 9,
    "title": "Systems Administrator IV",
    "tags": ["Marketing", "Angular",],
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "featured": false
  }, {
    "id": 10,
    "title": "VP Quality Control",
    "tags": ["React", "Marketing", "Angular", "Vue"],
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    "featured": false
  }]


  function JobsListDisplay(props){
    const {list} = props;
    return list.map(jobItem => <Job jobItem={jobItem} key={jobItem.id} />)
  }



  function TabButton({tabName, setSelectedTab, selectedTab}){
    let className = "button border mr-1 mb-1 px-4 py-2 rounded"
    const isSelected = selectedTab === tabName;
    if(isSelected){
      className = className + " " + "bg-blue-400 text-white"
    }
    return <button className={className} onClick={(event) => setSelectedTab(tabName)}>{tabName}</button>
  }

function Tabs(props){
  const {setSelectedTab, selectedTab, children} = props;

  return <div className="">    
    <div className="tabs-list pb-2">
      <TabButton setSelectedTab={setSelectedTab} selectedTab={selectedTab} tabName="All"/>
      <TabButton setSelectedTab={setSelectedTab} selectedTab={selectedTab} tabName="React"/>
      <TabButton setSelectedTab={setSelectedTab} selectedTab={selectedTab} tabName="Marketing"/>
      <TabButton setSelectedTab={setSelectedTab} selectedTab={selectedTab} tabName="Angular"/>
      <TabButton setSelectedTab={setSelectedTab} selectedTab={selectedTab} tabName="Vue"/>
    </div>
    <div className="tabs-panel">
      {children}
    </div>
  </div>
}


function useInputState(initalInputValue){
  const [inputState, setInputState] = useState(initalInputValue) 
  const value = inputState 
  function onChange(event){
    return setInputState(event.target.value);
  }
  return {
    value,
    onChange
  }
}

function useCheckboxState(){
  const [value, setValue] = useState(false);
  function onChange(event){
    setValue(event.target.checked)
  }
  return {
    value,
    onChange
  }
}

function useDocumentTitle(title, deps){
  useEffect(() => {
    console.log("setting document title")
    document.title = title
  }, deps)
}


function JobList(props) {
    const titleSearchInputState = useInputState("");
    const onlyFeaturedCheckboxState = useCheckboxState();    
    const [selectedTab, setSelectedTab] = useState("All");


    const filteredJobs = data.filter(job => {
      if((selectedTab!=="All" ? job.tags.includes(selectedTab) : true) && job.title.includes(titleSearchInputState.value) && (onlyFeaturedCheckboxState.value ? job.featured : true)){
        return true;
      }else{
        return false;
      }
    })

    useDocumentTitle(titleSearchInputState.value, [titleSearchInputState.value])

    useEffect(() => {      
      console.log("tab changed to " + selectedTab)
    }, [selectedTab])

    useEffect(() => {
      console.log("onlyFeaturedCheckboxState changed to " + onlyFeaturedCheckboxState.value)
    }, [onlyFeaturedCheckboxState.value])

  
    const ref = useRef();

    // useEffect(() => {
    //   function handleKeyDown(event){
    //     if(event.metaKey && event.code === "KeyH"){
    //       console.log("clicked cmd + h")
    //       if(ref.current){
    //         ref.current.focus();
    //       }
    //       return false;
    //     }
    //   };
    //   document.addEventListener("keydown", handleKeyDown)
    //   return () => {
    //     document.removeEventListener("keydown",handleKeyDown);
    //   }
    // },[]);


    return (
      <>
        <div className="grid job-search-form">
          <input {...titleSearchInputState} ref={ref} placeholder="search title"  id="searchInput" className="border mr-4 px-4 py-1"/>
          <div className="flex items-center ">
            <label>Featured</label>
            <input className="mx-2" type="checkbox" {...onlyFeaturedCheckboxState} />
          </div>
          <Dropdown list={[
          "All",
          "React",
          "Marketing",
          "Angular",
          "Vue",
        ]} initialValue="All" onChange={console.log} />
        </div>        
        <hr className="mt-8 border-transparent"/>
        <h1 className="heading">Jobs</h1>              
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
            <div className="divide-y divide-gray-400">
              <JobsListDisplay list={filteredJobs} />
            </div>
        </Tabs>
        </>
    );
}

export default JobList;