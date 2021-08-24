import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                { text } <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}
//mapState를 안쓰고 mapDispatch를 사용하는 이유는 각각을 console에서 확인해보면된다
//mpaState는 배열로 모든 state를 반환해서 가져오기때문에 index번호까지 지정해 사용해야함

export default connect(null, mapDispatchToProps) (ToDo);