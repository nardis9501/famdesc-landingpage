"use-client";
import DonationForm from "@/components/sponsor/DonationForm";
import Transition from "@/components/Transition/Transition";
import React from "react";

export default function Donation(props) {
  return (
    <>
      <Transition />
      <DonationForm />
    </>
  );
}
