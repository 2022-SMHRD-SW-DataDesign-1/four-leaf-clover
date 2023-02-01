import React from 'react'

const Search = () => {

const [search, setsearch] = useState("");
    // 먼저 검색창에 검색어와 변화를 알기위해 useState hooks를 선언
const onChange = (e) => {
    setsearch(e.target.value)
    // 변화된 value값을 변경해주기위해 onChange함수를 사용
}

    return (
        <div>
            <input type="text" value={search} onChange={onChange} />
            {/* input태그로 검색창을 만들고 속성에 value안에는 value값을 읽을 수 있게 
            state 선언. 또, value값을 변경하기 위해 onChange함수도 선언  */}
        </div>

  )
}

export default Search;