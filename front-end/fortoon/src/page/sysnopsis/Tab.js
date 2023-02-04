import React, {useState} from 'react'
import styled from 'styled-components'

const TabMenu = styled.ul`
    background-color: #d3d3d3;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    // justify-items: center;
    // align-items: center;
    list-style: none;
    margin-top: 0.1rem;
    height: auto;
    
    .submenu {
        display: flex;
        padding: 30px 70px;
        cursor: pointer;
        // border: 1px solid gray;
        
        background-color: #d3d3d3;
        color: gray;
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
        <div style={
          { height:'350px', 
            width:'70%', 
            marginLeft: '30%', 
            }}>
            <TabMenu>
                {menuArr.map((ele, index)=>{
                    return (
                        <div
                        key={index}
                        className={currentTab === index ? "submenu focused" : "submenu"}
                        onClick={() => selectMenuHandler(index)}
                        > {ele.name}
                        </div>
                    )
                })}
            </TabMenu>
            <div>
                <h1> {menuArr[currentTab].content}</h1>
            </div>
        </div>
    </>
  )
}

export default Tab