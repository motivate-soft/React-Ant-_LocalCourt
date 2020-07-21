import React from "react";
import { Table, Input, Button, Divider, Dropdown, Menu } from 'antd';
import { PrinterOutlined, MoreOutlined, FilterOutlined } from '@ant-design/icons';
const { Search } = Input;

const moreMenu = (
    <Menu>
        <Menu.Item key="0">
            More Action1
        </Menu.Item>
        <Menu.Item key="1">
            More Action2
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            More Action3
        </Menu.Item>
    </Menu>
);

class ComplexTable extends React.Component {
    render() {
        return (
            <div>
                <div style={{ padding: "10px 0 20px 0" }}>
                    <Search
                        placeholder="Search your Cases"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <div style={{ float: 'right' }} size="small">
                        <Button type="default" icon={<PrinterOutlined />}>
                            Print
                        </Button>
                        <Divider type="vertical" style={{ background: 'grey', height: 34, margin: "0 20px" }} />
                        <Button type="default" icon={<FilterOutlined />} style={{ marginRight: 10 }} />
                        <Dropdown overlay={moreMenu} trigger={['click']}>
                            <Button type="default" icon={<MoreOutlined />} />
                        </Dropdown>
                    </div>

                </div>
                <Table {...this.props} />
            </div>

        );
    }
}

export default ComplexTable;