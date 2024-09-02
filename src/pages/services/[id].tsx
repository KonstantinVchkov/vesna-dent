import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Details for Offer ID: {id}</h1>
      <p>This is where you could fetch and display details about the offer.</p>
    </div>
  );
};

export default DetailPage;
