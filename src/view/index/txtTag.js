import React,{Component} from "react"
import {Tag } from "antd"

const tab={
    top:{
        color:"magenta",
        txt:"置顶"
    },
    good:{
        color:"geekblue",
        txt:"精华"
    },
    job:{
        color:"cyan",
        txt:"招聘"
    },
    share:{
        color:"purple",
        txt:"分享"
    },
    ask:{
        color:"green",
        txt:"问答"
    },
    dev:{
        color:"测试",
        txt:"测试"
    }
}

function getTab(data){
    // if(data.top){
    //     return "top"
    // }
    return data.top?"top":data.good?"good":data.tab;
}

class TxtTag extends Component{

    render(){
        let {}=this.props
        let nowTab=tab[getTab(this.props.data)];

        return (
            <Tag color={nowTab.color}>
                {nowTab.txt}
            </Tag>

        );
    }
}

export default TxtTag