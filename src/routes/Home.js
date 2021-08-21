import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
    
    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
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

function mapStateToProps(state) {
    return { toDos: state }; //이부분이 home의 prop으로 추가되었음
}

export default connect(mapStateToProps) (Home);
//connect()는 home으로 보내는 props에 추가될수 있도록 허용해준다