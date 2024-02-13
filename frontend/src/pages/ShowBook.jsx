// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';

// const parseDateString = (dateString) => {
//   const date = new Date(dateString);
//   return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();
// };

// const ShowBook = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(false);
//   const {id} = useParams();

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:5555/${id}`)
//       .then((response) => {
//         setBook(response.data);
//         setLoading(false);

//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       })

//   }, []);
//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-4'>Show Book</h1>
//       {loading ? (
//         <Spinner />
//       ) : ( 
//         <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
//           <div className='p-4'>
//             <span className='text-xl mr-4 text-gray-500'>Id</span>
//             <span>{book._id}</span>
//           </div>
//           <div className='p-4'>
//             <span className='text-xl mr-4 text-gray-500'>Title</span>
//             <span>{book.title}</span>
//           </div>
//           <div className='p-4'>
//             <span className='text-xl mr-4 text-gray-500'>Author</span>
//             <span>{book.author}</span>
//           </div>
//           <div className='p-4'>
//             <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
//             <span>{book.publishYear}</span>
//           </div>
//           <div className='p-4'>
//             <span className='text-xl mr-4 text-gray-500'>Create Time</span>
//             <span>{parseDateString(book.createdAt)}</span>
//           </div>
//           <div className='p-4'>
//             <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
//             <span>{parseDateString(book.updatedAt)}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ShowBook

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Function to parse date string into a readable format
  const parseDateString = (dateString) => {
    if (!dateString) return 'N/A'; // Return N/A if the date string is empty
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : ( 
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='p-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='p-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='p-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='p-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='p-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{parseDateString(book.createdAt)}</span>
          </div>
          <div className='p-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{parseDateString(book.updatedAt)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
