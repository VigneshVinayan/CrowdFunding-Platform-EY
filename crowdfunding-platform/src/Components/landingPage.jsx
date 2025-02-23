import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/navbar_Landing";
import ImageLanding from "../Components/image_landing";
// import OnGoingCampaigns from "../Components/onGoingCampaigns";
// import WhyUs from "../Components/whyUsSection";
// import NobelCauseComponent from "../Components/nobelCauseComponent";
// import ProudToDonate from "../Components/proudToDonateComponent";
import ScrollToTop from "../Components/ScrollToTop";
// import { getAllCampaigns } from "../services/campaign";
import { compare } from "../Components/utills/math";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        // const { data } = await getAllCampaigns();
        if (data) {
          const sortedData = [...data].sort(compare);
          setData(sortedData.slice(0, 4));
        }
      } catch (err) {
        const errorMessage = err.response?.data?.message || "Something went wrong";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleClick = useCallback((campaignId) => {
    history(`/campaign/${campaignId}`);
  }, [history]);

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <ImageLanding />
      {/* <WhyUs /> */}
      {/* <OnGoingCampaigns handleClick={handleClick} data={data} loading={loading} /> */}
      {/* <NobelCauseComponent /> */}
      {/* <ProudToDonate /> */}
    </>
  );
};

export default LandingPage;
