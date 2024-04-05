"use client";
import { Space } from "antd";
import Typography from "antd/es/typography/Typography";
import Link from "next/link";


const Footer = () => {
    return (
        <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                Stockverse<br />
                All right reserverd
            </Typography.Title>
            <space>
                <Link href="/">Home</Link>
                <Link href="/stock">Stock</Link>
                <Link href="/news">News</Link>
            </space>
        </div>
       
    );
}

export default Footer;