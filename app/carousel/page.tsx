"use client";
import CustomCarousel from "../../components/Carousel";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
const CarouselPage: React.FC = () => {
  const items = [
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "red",
        height: "300px",
        borderRadius: "1rem",
      }}
    ></div>,
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "green",
        height: "300px",
        borderRadius: "1rem",
      }}
    ></div>,
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "blue",
        height: "300px",
        borderRadius: "1rem",
      }}
    ></div>,
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
        height: "300px",
        borderRadius: "1rem",
      }}
    ></div>,
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "yellow",
        height: "300px",
        borderRadius: "1rem",
      }}
    ></div>,
  ];

  return (
    <div className="App">
      {/* <Label>Custom Carousel</Label> */}
      <CustomCarousel items={items} perPage={3} padding="lg" />
    </div>
  );
};

export default CarouselPage;
