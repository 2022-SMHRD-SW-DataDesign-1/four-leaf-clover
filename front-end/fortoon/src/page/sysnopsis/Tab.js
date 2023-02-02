import React, {useState} from 'react'
import styled from 'styled-components'

const TabMenu = styled.ul`
    background-color: white;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    list-style: none;
    
    .submenu {
        // width: 100% auto;
        padding: 15px 30px;
        cursor: pointer;
        border: 1px solid black;
        
    }
`;


const Tab = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const menuArr = [
        {name:'월', content: '월요일 만화'},
        {name:'화', content: '화요일 만화'},
        {name:'수', content: '수요일 만화'},
        {name:'목', content: '목요일 만화'},
        {name:'금', content: '금요일 만화'},
        {name:'토', content: '토요일 만화'},
        {name:'일', content: '일요일 만화'},
        {name:'검색', content: '검색 만화'}
    ];
    
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };


  return (
    <>
        <div style={{boxSizing:'border-box', height:'500px', backgroundColor:'pink' }}>
            <TabMenu>
                {menuArr.map((ele, index)=>{
                    return (
                        <div key={index}
                        className={currentTab === index ? "submenu focused" : "submenu"}
                        onClick={() => selectMenuHandler(index)}
                        > {ele.name}
                        </div>
                    )
                })}
            </TabMenu>
            <div>
                <h1> {menuArr[currentTab].content}</h1>
                <p> 바뀌고 있고요~! </p>
            </div>
        </div>
    </>
  )
}

export default Tab