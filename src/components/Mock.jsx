import React from 'react';
import axios from 'axios'


class Mock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            gData: null,
            pData: null
         };
    }

    getDate1 = () =>{
        axios.get('/getdata1', {
            params:{
                id : '123'
            }
        })
        .then((res)=>{
            console.log(res.data)
            this.setState({
                gData: res.data.message
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    getDate2 = () => {
        axios.post('/postdata1', {
            params: {
                name: 'jack'
            }
        })
        .then((res)=>{
            console.log(res.data)
            this.setState({
                pData: res.data.message
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render() {
        return (
            <React.Fragment>
                <h3>数据展示</h3>
                <p>get：{ this.state.gData == null ? '无' :  this.state.gData }</p>
                <p>post: { this.state.pData == null ? '无' :  this.state.pData } </p>

                <button onClick={ this.getDate1}>点击获取(Get)Mock数据</button>
                <br /><br />
                <button onClick={ this.getDate2 } >点击获取(Post)Mock数据</button>
            </React.Fragment>
        );
    }
}

export default Mock;