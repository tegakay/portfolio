import React from "react";

const Projects = () => {
    const services = [
        {
          id: 1,
          title: "Meal Planner",
          description:
            "A web application that helps users plan their meals for the week, providing recipes and grocery lists based on their dietary preferences.",
            url:"https://meal-plan-sigma.vercel.app/"
        },
        {
          id: 2,
          title: "Password Generator",
          description:
            "A simple web application that generates strong, random passwords based on user-defined criteria, such as length.",
            url:"subtle-kashata-0eee80.netlify.app"
        },
        // {
        //   id: 3,
        //   title: "Security/SEO",
        //   description:
        //     "I create secure websites with relevant content that meets the needs of your customers. Also, I seek mobile optimization, faster loading pages, and keywords that help search engines and rankings.",
        //     url:""
        // },
      ];
  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black">Projects</h2>
        <p className="text-lg font-semibold text-gray-700 mt-2">
          Here are some selected projects I have worked on
        </p>
        
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-black text-white p-8 rounded-lg shadow-lg max-w-xs relative">
            
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-white text-black font-bold rounded-full text-lg shadow-md">
              {service.id}
            </div>

           
            <div className="max-w-xs">
            <h3 className="text-xl font-semibold text-center mt-6">{service.title}</h3>
            <p className="text-gray-300 text-center mt-4">{service.description}</p>
            </div>

            
            <div className="flex justify-center mt-6">
              <a href={service.url} className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
