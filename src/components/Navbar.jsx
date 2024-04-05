"use client";

import { Button, Menu, Typography, Avatar, Divider } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, UserOutlined, KeyOutlined, StockOutlined, DollarTwoTone, NodeIndexOutlined, YoutubeOutlined, FileTextOutlined, CodepenOutlined, WechatOutlined } from "@ant-design/icons";
// import icon from "../images/download (5).jpeg";
import SubMenu from 'antd/es/menu/SubMenu';
import { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [mode, setMode] = useState("inline");

  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };


  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src='/next.svg' size="large" />
        <Typography.Title level={2} className="logo">

          <Link href="/">Stock PlayGround</Link>
        </Typography.Title>
      </div>

      <Divider type="vertical" />
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link href='/Home'>Home</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}>
          <Link href='/Stocks'>Stocks</Link>
        </Menu.Item>

        <SubMenu key="sub1" icon={<DollarTwoTone />} title="stocks Trends">
          <Menu.Item icon={<StockOutlined />}>
            <Link href='/StockTrends'>Trend</Link>
          </Menu.Item>
          <Menu.Item icon={<StockOutlined />}>
            <Link href='/Demochart'>DemoChart</Link>
          </Menu.Item>

        </SubMenu>

        <SubMenu key="sub2" icon={<KeyOutlined />} title="Knowledge">
          <Menu.Item icon={<YoutubeOutlined />}>
            <Link href='/Tutorials'> Tutorials</Link>
          </Menu.Item>
          <Menu.Item icon={<NodeIndexOutlined />}>
            <Link href='/TechnicalAnalysis'>TechnicalAnalysis</Link>
          </Menu.Item>
          <Menu.Item icon={<FileTextOutlined />}>
            <Link href='/Quiz'>Quiz</Link>
          </Menu.Item>


        </SubMenu>

        <Menu.Item icon={<CodepenOutlined />}>
          <Link href='http://127.0.0.1:5500/Test.html'>Game</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link href='/News'>News</Link>
        </Menu.Item>
        <Menu.Item icon={<WechatOutlined />}>
          <Link href='/CommunityPost'>Community Post</Link>
        </Menu.Item>
        <Menu.Item icon={<UserOutlined />}>
          <Link href='/MyStockVerse'>MyStockVerse</Link>
        </Menu.Item>


      </Menu>

    </div>
  );
};

export default Navbar;