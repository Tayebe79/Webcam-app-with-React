import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Link} from 'react-router-dom';

const Page2 = () => {
  const [picture] = useState('');
  const [isFrontFacing, setIsFrontFacing] = useState(true);
  const webcamRef = React.useRef(null);

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: isFrontFacing ? 'user' : { exact: 'environment' },
  };

  const toggleCamera = () => {
    setIsFrontFacing((prevState) => !prevState);
  };

  return (
    <div>
      <h2 className="mb-5 text-center">Page 2 (Webcam)</h2>
      <div>
        
        {picture === '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} alt="Captured" />
        )}
      </div>
   
      <button type="button" onClick={toggleCamera}>
        Switch Camera
      </button>
      <Link to="/page3">
        <button type="button">Result</button>
      </Link>

    </div>
  );
};

export default Page2;
