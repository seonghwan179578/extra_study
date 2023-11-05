import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

export default class AppClass extends Component {

    // class컴포넌트에서 state 만들기
    constructor(props) {
        super(props)
        this.state={ // 원하는 state 내용 입력. state가 총 3개(counter2, num, value) 
            counter2: 0,
            num: 1,
            value: 0
        }
        // constructor가 실행되는지 확인
        console.log("constructor")
    }

    increase = () => {
        this.setState({
            counter2:this.state.counter2 + 1,
            value:this.state.value+1, // 변화를 줄 값
        })
        // 증가하면서 값이 바뀌고, 값을 바꾸는 setState호출 직후의 state 값 확인
        console.log("increase function", this.state)
    }


  componentDidMount() {
    // api 콜
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    // componentdidUpdate 함수 안에서 확인하는 state
    console.log("componentDidUpdate", this.state)
  }


  render() {
    // render 함수 실행 확인
    console.log("render")

    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>class컴포넌트 클릭!</button>
        {this.state.counter2 < 3 && <BoxClass num={this.state.value}/>}
      </div>
    )
  }
}
