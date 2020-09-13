import React, {useState} from 'react';
import Job from '../../components/Job'


const data = [{
    "id": 1,
    "title": "Quality Engineer",
    "tags": ["React", "Marketing"],
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  }, {
    "id": 2,
    "title": "Actuary",
    "tags": ["React", "Angular"],
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
  }, {
    "id": 3,
    "title": "Human Resources Assistant IV",
    "tags": ["Marketing"],
    "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
  }, {
    "id": 4,
    "title": "Administrative Officer",
    "tags": ["Vue"],
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
  }, {
    "id": 5,
    "title": "Financial Advisor",
    "tags":  ["React", "Vue"],
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
  }, {
    "id": 6,
    "title": "Structural Engineer",
    "tags": ["Vue", "Marketing"],
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
  }, {
    "id": 7,
    "title": "Budget/Accounting Analyst I",
    "tags": ["React", "Vue"],
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
  }, {
    "id": 8,
    "title": "Paralegal",
    "tags": [ "Angular", "Vue"],
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
  }, {
    "id": 9,
    "title": "Systems Administrator IV",
    "tags": ["Marketing", "Angular",],
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
  }, {
    "id": 10,
    "title": "VP Quality Control",
    "tags": ["React", "Marketing", "Angular", "Vue"],
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
  }]


  function JobsListDisplay(props){
    const {list} = props;
    console.log("jobs list rendered")
    return list.map(jobItem => <Job jobItem={jobItem} key={jobItem.id} />)
  }


  function TabButton({tabName, setSelectedTab, selectedTab}){
    let className = "button border m-4 p-4 shadown"
    const isSelected = selectedTab === tabName;
    if(isSelected){
      className = className + " " + "text-red-400"
    }
    return <button className={className} onClick={(event) => setSelectedTab(tabName)}>{tabName}</button>
  }

function Tabs(props){
  const {setSelectedTab, selectedTab, children} = props;

  return <div>    
    <div className="tabs-list">
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


function JobList(props) {
    const [searchValue, setSearchValue] = useState("")
    const [selectedTab, setSelectedTab] = useState("React");

    const filteredJobs = data.filter(job => {
      if(job.tags.includes(selectedTab) && job.title.includes(searchValue)){
        return true;
      }else{
        return false;
      }
    })

    console.log("search value is ", searchValue)

    return (
      <>
        <input value={searchValue} onChange={(event)=> setSearchValue(event.target.value) } id="searchInput" className="border"/>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
            <JobsListDisplay list={filteredJobs} />
        </Tabs>
        </>
    );
}

export default JobList;