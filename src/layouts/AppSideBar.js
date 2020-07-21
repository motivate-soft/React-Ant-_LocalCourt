import React from "react";
import { Layout, Menu } from 'antd';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Home from '../pages/Home';
import Cases from '../pages/case';
import Profile from '../pages/profile';
import logo from '../logo.png';

import {
    DesktopOutlined,
    UserOutlined,
    CalendarOutlined,
    DollarCircleOutlined,
    FolderOpenOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import AppHeader from './AppHeader';

const { Sider } = Layout;

class AppSideBar extends React.Component {
    state = {
        collapsed: false,
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            < BrowserRouter >
                <Sider
                    trigger={null} collapsible collapsed={this.state.collapsed}
                    className="layout-sider">
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                    <Menu defaultSelectedKeys={['_home']} mode="inline">
                        <Menu.Item key="_home" icon={<DesktopOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="_cases" icon={<FolderOpenOutlined />}>
                            <Link to="/cases">Cases</Link>
                        </Menu.Item>
                        <Menu.Item key="_payment" icon={<DollarCircleOutlined />}>
                            Payment
                    </Menu.Item>
                        <Menu.Item key="_calendar" icon={<CalendarOutlined />}>
                            Calendar
                    </Menu.Item>
                        <Menu.Item key="_profile" icon={<UserOutlined />}>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                    </Menu>
                    <div className="logo-part">
                        <img src={logo} className={this.state.collapsed ? "logo-img-small" : "logo-img"} alt="logo" />
                        <br />
                        {
                            !this.state.collapsed ?
                                <div>
                                    <span className="logo-title">LOCAL COURT</span>
                                    <br />
                                    <span className="copyright-txt">Powered by Brief</span>
                                </div> :
                                ''
                        }
                        <p className="copyright-txt">© 2020</p>
                    </div>

                </Sider>
                <div style={{ width: "100%", height: "90vh" }}>
                    <AppHeader />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/cases" component={Cases} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </div>

            </ BrowserRouter>
        );
    }
}

export default AppSideBar;