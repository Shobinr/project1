import React, { useState } from 'react';

const Client= () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    caseType: '',
    caseSummary: '',
    caseStatus: '',
    caseFilingDate: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.clientName) newErrors.clientName = 'Client name is required';
    if (!formData.clientEmail) newErrors.clientEmail = 'Client email is required';
    if (!formData.caseType) newErrors.caseType = 'Case type is required';
    if (!formData.caseSummary) newErrors.caseSummary = 'Case summary is required';
    if (!formData.caseFilingDate) newErrors.caseFilingDate = 'Filing date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // You can submit the form data to an API here
    }
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
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-md shadow-lg mt-10">
    <div className="mx-auto max-w-2xl text-center">
      <h className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Client & Case Management</h>
      <p className="mt-2 text-lg leading-8 text-gray-600">
      </p>
    </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Client Information */}
        <div className="space-y-6">
          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.clientName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
          </div>

          {/* Client Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Email</label>
            <input
              type="email"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.clientEmail ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.clientEmail && <p className="text-red-500 text-sm mt-1">{errors.clientEmail}</p>}
          </div>

          {/* Client Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Phone</label>
            <input
              type="tel"
              name="clientPhone"
              value={formData.clientPhone}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Case Information */}
        <div className="space-y-6">

          {/* Case Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Case Type</label>
            <input
              type="text"
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.caseType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.caseType && <p className="text-red-500 text-sm mt-1">{errors.caseType}</p>}
          </div>

          {/* Case Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Case Summary</label>
            <textarea
              name="caseSummary"
              value={formData.caseSummary}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.caseSummary ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            ></textarea>
            {errors.caseSummary && <p className="text-red-500 text-sm mt-1">{errors.caseSummary}</p>}
          </div>

          {/* Filing Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Filing Date</label>
            <input
              type="date"
              name="caseFilingDate"
              value={formData.caseFilingDate}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.caseFilingDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.caseFilingDate && <p className="text-red-500 text-sm mt-1">{errors.caseFilingDate}</p>}
          </div>

          {/* Case Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Case Status</label>
            <select
              name="caseStatus"
              value={formData.caseStatus}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6border ${errors.caseStatus ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            >
              <option value="">Select Status</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.caseStatus && <p className="text-red-500 text-sm mt-1">{errors.caseStatus}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button style={{ backgroundColor: '#3b82f6', color: 'white' }} className="font-bold py-2 px-4 rounded-full" type="submit">
  Submit
</button>
        </div>
        </div>
        
      </form>
      
    </div>
    </div>
  );
};

export default Client;
