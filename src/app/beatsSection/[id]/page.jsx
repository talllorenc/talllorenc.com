"use client"
// "use client"
import {useEffect, useState} from "react";

const HelloWorld = ({params}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/beat/getOne/${id}/`);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
          ) : (
        <div id={data._id}>
          <span>{data.title}</span>
          <span>{data.price}</span>
          <span>{data.bpm}</span>
        </div>)}
      </div>
    </div>
  );
};

export default HelloWorld;
