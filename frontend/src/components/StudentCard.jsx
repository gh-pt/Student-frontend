import React, { useState } from "react";
import { RiClipboardLine } from "@remixicon/react";
import { RiCheckboxCircleFill } from "@remixicon/react";

const StudentCard = ({ student }) => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1000);
    });
  };

  return (
    <div className="w-full sm:max-w-[650px] mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-800">
          {student["Student First Name"]} {student["Student Middle Name"]}{" "}
          {student["Student Last Name"]}
        </h2>
        <h3 className="text-md font-semibold text-gray-800">
          Student ID: {student["Student ID"]}
          <button
            className={`px-2 py-1 rounded-md text-white`}
            onClick={() => copyToClipboard(student["Student ID"], "Student ID")}
          >
            {copiedField === "Student ID" ? (
              <RiCheckboxCircleFill
                className="text-black"
                size={15}
                color="green"
              ></RiCheckboxCircleFill>
            ) : (
              <RiClipboardLine
                className="text-black"
                size={15}
              ></RiClipboardLine>
            )}
          </button>
        </h3>
      </div>
      <p className="text-sm text-gray-600">School: {student["School Name"]}</p>
      <p className="text-sm text-gray-600">Grade: {student["Grade Name"]}</p>
      <p className="text-sm text-gray-600">Division: {student.Division}</p>
      <p className="text-sm text-gray-600">DOB: {student["Student DOB"]}</p>
      <div className="flex sm:items-center justify-between flex-col sm:flex-row mt-2">
        {[
          "Student EduLearn ENR",
          "EduLearn Application No",
          "Student New ENR",
        ].map((field, index) => (
          <div key={index} className="text-sm font-semibold text-gray-700">
            <p className="text-sm text-gray-500 mr-2">
              {field.replace("Student ", "").replace("EduLearn ", "")}:
            </p>
            <div className="flex items-center justify-between">
              <p>{student[field]}</p>
              <button
                className={`px-2 py-1 rounded-md text-white`}
                onClick={() => copyToClipboard(student[field], field)}
              >
                {copiedField === field ? (
                  <RiCheckboxCircleFill
                    className="text-black"
                    size={15}
                    color="green"
                  ></RiCheckboxCircleFill>
                ) : (
                  <RiClipboardLine
                    className="text-black"
                    size={15}
                  ></RiClipboardLine>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Guardians</h3>
        {student.Guardians.map((guardian, index) => (
          <div
            key={index}
            className={`mt-2 p-3 rounded-md shadow-sm text-gray-800 ${
              guardian.Relationship === "Father"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100"
            }`}
          >
            <h2
              className={`text-sm font-bold mb-1 border border-black inline-block px-1 py-0.5 rounded-md ${
                guardian.Relationship === "Father"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {guardian.Relationship}
            </h2>
            <div className={`flex items-center justify-between mb-2 `}>
              <h3 className="text-md font-medium text-gray-800">
                <p className="text-sm text-gray-500">Full name:</p>
                {guardian["First Name"]} {guardian["Middle Name"]}{" "}
                {guardian["Last Name"]}
              </h3>
              <h4 className="text-md font-semibold">
                <p className="text-sm text-gray-500">Guardian ID:</p>
                {guardian["Guardian ID"]}{" "}
                <button
                  className={`px-2 py-1 rounded-md text-white`}
                  onClick={() =>
                    copyToClipboard(
                      guardian["Guardian ID"],
                      `Gaurdian ID - ${index}`
                    )
                  }
                >
                  {copiedField === `Gaurdian ID - ${index}` ? (
                    <RiCheckboxCircleFill
                      className="text-black"
                      size={15}
                      color="green"
                    ></RiCheckboxCircleFill>
                  ) : (
                    <RiClipboardLine
                      className="text-black"
                      size={15}
                    ></RiClipboardLine>
                  )}
                </button>
              </h4>
              <h4 className="text-md font-semibold">
                <p className="text-sm text-gray-500">Global No:</p>
                {guardian["Global No"]}{" "}
              </h4>
            </div>
            {["Mobile", "Email", "Password"].map((field, idx) => (
              <p key={idx} className="text-sm flex items-center">
                <span className="text-gray-500 mr-2">{field}:</span>
                {guardian[field]}
                <button
                  className={`ml-2 px-2 py-1 rounded-md text-white`}
                  onClick={() =>
                    copyToClipboard(guardian[field], `${field}-${index}`)
                  }
                >
                  {copiedField === `${field}-${index}` ? (
                    <RiCheckboxCircleFill
                      className="text-black"
                      size={15}
                      color="green"
                    ></RiCheckboxCircleFill>
                  ) : (
                    <RiClipboardLine
                      className="text-black"
                      size={15}
                    ></RiClipboardLine>
                  )}
                </button>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
