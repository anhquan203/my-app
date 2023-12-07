import React from "react";
import "./App.css";
import IconButton from "./Session02/day01/Button/IconButton";
import Search from "./Session02/day01/Search/Search";

import {
  AiFillApple,
  AiOutlineArrowRight,
  AiFillAndroid,
  AiFillEyeInvisible,
  AiFillPlayCircle,
  AiFillDropboxSquare,
} from "react-icons/ai";
import {
  BsFacebook,
  BsGoogle,
  BsPinterest,
  BsFilterCircle,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { TiPhone } from "react-icons/ti";
import { FiFacebook } from "react-icons/fi";
import { SiVisa } from "react-icons/si";
import { PiSoccerBallBold } from "react-icons/pi";
import { DiCodeigniter, DiFirefox } from "react-icons/di";
import TableScore from "./Session02/day01/TableScore/TableScore";
import IconTeam from "./Session02/day01/iconTeam/IconTeam"; //IconTeam bắt buộc chữ in hoa
import Dashboard from "./Session02/day01/Dashboard/Dashboard";
import Profile from "./Session02/day01/Profile/Profile";
import Team from "./Session02/day01/team/Team";
import { BsCamera } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { GiNinjaMask } from "react-icons/gi";
import IconTour from "./Session02/day01/IconTour/IconTour";
import Weatherweek from "./Session02/day01/Weatherweek/Weatherweek";
import Weatherforecast from "./Session02/day01/weatherforecast/Weatherforecast";
import Calendar from "./Session02/day01/calendar/Calendar";
import ProductTag from "./Session02/day02/basic-1/ProductTag";
import ProductCard from "./Session02/day02/basic-2/ProductCard";
import PostCard from "./Session02/day02/basic-3/PostCard";
import PercentageBar from "./Session02/day02/block-ui-1/PercentageBar";
import RangeBar from "./Session02/day02/block-ui-2/RankBar";
import LogoCard from "./Session02/day02/block-ui-3/LogoCard";
import StatisticalCard from "./Session02/day02/block-ui-4/StatisticalCard";
import CvCrad from "./Session02/day02/block-ui-5/CvCrad";
import ShopCard from "./Session02/day02/block-ui-6/ShopCard";
import ProductList from "./Session02/day02/block-ui-7/ProductList";
import LikeButton from "./Sesion03/LikeButton/LikeButton";
import ImageView from "./Sesion03/imageViewer/ImageView";
import RateButton from "./Sesion03/RateBution/index";
import Tabs from "./Sesion03/Tabs";
import MultipleAcordions from "./Sesion03/MultipleAccordions";
import LikeAnimation from "./Sesion03/LikeAnimation";
import ImageSlider from "./Sesion03/ImageSlider";
import OderFood from "./Sesion03/OderFood";
import Onchoose from "./Sesion04/OnChoose/Onchoose";
import MutipleChoice from "./Sesion04/MutipleChoice/MutipleChoice";
import FillInBlank from "./Sesion04/FillInBlank/FillInBlank";
import FillInBlanks from "./Sesion04/Fillblanks/FillBlanhks";
import Form01 from "./Sesion05/Form01/Form01";
import FormLogin from "./Sesion05/Form01/FormLogin";
import FormSingup from "./Sesion05/Form01/FormSingup";
import Form02 from "./Sesion05/Form02";
import Form03 from "./Sesion05/Form03";
import Login from "./Sesion06/Authentication/Login/Login";
import DeleteDataWithAxios from "./Sesion06/Categories/DeleteDataWithAxios";
import GetDataWithAxios from "./Sesion06/Categories/GetDataWithAxios";
import Delete from "./Sesion06/Customers/Delete";
import GetAllCustomer from "./Sesion06/Customers/GetAllCustomer";
import InsertCustomer from "./Sesion06/Customers/InsertCustomer";
import InsertDataWithAxios from "./Sesion06/Categories/InsertDataWithAxios";
import UpdateCustomer from "./Sesion06/Customers/UpdateCustomer";
import UpdateDataWithAxios from "./Sesion06/Categories/UpdateDataWithAxios";
import GetAllEmployees from "./Sesion06/Employees/GetAllEmployees";
import InsertEmployees from "./Sesion06/Employees/InsertEmployees";
import UpdateEmployees from "./Sesion06/Employees/UpdateEmployees";
import DeleteEmployees from "./Sesion06/Employees/DeleteEmployees";
import GetAllOrders from "./Sesion06/Orders/GetAllOrder";
import UpdateOrder from "./Sesion06/Orders/UpdateOrder";
import Products from "./Sesion07/Product";
import Categories from "./Sesion07/Categories";
import Customers from "./Sesion07/Customers";
import Employees from "./Sesion07/Employees";
import Suppliers from "./Sesion07/Suppliers";
import Page from "./Sesion08/Page";
import Home from "./Sesion08/Root";
import PageLogin from "./Sesion08/Login";
import Orders from "./Sesion07/Orders";

function App() {
  return (
    <div>
      {/* <div>
        <IconButton />
        <IconButton iconRight={<AiOutlineArrowRight />} text="get started" />
        <IconButton iconLeft={<AiFillApple />} text="Continue with Apple" />
        <IconButton
          iconLeft={<BsGoogle />}
          text="Continue with Google"
          outLine={true}
        />
        <IconButton
          iconLeft={<BsFacebook />}
          text="Continue with Facebook"
          outLine={true}
        />
      </div>
      <div>
        <Search iconLeft={<RiSearchLine />} />
        <Search text="Seach" iconLeft={<RiSearchLine />} color="#A2AAAD" />
        <Search text="Textfield" iconLeft={<RiSearchLine />} fontWeight="600" />
        <Search
          text="Seach in the web"
          iconLeft={<RiSearchLine />}
          iconRight={<BsFilterCircle />}
          color="#A2A9AD"
        />
        <Search
          text="Seach crypto"
          iconLeft={<RiSearchLine />}
          iconRight={<LuSettings2 />}
          color="#778289"
        />
        <Search
          text="Phone number"
          iconRight={<TiPhone />}
          color="#A2A9AD"
          fontWeight="400"
          bgIcon="#D3FFD8"
          radiusIcon={12}
        />
        <Search
          text="Seach in the web"
          iconLeft={<RiSearchLine />}
          iconRight={<BsFilterCircle />}
          color="#A2A9AD"
          bgIcon="#FFE664"
          radiusIcon={100}
        />
      </div>
      <div></div>
      <div>
        <TableScore
          text="7"
          textLeft="Spain"
          textRight="France"
          imgLeft="img/Score/spain.jpg"
          imgRight="img/score/france.png"
        />
        <IconTeam
          textName="MANCHESTER UNITED "
          // textNumber='4923 3242'
          img="img/Score/manchesterUNITED.jpg"
        />
        <IconTeam
          textName="Wade Warren "
          textNumber="4923 3242&bull;&bull;&bull;&bull;
        "
          img="img/Score/spain.jpg"
          icon={<SiVisa />}
          iconRight={<AiFillEyeInvisible />}
        />
        <Dashboard />
        <Profile
          icon={<BsCamera />}
          avatar="img/Score/spain.jpg"
          textblur="Web Development"
        />
        <Profile
          icon={<FaPhone />}
          textname="MARÍA"
          avatar="img/Score/spain.jpg"
        />

        <IconTour
          avatar="img/weather/avatar.jpg"
          textname="Landescape"
          textitem="432Km"
          icon="&bull;&bull;&bull;"
        />
        <IconTour
          avatar="img/weather/avatar.jpg"
          textname="Landescape"
          textitem="432Km"
          textday="3 WED"
          icon="&bull;&bull;&bull;"
        />
        <IconTour
          avatar="img/weather/weather.jpg"
          textname="Great day to schedule"
          textday="Lorem ipsum dolor sitamet."
          icon={<AiFillPlayCircle size={30} style={{ color: "#1e81b0" }} />}
        />
        <Weatherweek
          images={[
            "img/weather/1.jpg",
            "img/weather/2.jpg",
            "img/weather/3.jpg",
            "img/weather/4.jpg",
            "img/weather/1.jpg",
          ]}
          texts={[
            { text: "Mon" },
            { text: "Tue" },
            { text: "Wed" },
            { text: "Thu" },
            { text: "Fri" },
          ]}
        ></Weatherweek>
        <Weatherweek
          images={[
            "img/weather/1.jpg",
            "img/weather/2.jpg",
            "img/weather/3.jpg",
            "img/weather/4.jpg",
            "img/weather/1.jpg",
          ]}
          texts={[
            { text: "Mon", time: "10:00 AM" },
            { text: "Tue", time: "11:30 AM" },
            { text: "Wed", time: "1:00 PM" },
            { text: "Thu", time: "3:30 PM" },
            { text: "Fri", time: "5:00 PM" },
          ]}
        />
        <Weatherweek
          images={[
            "img/weather/1.jpg",
            "img/weather/2.jpg",
            "img/weather/3.jpg",
            "img/weather/4.jpg",
            "img/weather/1.jpg",
          ]}
          texts={[
            { text: "Mon", time: "10:00 AM" },
            { text: "Tue", time: "11:30 AM" },
            { text: "Wed", time: "1:00 PM" },
            { text: "Thu", time: "3:30 PM" },
            { text: "Fri", time: "5:00 PM" },
          ]}
          textheader="Great day to schedule"
          textBlur="Your usual hours"
          icon="&bull;&bull;&bull;"
        />
        <Weatherforecast />
        <Calendar />
      </div> */}
      {/* <div>
        <ProductTag
          title="Clothing & Apparel"
          contents={["Accessories", "Bags", "kid Fashion", "Mens"]}
        />
        <ProductCard
          shop="YOUNG SHOP"
          imgUrl="img/Basit/2.jpg"
          price={500}
          productName="Samsung UHD TV 24inch"
          rateQuantity={4}
        />
        <PostCard
          img="img/Basit/3.jpg"
          title="Harman Kadon onyx Studio Mini Reviews & Experiences"
          category="Tecnology"
          author="drfution"
          date="Feb 21, 2021"
        />
      </div> */}
      {/* <div>
        <PercentageBar title="BANDWIDTH" percent={20} color="#FF0000" />
        <PercentageBar title="STORAGR" percent={50} color="#00ffff" />
        <PercentageBar title="USER" percent={70} color="#13be63" />
        <PercentageBar title="VISITORS" percent={30} color="#c5cb17" />
        <PercentageBar title="EMAIL" percent={45} color="#4c14bc" />
        <PercentageBar title="BASIT" percent={80} color="#ca1c7f" />
        <PercentageBar title="OTHER" percent={37} color="#e02a64" />
      </div> */}
      {/* <div>
        <OderFood />
      </div>
      <div>
        <RangeBar
          icon={<AiFillAndroid size={50} />}
          color="#4c14bc"
          rank={30}
        />
        <RangeBar
          icon={<AiFillApple size={50} />}
          color="#FF0000"
          rank={50}
          title="CSS"
        />
        <RangeBar
          icon={<AiFillDropboxSquare size={50} />}
          color="#00ffff"
          title="PHP"
          rank={30}
        />
        <RangeBar
          icon={<PiSoccerBallBold size={50} />}
          color="#c5cb17"
          rank={30}
        />
        <RangeBar icon={<GiNinjaMask size={50} />} color="#ac1be5" rank={30} />
      </div> */}
      {/* <div>
        <LogoCard
          title="FACEBOOK"
          subTitle="5,000,000"
          icon={<FiFacebook size={100} />}
          color="#1754bd"
        />
        <LogoCard
          title="Twitter"
          subTitle="40,000,000"
          icon={<BsTwitter size={100} />}
          color="#1796bd"
        />
        <LogoCard
          title="Google +"
          subTitle="4,600,000"
          icon={<BsInstagram size={100} />}
          color="#c87b2a"
        />
        <LogoCard
          title="Pinterest"
          subTitle="34,000"
          icon={<BsPinterest size={100} />}
          color="#d83939"
        />
        <Onchoose
          answers={["1945", "1765", "1975", "1982"]}
          correctAnswer="1945"
          questionContent="chien thang dien bien phu la khi nao"
        />
        <Onchoose
          answers={["1945", "1765", "1975", "1982"]}
          correctAnswer="1945"
          questionContent="chien thang dien bien phu la khi nao"
        />
        <MutipleChoice
          questionContent=" doi nao vo dich woundcup nam 2022"
          correctAnswers={["phap", "anh"]}
          answers={["my", "phap", "anh", "bo do nha"]}
        />
        <FillInBlank
          questionContent="dien vao cho trong sau ___"
          correctAnswer="quan"
        />
        <FillInBlanks
          questionContent="đội bóng nào đã từng vô địch worldcup ___và ___"
          correctAnswers={["anh", "phap", "tay ban nha"]}
          blanks={["___"]}
        />
      </div> */}
      {/* <div>
        <StatisticalCard title="TODAY'S VISTORI" data="24,599" />
        <StatisticalCard title="YESTERDAY'S VISTORIS" data="16,699" />
        <StatisticalCard title="TOTAL DOWNLOADS" data="1,24,599" />
        <StatisticalCard title="TODAY'S VISTORI" data="24,599" />
      </div> */}
      {/* <div>
        <CvCrad
          imgUrl="img/avatar/1.jpg"
          name="ROBORT PATTISION"
          category="Developing"
          dob="23/05/2014"
          bg="B+"
          edu="MCA"
          res="Singpo"
          email="quan@gmail.com"
          phone={326923662}
          colorEmail="#cf2727"
          colorPhone="#1caa89"
        />
      </div>

      <div>
        <CvCrad
          imgUrl="img/avatar/2.jpg"
          name="ROBORT PATTISION"
          category="Developing"
          dob="23/05/2014"
          bg="B+"
          edu="MCA"
          res="Singpo"
          email="quan@gmail.com"
          phone={326923662}
          colorEmail="#16da43"
          colorPhone="#2d1caa"
        />
      </div> */}
      {/* <div>
        <ShopCard
          imgUrl="img/avatar/1.jpg"
          name="SEQUITUR MUTATIONEM"
          description="Lorem ipsum dolor sit amet, consecteur "
          size="XL/XXl/s"
          price={25}
        />
      </div>
      <div>
        <ShopCard
          imgUrl="img/avatar/4.jpg"
          name="SEQUITUR MUTATIONEM"
          description="Lorem ipsum dolor sit amet, consecteur "
          size="XL/XXl/s"
          price={75}
        />
      </div> */}
      {/* <div>
        <ProductList
          testDiscount="-39%"
          textNameproduct="LG White"
          textPrice="96"
          textSale="18% off"
          TextOldprice="85"
          textSold="15"
          textnameShop="YOUNG SHOP"
          rating={3}
          img="img/productitem/1.jpg"
        />
        <ImageView
          images={[
            "img/avatar/1.jpg",
            "img/avatar/4.jpg",
            "img/avatar/2.jpg",
            "img/avatar/3.jpg",
            "img/avatar/4.jpg",
          ]}
        />
        <Team
          avata={["img/avatar/1.jpg", "img/avatar/2.jpg", "img/avatar/3.jpg"]}
          text="quan"
          subTi="quan"
          background="#740EF5"
        />
        <Tabs />
        <MultipleAcordions />
        <LikeAnimation />
        <ImageSlider />
      </div> */}
      {/* <div>
        <LikeButton />
      </div>
      <RateButton /> */}
      {/* <div>
        <Form01 />
        <FormSingup />
        <FormLogin />
      </div>
      <div>
        <Form02 />
      </div> */}
      <div>
        {/* <Form03 /> */}
        {/* <Login /> */}

        {/* <DeleteDataWithAxios /> */}
        {/* <GetDataWithAxios /> */}
        {/* <InsertDataWithAxios /> */}
        {/* <UpdateDataWithAxios /> */}
        {/* <Delete /> */}
        {/* <GetAllCustomer /> */}
        {/* <InsertCustomer /> */}
        {/* <UpdateCustomer /> */}
        {/* <GetAllEmployees /> */}
        {/* <InsertEmployees /> */}
        {/* <UpdateEmployees /> */}
        {/* <DeleteEmployees /> */}
        {/* <GetAllOrders /> */}
        {/* <UpdateOrder /> */}
        {/* <Products /> */}
        {/* <Categories /> */}
        {/* <Customers /> */}
        {/* <Employees /> */}
        {/* <Suppliers /> */}
        {/* <Orders /> */}

        <Page />
        {/* <FormUpdate /> */}
        {/* <Home /> */}
        {/* <PageLogin /> */}
      </div>
      {/* <Form02 /> */}
    </div>
  );
}

export default App;
