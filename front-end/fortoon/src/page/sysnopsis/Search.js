import React, { useState } from 'react';

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


    return (
        <div>
            <div className="right"
                style={{
                    width: '1000px',
                    float: 'right',
                    boxSizing: 'border-box',
                    marginRight:'20rem'
                }}>
                <div>
                    <input className='search' 
                        style={{ width: '100%' }} type="text" value={search} onChange={onChange} />
                    <div>
                        {filterTitle.map(title => (
                            <div key={title.id}>
                                <span>{title.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;