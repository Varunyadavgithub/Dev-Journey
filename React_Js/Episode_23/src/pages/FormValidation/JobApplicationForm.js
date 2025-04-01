import React, { useState } from "react";
import { validationSchema } from "../../zod/validationSchema";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    degree: "",
    university: "",
    yearOfPassing: "",
    skills: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data using Zod schema
    const result = validationSchema.safeParse(formData);
    if (!result.success) {
      const errorField = result.error.formErrors.fieldErrors;
      setErrors(errorField);
      return;
    } else {
      setErrors({});
      console.log(formData); // Handle form submission (e.g., submit to an API)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Job Application</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Degree:</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.degree && (
              <p className="text-red-500 text-sm">{errors.degree}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">University:</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.university && (
              <p className="text-red-500 text-sm">{errors.university}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Year of Passing:</label>
            <input
              type="text"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.yearOfPassing && (
              <p className="text-red-500 text-sm">{errors.yearOfPassing}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Skills:</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.skills && (
              <p className="text-red-500 text-sm">{errors.skills}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Resume:</label>
            <input
              type="file"
              name="resume"
              onChange={fileChangeHandler}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
