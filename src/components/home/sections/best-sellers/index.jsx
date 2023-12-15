import Section from "@/components/shared/Section";
import Slider from "@/components/shared/Slider";
import React from "react";

const BestSellers = () => {
  return (
    <div className="w-full h-[200vh] bg-blue-50">
      <Section>
        Best Sellers
        <Slider />
      </Section>
    </div>
  );
};

export default BestSellers;
