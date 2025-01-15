import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import { imageLinks } from "../../data/data";
import Timeline from "../Timeline/Timeline";
import { educationData } from "../../data/data";
const VerticalTabs = () => {
  const tabs = ["Introduction", "Education", "Projects", "Research"];
  const [activeTab, setActiveTab] = useState("Introduction");

  return (
    <div className="flex min-h-screen bg-base-200 w-full">
      {/* Vertical Tabs */}
      <div className="tabs tabs-boxed flex flex-col w-1/6 p-4 bg-base-300 tabs-lg">
      <div className="h-1/4" ></div>
        {tabs.map((tab) => (
          <a
            key={tab}
            role="tab"
            className={`tab text-center w-full h-16 ${
              activeTab === tab ? "tab-active bg-primary text-white" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </a>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 p-8">
        {activeTab === "Introduction" && (
          <div>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <div>
                  <h1 className="text-5xl font-bold">Hello There!</h1>
                  <p className="py-6 text-center ">
                    I am{" "}
                    <b className="text-3xl font-bold text-primary hover:text-secondary">
                      Gazi Fardin Zafor Suvro{" "}
                    </b>
                    I am currently a final year student of{" "}
                    <a className="font-semibold text-accent">
                      Computer Science and Engineering(CSE)
                    </a>{" "}
                    at{" "}
                    <a className="text-accent font-bold">
                      Bangladesh University of Engineering and Technology
                      (BUET).
                    </a>
                    I am also a passionate web developer and ameter
                    photographer. I love to code and capture moments. I am also
                    a tech enthusiast and love to learn new technologies.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
                {/* <img
              src="https://ivgsiwtdnayirmsiauza.supabase.co/storage/v1/object/public/Portifolio/meeeee.jpeg"
              className="max-w-sm rounded-lg shadow-2xl"
            /> */}
                <div className="flex justify-center items-center max-h-screen w-full">
                  <Carousel images={imageLinks} />
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Education" && (
          <div>
            <div className="hero bg-base-200 min-h-screen">
              <div className="container mx-auto p-4 overflow-x-auto">
                <h1 className="text-2xl font-bold mb-4">
                  My Education Timeline
                </h1>
                <Timeline educationData={educationData} />
              </div>
            </div>
          </div>
        )}
        {activeTab === "Projects" && (
          <div>
            <h2 className="text-3xl font-bold">Projects</h2>
            <p>
              Check out some of the exciting projects I've worked on, including
              web apps and AI systems.
            </p>
          </div>
        )}
        {activeTab === "Research" && (
          <div>
            <h2 className="text-3xl font-bold">Research</h2>
            <p>
              Dive into my research on AI, machine learning, and deep learning
              technologies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalTabs;