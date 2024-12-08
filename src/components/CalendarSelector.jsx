import RangeDatePicker from "@ui/RangeDatePicker";
import PropTypes from "prop-types";

const CalendarSelector = ({
  wrapperClass,
  label = "Thời gian bán hàng",
  id,
  onDateChange,
}) => {
  const handleDateChange = (startDate, endDate) => {
    if (onDateChange) {
      onDateChange({ startDate, endDate });
    }
  };

  return (
    <div className={`${wrapperClass || ""} flex flex-col gap-2.5 w-full`}>
      <label className="h5 w-fit" htmlFor={id}>
        {label}:
      </label>
      <RangeDatePicker id={id} onChange={handleDateChange} />
    </div>
  );
};

CalendarSelector.propTypes = {
  wrapperClass: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDateChange: PropTypes.func,
};

export default CalendarSelector;
