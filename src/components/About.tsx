import React from "react";

const About = () => {
  return (
    <section className="flex justify-center items-center py-20">
      <div className="bg-white shadow-lg rounded-xl p-10 flex items-center space-x-10 max-w-5xl">
        {/* Right Text Section */}
        <div className="w-2/3">
          <h2 className="text-3xl font-bold text-black">About me</h2>
          <h3 className="text-lg font-semibold text-gray-700 mt-1">
            Software Developer
          </h3>
          <p className="text-gray-600 mt-4">
            I am a Developer with over 3 years Experience
            working with Javascript and SQL. Proficient in Resolution of Issues
            and Requirements using Javascript,React and SQL. Seeking to Join a
            fast Paced Environment to Leverage existing Skills to help improve
            and develop new solutions
          </p>
          <p className="text-gray-600 mt-3">
            I also can design logos, icons, illustrations, and other visual
            assets. For Android and Apple, I can create visually appealing app
            interfaces, layouts, menus, buttons, and icons that ensure a
            user-friendly experience.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition">
              Hire me
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
