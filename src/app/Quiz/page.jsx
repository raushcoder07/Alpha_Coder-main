import Quiz from "@/components/Quiz/Quiz";
import { CopyrightOutlined } from "@ant-design/icons";
// import { CiBitcoin } from "react-icons/ci";

const page = () => {
    return (
        <div>
            <h1>welcome to quiz secttion </h1>
            {/* <CiBitcoin /> */}
            <CopyrightOutlined />
            <Quiz />
        </div>
    );
}

export default page;

