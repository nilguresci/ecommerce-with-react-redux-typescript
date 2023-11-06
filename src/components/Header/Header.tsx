import style from "./header.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import TotalPrice from "../TotalPrice/TotalPrice";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/productSlice";

const Header = () => {
  const dispatch = useDispatch<any>();

  const onSearch = (e: any) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <nav className="navbar bg-primary navbar-dark container-fluid d-flex justify-content-between ">
      <div className={style.left}>
        <div className={style.companyName}>
          <a className="navbar-brand" href="/">
            Nils Co
          </a>
        </div>

        <Input
          className={style.search}
          addonBefore={<SearchOutlined color="white" />}
          placeholder="Search"
          onChange={(e: any) => onSearch(e)}
        />
      </div>

      <div className={style.right}>
        <div className={style.basketInfo}>
          <AiOutlineShoppingCart width={24} height={24} color="white" />
          <TotalPrice color="white"></TotalPrice>
        </div>
        <div className={style.userInfo}>
          <AiOutlineUser color="white" />
          <div className={style.userName}>Nil</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
