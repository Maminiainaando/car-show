import Image from "next/image"
import maPhoto from '../public/car.jpg';

const MaPhoto=()=>{
    return (
        <Image
          src={maPhoto}
          alt="Ma photo"
          sizes="100vw"
          style={{width: '100%', height: 'auto'}}
        />
    )
}
export default MaPhoto;