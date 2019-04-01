import React,{Component} from 'react'
import antd, { Layout ,Row ,Col,Divider, Icon,Dropdown,Button } from 'antd'
import Nav from "./nav"

class MainHeader extends Component{

    render(){
        // return "头部"
        return (
            <Layout.Header>
                {/* <h1>cNode</h1> */}
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id='logo'> cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" className="headerDivider"></Divider>
                        <Nav mode="horizontal" id="nav"></Nav>
                    </Col>
                    <Col md={0} xs={24} className="xsNav">
                        <Dropdown overlay={<Nav mode="vertical" id="xsNav" />}
                        trigger={["onclick" ,"touchend"]}
                        >
                            <button size="small"><Icon type="bars"></Icon> </button>
                        </Dropdown>
                    </Col>
                </Row>      
                
                    
            </Layout.Header>
        )
    }
}

export default MainHeader;