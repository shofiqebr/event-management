import { AiFillDashboard } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const Fasilities = () => {
    return (
        <div>
            <div className='text-center text-5xl py-10 font-bold'>
                Facilities
            </div>


        <div className=' pb-10 flex justify-between mx-72'>
        <div >
            <AiFillDashboard className='w-32 h-32'></AiFillDashboard>
            <p>Every Day Support</p>
        </div>
        <div>
        <FaLocationArrow className='w-32 h-32'></FaLocationArrow>
        <p>Great Location </p>
        </div>
        <div>
        <BsFillPersonPlusFill className='w-32 h-32'></BsFillPersonPlusFill>
        <p>200+ speaker</p>
        </div>
        </div>
        </div>
        
    );
};

export default Fasilities;