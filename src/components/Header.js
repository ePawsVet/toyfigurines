import {  Menu  } from 'antd';
import {  UserOutlined, ShoppingOutlined, LogoutOutlined  } from '@ant-design/icons';

const Header = ({fullname, onLogout}) => {
  return (
    <div>
        <Menu mode="horizontal">
    
            <Menu.SubMenu key="SubMenu" title="Account" icon={<UserOutlined />}>
            <Menu.Item key="two" icon={<ShoppingOutlined />}>
                Purchase/Trade History
            </Menu.Item>
            <Menu.Item key="three" icon={<LogoutOutlined />} onClick={onLogout}>
                Logout
            </Menu.Item>
            
            </Menu.SubMenu>
        </Menu>
    </div>
  )
}

export default Header