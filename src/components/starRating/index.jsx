import { useState } from 'react'
import { FaStar} from 'react-icons/fa'

import './styles.css';

//export default Starrating(noOfStars = 5)
export default function StarRating({ noOfStars = 5 }) 

//5 is default valuue if we are not passing anything
{

    const [rating, setRating] = useState(0);

    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        // console.log(getCurrentIndex);
         setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
         
        //console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        //console.log(getCurrentIndex);

        setHover(rating)


    }

    return( <div className="star-rating">

        {
            [...Array(noOfStars)].map((_, index) => {
                //This +1 beacuse we start index from 0 when we do + one it would start from one so 
                // correct rating will be given not one less
                index += 1

                return <FaStar
                    key={index}

                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                                onClick={() => handleClick(index)}

                    onMouseEnter={() => handleMouseEnter(index)}

                    onMouseLeave={() => handleMouseLeave()}

                    size={40}



                />
            })
        }
    </div>
    )
}

// import { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// import './styles.css';

// const StarRating = ({ noOfStars = 5 }) => {
//   // `noOfStars` has a default value of 5 if no value is passed
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const handleClick = (index) => {
//     setRating(index);
//   };

//   const handleMouseEnter = (index) => {
//     setHover(index);
//   };

//   const handleMouseLeave = () => {
//     setHover(rating);
//   };

//   return (
//     <div className="star-rating">
//       {[...Array(noOfStars)].map((_, index) => {
//         // Index starts from 0, so add 1 to match the star number
//         index += 1;

//         return (
//           <FaStar
//             key={index}
//             className={index <= (hover || rating) ? 'active' : 'inactive'}
//             onClick={() => handleClick(index)}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave()}
//             size={40}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default StarRating;
