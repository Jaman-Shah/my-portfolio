import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-thin text-[50px]"> My Skills </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* frontend  */}
        <div className="md:border-r border-black md:pr-4">
          <h1 className="text-center font-thin mb-4 text-[32px]">
            Frontend Technologies
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img src="/images/html.png" alt="HTMl" className="h-20 w-20" />
              <p>HTML</p>
            </div>
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img src="/images/css.png" alt="CSS" className="h-20 w-20" />
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img
                src="/images/javascript.png"
                alt="JAVASCRIPT"
                className="h-20 w-20"
              />
              <p>JAVASCRIPT</p>
            </div>
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img src="/images/react.png" alt="REACT" className="h-20 w-20" />
              <p>REACT</p>
            </div>
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img
                src="/images/tailwind.png"
                alt="TAILWIND"
                className="h-20 w-20"
              />
              <p>TAILWIND</p>
            </div>
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img
                src="/images/firebase.png"
                alt="FIREBASE"
                className="h-20 w-20"
              />
              <p>FIREBASE</p>
            </div>
          </div>
        </div>

        {/* backend */}
        <div>
          <h1 className="text-center font-thin mb-4 text-[32px]">
            Backend Technologies
          </h1>{" "}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img src="/images/node.png" alt="NODE JS" className="h-20 w-20" />
              <p>NODE JS</p>
            </div>
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img
                src="/images/express.png"
                alt="EXPRESS"
                className="h-20 w-20"
              />
              <p>EXPRESS</p>
            </div>
            <div className="flex flex-col items-center border border-gray-400 rounded-2xl p-4">
              <img
                src="/images/mongodb.png"
                alt="MONGODB"
                className="h-20 w-20"
              />
              <p>MONGODB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
