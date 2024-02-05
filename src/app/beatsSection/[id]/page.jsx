"use client"

import SingleBeat from "@/components/SingleBeat/SingleBeat";

const BeatDetail = ({params}) => {
  return (
    <div>
      <SingleBeat params={params}/>
    </div>
  );
};

export default BeatDetail;
