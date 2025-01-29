import PricingList from "@/components/Pricing";
;import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "",
  // other metadata
};  

const PricingPage = () => {
    return (

    <>
      <Breadcrumb
        pageName="Pricing Page"
        description=""
      />
    <PricingList />
    </>
  );
};

export default PricingPage;
