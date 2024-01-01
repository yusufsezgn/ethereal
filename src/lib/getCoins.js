import axios from "axios";

const getCoins = async () => {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "100",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "9452a09c0bmsh844d338fef42946p1419c1jsnb844a2c88c9d",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    let coins = response?.data?.data?.coins;
    return coins;
  } catch (error) {
    console.error(error);
  }
};

export default getCoins;
