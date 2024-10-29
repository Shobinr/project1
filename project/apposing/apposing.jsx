import React, { useState } from 'react';

const apposing = () => {
  const [formData, setFormData] = useState({
    caseType: '',
    clientName: '',
    clientContact: '',
    opposingParty: '',
    opposingContact: '',
    caseSummary: '',
    filingDate: '',
    caseStatus: ''
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
    if (!formData.caseType) newErrors.caseType = 'Case type is required';
    if (!formData.clientName) newErrors.clientName = 'Client name is required';
    if (!formData.clientContact) newErrors.clientContact = 'Client contact is required';
    if (!formData.opposingParty) newErrors.opposingParty = 'Opposing party is required';
    if (!formData.opposingContact) newErrors.opposingContact = 'Opposing party contact is required';
    if (!formData.caseSummary) newErrors.caseSummary = 'Case summary is required';
    if (!formData.filingDate) newErrors.filingDate = 'Filing date is required';
    if (!formData.caseStatus) newErrors.caseStatus = 'Case status is required';

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
        <h className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Apposing Case</h>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Client Section */}
        <div className="space-y-6">

          {/* Case Type */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Case Type</label>
            <input
              type="text"
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.caseType ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.caseType && <p className="text-red-500 text-sm mt-1">{errors.caseType}</p>}
          </div>

          {/* Client Name */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.clientName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
          </div>

          {/* Client Contact */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Client Contact</label>
            <input
              type="text"
              name="clientContact"
              value={formData.clientContact}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.clientContact ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.clientContact && <p className="text-red-500 text-sm mt-1">{errors.clientContact}</p>}
          </div>

          {/* Filing Date */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Filing Date</label>
            <input
              type="date"
              name="filingDate"
              value={formData.filingDate}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.filingDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.filingDate && <p className="text-red-500 text-sm mt-1">{errors.filingDate}</p>}
          </div>
        </div>

        {/* Opposing Party Section */}
        <div className="space-y-6">
         

          {/* Opposing Party */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Opposing Party</label>
            <input
              type="text"
              name="opposingParty"
              value={formData.opposingParty}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.opposingParty ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.opposingParty && <p className="text-red-500 text-sm mt-1">{errors.opposingParty}</p>}
          </div>

          {/* Opposing Party Contact */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Opposing Party Contact</label>
            <input
              type="text"
              name="opposingContact"
              value={formData.opposingContact}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 py-2 border ${errors.opposingContact ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.opposingContact && <p className="text-red-500 text-sm mt-1">{errors.opposingContact}</p>}
          </div>

          {/* Case Summary */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Case Summary</label>
            <textarea
              name="caseSummary"
              value={formData.caseSummary}
              onChange={handleChange}
              className={`mblock w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6t-1 block w-full px-4 py-2 border ${errors.caseSummary ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            ></textarea>
            {errors.caseSummary && <p className="text-red-500 text-sm mt-1">{errors.caseSummary}</p>}
          </div>

          {/* Case Status */}
          <div>
          <label htmlFor="Opposing Party" className="block text-sm font-medium leading-6 text-gray-900">Case Status</label>
            <select
              name="caseStatus"
              value={formData.caseStatus}
              onChange={handleChange}
              className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border ${errors.caseStatus ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
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

export default apposing;
