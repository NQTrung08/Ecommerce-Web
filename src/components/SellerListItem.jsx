// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import RatingStars from '@ui/RatingStars';
import LabeledProgressBar from '@components/LabeledProgressBar';
import Counter from '@components/Counter';

// hooks
import {useTheme} from '@contexts/themeContext';

import MAP_THEME from '@constants/map-theme';
import {numFormatter} from '@utils/helpers';

const MAP_KEY = import.meta.env.VITE_MAP_KEY;

const coords = {lat: 40.73936818014904, lng: -73.44753952002102};

const Map = ({coords = {lat: 40.73936818014904, lng: -73.44753952002102}}) => {
    const {theme} = useTheme();
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_KEY
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{
                width: '100%',
                height: '100%',
            }}
            center={coords}
            zoom={12}
            options={{
                disableDefaultUI: true,
                zoomControl: false,
                styles: MAP_THEME[theme],
            }}
        >
            <Marker position={coords}/>
        </GoogleMap>
    ) : <></>
}

const SellerListItem = ({ seller, index }) => {
  const getPercentage = (value) => {
    const total = seller.profit.reduce((sum, category) => sum + category.totalRevenue, 0);
    return total ? (value / total) * 100 : 0;
  };

  console.log("getPercentage", seller)
  const colors = ["accent", "red", "green", "yellow", "header"];

  return (
    <Spring
      className="card flex flex-col gap-5 md:gap-[26px] xl:flex-row xl:justify-between"
      index={index}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_,minmax(0,240px)] lg:gap-[26px]">
        <div className="flex flex-col flex-1 gap-5 md:flex-row md:gap-[26px]">
          <div className="flex flex-col shrink-0 gap-5 md:w-[193px]">
            <div className="img-wrapper h-[156px] flex justify-center items-center">
              <img
                className="max-w-[120px]"
                src={seller.logo}
                alt={seller.name}
              />
            </div>
            <NavLink
              className="btn btn--primary"
              to={`/seller-profile/${seller.id}`}
            >
              Hồ sơ
            </NavLink>
          </div>
          <div>
            <h3 className="truncate max-w-[220px] xs:max-w-[260px] md:max-w-full xl:max-w-[218px]">
              {seller.name}
            </h3>
            <div className="flex flex-col items-start gap-2.5">
              <p className="max-w-[220px]">{seller.address}</p>
              <a
                className="transition hover:text-accent"
                href={`tel:${seller.phone}`}
              >
                {seller.phone}
              </a>
              <a
                className="transition hover:text-accent"
                href={`mailto:${seller.email}`}
              >
                {seller.email}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[230px] w-full rounded-md mt-2.5 overflow-hidden bg-body md:mt-5 lg:m-0 lg:h-full">
          {MAP_KEY && <Map coords={coords} />}
        </div>
      </div>
      <div className=" flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <div className="w-[300px]">
            <h5 className="mb-2.5">Thống kê:</h5>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="badge-icon bg-green">
                  <i className="icon-barcode" />
                </div>
                <div className="flex flex-col">
                  <Counter className="h3" num={seller?.totalOrdersEcommerce} />
                  <span className="label-text">Đơn hàng</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge-icon bg-accent">
                  <i className="icon-diamond text-[23px] mt-1" />
                </div>
                <div className="flex flex-col">
                  <Counter
                    className="h3"
                    num={seller.totalRevenueEcommerce}
                    isFormatted
                  />
                  <span className="label-text">Lợi nhuận</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-2.5">Đánh giá:</h5>
            <RatingStars rating={seller.rating} />
          </div>
        </div>
        <div className="max-w-[300px] flex flex-row">
          <h5 className="mb-2.5 xl:hidden 2xl:block">
            Lợi nhuận bán hàng theo danh mục:
          </h5>
          <div className="flex flex-col w-[300px]">
            <h5 className="mb-2.5 hidden xl:block 2xl:hidden">Lợi nhuận:</h5>
            <div className="flex flex-col gap-4">
              {seller.profit.slice(0, 4).map((category, index) => (
                <LabeledProgressBar
                  key={category._id}
                  wrapperClass="!gap-0"
                  label={category.categoryName}
                  value={getPercentage(
                    category.totalRevenue | category.totalProducts
                  )}
                  displayValue={numFormatter(
                    category.totalRevenue | category.totalProducts,
                    2
                  )}
                  color={colors[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Spring>
  );
};

export default SellerListItem