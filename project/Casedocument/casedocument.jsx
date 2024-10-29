// import React, { useState } from 'react';

// const Casedocument = () => {
//   const [file, setFile] = useState(null);
//   const [documentName, setDocumentName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your file upload logic here
//     console.log('Uploading:', file, documentName, description);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Add Case Document</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Document Name</label>
//           <input
//             type="text"
//             value={documentName}
//             onChange={(e) => setDocumentName(e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             rows="3"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Upload Document</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
//         >
//           Upload Document
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Casedocument;
import React, { useState } from 'react';

const Casedocument = () => {
  const [file, setFile] = useState(null);
  const [documentName, setDocumentName] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your file upload logic here
    console.log('Uploading:', file, documentName, description);
  };

  return (
       <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="container mx-auto p-7 bg-white shadow-lg rounded-lg">
      <div className="mx-auto max-w-2xl text-center">
        <h className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Case Document</h>

      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-lg font-medium text-gray-800">Document Name</label>
          <input
            type="text"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        
        <div>
          <label className="block text-lg font-medium text-gray-800">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            rows="4"
          />
        </div>
        
        <div>
          <label className="block text-lg font-medium text-gray-800">Upload Document</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button style={{ backgroundColor: '#3b82f6', color: 'white' }} className="font-bold py-2 px-4 rounded-full" type="submit">
  Submit
</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Casedocument;

