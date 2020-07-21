import React from "react";
import { Divider, Tabs } from 'antd';
import { Link } from 'react-router-dom'
import {
    UserOutlined,
    BuildOutlined,
    BulbOutlined
} from '@ant-design/icons';
import PersonalDetails from './PersonalDetails'
import OrganisationDetails from './OrganisationDetails'

const { TabPane } = Tabs;

class Profile extends React.Component {
    render() {
        return (
            <div className="content" style={{ padding: 20}}>
                <div className="box" style={{ padding: "20px 0" }}>
                    <p className="box-title" style={{ paddingLeft: 20 }}>
                        Profile
                    </p>
                    <Divider />
                    <Tabs className="profile-tab" defaultActiveKey="personal_detail" tabPosition={"left"}>
                        <TabPane tab={
                            <span>
                                <Link to={{
                                    pathname: `/profile`,
                                    query: { tabKey: 'personal_detail' }
                                }}>
                                    <UserOutlined />
                                    Personal details
                                </Link>
                            </span>
                        } key="personal_detail">
                            <PersonalDetails />
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <Link to={{
                                    pathname: `/profile`,
                                    query: { tabKey: 'organasation' }
                                }} style={{ color: 'black' }}>
                                    <BuildOutlined />
                                    Organasation
                                </Link>
                            </span>
                        } key="organasation">
                            <OrganisationDetails />
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <Link to={{
                                    pathname: `/profile`,
                                    query: { tabKey: 'notifications' }
                                }}>
                                    <BulbOutlined />
                                    Notifications
                                </Link>
                            </span>
                        } key="notifications">

                        </TabPane>
                    </Tabs>
                </div>
            </div>

        );
    }
}

export default Profile;