/* eslint-disable @next/next/no-img-element */
const Coin = ({
  image,
  symbol,
  name,
  price,
  change,
  volume,
  value,
  coinrankingUrl,
}) => {
  return (
    <div className="w-full max-w-full sm:overflow-x-auto overflow-x-scroll px-1 flex items-center justify-between border-b-2 border-b-color2 border-opacity-80 h-14 py-5">
      <div className="w-1/4 h-full flex items-center justify-start gap-8">
        <div className="flex items-center gap-3 h-full w-1/2">
          <img
            src={image}
            alt=""
            className="lg:w-9 lg:h-9 w-7 h-7 rounded-full object-cover"
          />
          <a
            href={coinrankingUrl}
            target="_blank"
            className={`font-semibold lg:text-lg text-base text-white transition-all cursor-pointer`}
          >
            {symbol}
          </a>
        </div>
        <div className="w-1/2 flex items-center justify-start">
          <span className="lg:text-sm text-xs font-medium text-custom">
            {name.length >= 25 ? `${name.slice(0, 16)}...` : name}
          </span>
        </div>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center px-5">
        <span
          className={`lg:text-sm text-xs font-semibold text-color4 ${
            change[0] === "-" ? "text-color4" : "text-color5"
          }`}
        >
          ${price.toString().slice(0, 6)}
        </span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center px-5">
        <span
          className={`lg:text-sm text-xs font-semibold ${
            change[0] === "-" ? "text-color4" : "text-color5"
          }`}
        >
          {change}%
        </span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center px-5">
        <span className="lg:text-sm text-xs font-semibold text-white">
          ${volume.toString().slice(0, 8)}..
        </span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-end px-5">
        <span className="lg:text-sm text-xs font-semibold text-white">
          ${value.toString().slice(0, 8)}..
        </span>
      </div>
    </div>
  );
};

export default Coin;
