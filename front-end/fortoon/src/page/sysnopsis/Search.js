import React, { useCallback, useState } from 'react';

const webToons = [
    {
        id: 1,
        text: "하루의 하루"
    },
    {
        id: 2,
        text: "참교육"
    },
    {
        id: 3,
        text: "마루의 강쥐"
    },
    {
        id: 4,
        text: "유미의 세포들"
    }
];

const Search = () => {

    const [search, setsearch] = useState("");
    
    const onChange = (e) => {
        setsearch(e.target.value)
    }

    const filterTitle = webToons.filter((webToons) => {
        return webToons.text.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))
    }) 

    // 드롭다운 
    // const Dropdown = () => {
    //     const [isActive, setIsActive] = useState(false);
    //     const [item, setItem] = useState(null);
    //     const onActiveToggle = useCallback(() => {
    //         setIsActive((prev) => !prev);
    //     },[]);

    //     const onSelectItem = useCallback((e) => {
    //     const targetId = e.target.id;

    //     if (targetId === "item_name") {
    //         setItem(e.target.parentElement.innerText);
    //     } else if (targetId === "item") {
    //         setItem(e.target.innerText);
    //     }
    //     setIsActive((prev) => !prev);
    //     }, []);

    //     return(
    //         <DropdownContainer>
    //             <DropdownBody onClick={onActiveToggle}>
    //                 {item ? (
    //                     <>
    //                         <ItemName>{item}</ItemName>
    //                     </>
    //                 ) : (
    //                     <>
    //                         <DropdownSelect> 선택! </DropdownSelect>
    //                         <AiOutlineDown />
    //                     </>
    //                 )}
    //             </DropdownBody>
    //             <DropdownMenu isActive={isActive}>
    //                 {dropdownItems.map((item) => (
    //                     <DropdownItemContainer id ="item" key={item.id} onClick={onSelectItem}>
    //                         <ItemName id="item_name">{item.name}</ItemName>
    //                         </DropdownItemContainer>
    //                 ))}


    //             </DropdownMenu>
    //         </DropdownContainer>
    //         );
    // };
    return (
        <>
            <div className="right" 
                style={{ width: '70%', 
                // height: '500px',
                float: 'right', 
                boxSizing: 'border-box', 
                backgroundColor: '#ece6cc' }}>
                <div>
                    <input type="text" value={search} onChange={onChange} />
                </div>
                <div>
                    {filterTitle.map(title => (
                        <div key={title.id}>
                            <span>{title.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search;