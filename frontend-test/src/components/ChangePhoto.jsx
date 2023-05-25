import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { Link } from 'react-router-dom';

class ChangePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: localStorage.getItem('selectedImage') || null,
      showWebcam: false,
    };
    this.webcamRef = React.createRef();
  }

  handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.setState({
        selectedImage: reader.result,
        showWebcam: false,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  handleWebcamCapture = () => {
    const imageSrc = this.webcamRef.current.getScreenshot();
    this.setState({
      selectedImage: imageSrc,
      showWebcam: false,
    });
  };

  handleWebcamOpen = () => {
    this.setState({ showWebcam: true });
  };

  handleSave = () => {
    const { selectedImage } = this.state;
    localStorage.setItem('selectedImage', selectedImage);
    console.log('Image saved:', selectedImage);
  };

  render() {
    const { selectedImage, showWebcam } = this.state;
    const divStyle = {
      backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
    };

    const videoConstraints = {
      width: 375,
      height: 667,
      facingMode: 'user',
    };

    return (
      <>
        <div className="mx-2 min-w-[343px] min-h-[343px] rounded-md bg-gray-300 my-4 bg-cover bg-center" style={divStyle}></div>

        {showWebcam && (
          <div className="w-full h-full absolute inset-0 mt-6">
            <Webcam
              audio={false}
              ref={this.webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-full"
              videoConstraints={videoConstraints}
            />
            <div className="absolute bottom-[4rem] left-0 w-full h-full flex items-end justify-center">
              <button
                className="bg-white text-gray-800 rounded-full h-[50px] w-[50px]"
                onClick={this.handleWebcamCapture}
              ></button>
            </div>
          </div>
        )}

        <div
          className="cursor-pointer mx-2 min-w-[343px] min-h-[40px] rounded-md bg-[#006C84] my-4 text-white flex items-center justify-center text-[12px]"
          onClick={this.handleWebcamOpen}
        >
          Ambil Dari Kamera
        </div>

        <label
          htmlFor="camera"
          className="cursor-pointer mx-2 min-w-[343px] min-h-[40px] rounded-md bg-[#006C84] my-4 text-white flex items-center justify-center text-[12px]"
        >
          Ambil Dari Galeri
          <input
            id="camera"
            type="file"
            accept="image/*"
            capture="camera"
            style={{ display: 'none' }}
            onChange={this.handleImageChange}
          />
        </label>

        {selectedImage && (
          <Link
            to="/"
            className="cursor-pointer min-w-[343px] min-h-[40px] bg-[#002984] mt-4 text-white flex items-center justify-center text-[12px]"
            onClick={this.handleSave}
          >
            Simpan
          </Link>
        )}
      </>
    );
  }
}

export default ChangePhoto;

