import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkWebcamPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        stream.getTracks().forEach((track) => track.stop());
      } catch (error) {
        setTimeout(() => {
          navigate("/page4");
        }, 1);
      }
    };

    checkWebcamPermission();

  }, [navigate]);

  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page2">
        <button type="button">Start</button>
      </Link>
    </div>
  );
};

export default Page1;
