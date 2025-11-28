import React from "react";
import Card from "./Card";
import "../css/CardSection.css";

const CardsSection = () => {
  const cardData = [
    {
      title: "React Basics",
      description: "Learn the fundamentals of React including JSX, components, and props.",
      color: "#ff014f"
    },
    {
      title: "State & Events",
      description: "Understand how to use state and handle events in React components.",
      color: "#00bcd4"
    },
    {
      title: "Styling Components",
      description: "Practice applying CSS styles and dynamic styles with props.",
      color: "#ff9800"
    }
  ];

  return (
    <section className="cards-section">
      <h1>Props Practice Section</h1>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
