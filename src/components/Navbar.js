import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
// import { Menu, Switch } from 'antd';

const Navbar = () => {

    const [current, setCurrent] = useState('mail');
    const theme = 'dark'

    const items = [
        {
          label: 'Home',
          key: 'mail',
          icon: <MailOutlined />,
        },
      ];
      
    
      const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };

  return (
    <div>
        
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme={theme} items={items} />

    </div>
  )
}

export default Navbar;