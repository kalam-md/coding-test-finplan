import { Link } from 'react-router-dom';
import { camera } from "../assets";

export default function Profile() {
  const selectedImage = localStorage.getItem('selectedImage');
  const imageSource = selectedImage ? selectedImage : camera;

  return (
    <>
      <div className="flex justify-start items-center mt-4 mb-4 mx-2">
        <Link to="/change-photo">
          <img src={imageSource} alt="camera" className="h-[56px] w-[56px] rounded-md" />
        </Link>
        <div className="ml-2">
          <h3 className="font-semibold">John Doe</h3>
          <p>Kelas 10 IPA 8</p>
        </div>
      </div>

      <div className="mx-2 min-w-[341px] min-h-[196px] rounded-md bg-[#002984] my-4"></div>
      <div className="mx-2 min-w-[341px] min-h-[196px] rounded-md bg-[#002984] my-4"></div>
    </>
  )
}