import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {//toDos에 할당된것은 mapStateToProps에서 가져온 reducer의 state이다
    
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>{ JSON.stringify(toDos) }</ul>
        </>
    )
}

function mapStateToProps(state) {//여기서 state는 reducer에 할당되어 있는 state임
    return { toDos: state }; //이부분이 home의 prop으로 추가되었음
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
        //확장된actionCreators.addToDo에 value값인 text를 할당해 리턴된값을 dispatch해줌
        //그값이 이 함수로 home의 prop으로 사용할수 있게되는 원리다
        //리턴되어 오는 text에서 필요한 argument는 위에 함수에서 불러올것이다
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
//connect()는 home으로 보내는 props에 추가될수 있도록 허용해준다
//addToDo또한 home의 prop으로 사용할수 있음