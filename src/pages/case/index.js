import React from "react";
import { Tabs, Button, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { FolderOpenOutlined, PlusCircleOutlined, PlusCircleTwoTone, UsergroupAddOutlined } from '@ant-design/icons';

import MyCases from './MyCases'
import ViewCase from './ViewCase'
import StartCase from './StartCase'
const { TabPane } = Tabs;

class Cases extends React.Component {
    render() {
        const { query } = this.props.location;
        const isViewCase = query !== undefined && query.tabKey === "view_case";
        return (
            <div className="content">
                <div className="content-header" style={{ height: 80 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Cases</Breadcrumb.Item>
                        <Breadcrumb.Item> </Breadcrumb.Item>
                    </Breadcrumb>
                    <p className="page-title">Cases</p>
                </div>
                <Tabs onChange={this.onTabChanged} defaultActiveKey={"my_cases"}
                    tabBarExtraContent={isViewCase ?
                        <Button type="primary" icon={<PlusCircleTwoTone />}>Grant access</Button> :
                        <Button type="primary" icon={<PlusCircleTwoTone />}>Start a Case</Button>}
                    style={{ background: 'white' }}>
                    <TabPane
                        tab={
                            <span>
                                <Link to={{
                                    pathname: `/cases`,
                                    query: { tabKey: 'my_cases' }
                                }}>
                                    <FolderOpenOutlined />
                                    My Cases
                                </Link>

                            </span>
                        }
                        key="my_cases"
                    >
                        {
                            isViewCase ? <ViewCase /> : <MyCases />
                        }
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Link to={{
                                    pathname: `/cases`,
                                    query: { tabKey: 'start_case' }
                                }}>
                                    <PlusCircleOutlined />
                                    Start a Case
                                </Link>
                            </span>
                        }
                        key="start_case"

                    >
                        <StartCase />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <Link to={{
                                    pathname: `/cases`,
                                    query: { tabKey: 'join_case' }
                                }}>
                                    <UsergroupAddOutlined />
                                    Join a Case
                                </Link>
                            </span>
                        }
                        key="join_case"
                    >

                    </TabPane>
                </Tabs>
            </div>

        );
    }
}

export default Cases;