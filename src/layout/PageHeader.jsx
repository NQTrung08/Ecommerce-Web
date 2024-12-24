// components
import DocumentTitle from "@components/DocumentTitle";

// hooks
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

// utils
import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { width } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <>
      <DocumentTitle title={title} />
      <div
        className="card no-hover flex flex-col gap-5 !p-5 mb-5 md:mb-[26px] md:!p-[26px] lg:!py-5 lg:flex-row
                 lg:items-center lg:gap-4"
      >
        <h1 className="flex-1 text-center lg:text-left text-2xl">{title}</h1>
      </div>
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
