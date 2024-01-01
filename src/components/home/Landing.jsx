/* eslint-disable @next/next/no-img-element */
import { IoLanguage } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import Logo from "../ui/Logo";
import Coin from "../ui/Coin";
import { useEffect, useState } from "react";
import getCoins from "@/lib/getCoins";
import Search from "../ui/Search";
import { useAppContext } from "@/context/Wrapper";

const Landing = () => {
  const [filteredCoins, setFilteredCoins] = useState([]);
  const { language, setLanguage } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getCoins();
        setFilteredCoins(result);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleSearch = (filterText) => {
    const result = filteredCoins?.filter((item) =>
      item?.name?.includes(filterText)
    );
    setFilteredCoins(result);
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-screen m-0 p-0">
        <img
          src="/img/pattern.jpg"
          alt=""
          className="absolute top-0 left-0 brightness-50 w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-screen absolute top-0 left-0 flex items-center justify-center">
        <div className="2xl:w-1/2 w-3/4 2xl:h-3/4 h-4/5 bg-color1 absolute rounded-xl shadow-2xl">
          <div className="w-full sm:h-24 h-auto sm:py-0 py-4 border-b-2 border-b-color2 border-opacity-50 sm:flex sm:flex-row flex flex-col sm:items-center sm:justify-between justify-start items-start px-8">
            <Logo />
            <div className="sm:w-1/2 w-full h-full flex items-center justify-between gap-2">
              <Search onSearch={handleSearch} />
              <div
                className="w-10 h-10 grid place-content-center hover:bg-color3 rounded-full transition-all cursor-pointer"
                onClick={() => {
                  location.reload();
                }}
              >
                <GrPowerReset className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="w-full h-auto lg:p-8 p-5 flex items-start justify-normal flex-col gap-4">
            <div className="w-full h-auto flex items-center justify-start">
              <span className="text-2xl font-medium text-white">
                {language === "TR" ? "Piyasalar" : "Markets"} (0-100)
              </span>
            </div>
            <div className="w-full flex items-center justify-around bg-color3 lg:h-9 h-12 rounded lg:px-5 px-3">
              <div className="w-1/5 h-full flex items-center justify-start">
                <span className="font-medium text-base text-white">
                  {language === "TR" ? "İsim" : "Name"}
                </span>
              </div>
              <div className="w-1/5 h-full flex items-center justify-center px-5">
                <span className="font-medium text-base text-white">
                  {language === "TR" ? "Fiyat" : "Price"}
                </span>
              </div>
              <div className="w-1/5 h-full flex items-center justify-center px-5">
                <span className="font-medium text-base text-white">
                  {language === "TR" ? "Değişim" : "Change"}
                </span>
              </div>
              <div className="w-1/5 h-full flex items-center justify-center px-5">
                <span className="font-medium text-base text-white">
                  {language === "TR" ? "24s hacim" : "24h volume"}
                </span>
              </div>
              <div className="w-1/5 h-full flex items-center justify-center">
                <span className="font-medium text-base text-white">
                  {language === "TR" ? "Piyasa Değeri" : "Value"}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col h-auto 2xl:max-h-[350px] max-h-72 overflow-y-scroll">
              {filteredCoins?.map((item, index) => {
                return (
                  <Coin
                    key={index}
                    image={item?.iconUrl}
                    symbol={item?.symbol}
                    coinrankingUrl={item?.coinrankingUrl}
                    name={item?.name}
                    price={item?.price}
                    change={item?.change}
                    volume={item["24hVolume"]}
                    value={item?.btcPrice}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full h-24 absolute bottom-0 left-0 px-8 flex items-center justify-between">
            <div className="w-1/2 h-full flex items-center justify-start">
              <a
                href=""
                className="text-white underline font-medium hover:no-underline transition-all"
              >
                {language === "TR" ? "Kaynak kod" : "Source of data"}
              </a>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end">
              <div
                onClick={() => {
                  setLanguage(language === "EN" ? "TR" : "EN");
                }}
                className="w-auto px-3 flex items-center gap-3 h-12 rounded-full hover:bg-color3 text-white transition-all cursor-pointer"
              >
                <IoLanguage className="w-6 h-6" />
                <span className="text-lg font-semibold text-white">
                  {language}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
