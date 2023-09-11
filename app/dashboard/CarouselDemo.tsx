"use client";
import React from "react";
import CustomCarousel from "../../components/Carousel";
import { Button } from "@/components/Button";
const items = [
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#47aad44a",
      height: "200px",
      borderRadius: "1rem",
    }}
  ></div>,
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#47AAD4",
      height: "200px",
      borderRadius: "1rem",
    }}
  ></div>,
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#66D2B8",
      height: "200px",
      borderRadius: "1rem",
    }}
  ></div>,
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#EBEBEB",
      height: "200px",
      borderRadius: "1rem",
    }}
  ></div>,
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#D33030",
      height: "200px",
      borderRadius: "1rem",
    }}
  ></div>,
];

const buttons = [
  <div
    style={{
      background: "gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "200px",
    }}
  >
    what are you doing right now<Button>Label</Button>
  </div>,
  <div
    style={{
      background: "gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "200px",
    }}
  >
    what are you doing right now<Button>Label</Button>
  </div>,
  <div
    style={{
      background: "gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "200px",
    }}
  >
    what are you doing right now<Button>Label</Button>
  </div>,
  <div
    style={{
      background: "gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "200px",
    }}
  >
    what are you doing right now<Button>Label</Button>
  </div>,
  <div
    style={{
      background: "gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "200px",
    }}
  >
    what are you doing right now<Button>Label</Button>
  </div>,
  <div
    style={{
      background: "gray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "200px",
    }}
  >
    what are you doing right now<Button>Label</Button>
  </div>,
];

function CarouselDemo() {
  return (
    <div>
      <CustomCarousel items={items} perPage={3} padding="2xs" />
      {/* <CustomCarousel
        style={{ width: "50%" }}
        items={buttons}
        perPage={3}
        padding="2xs"
      /> */}
    </div>
  );
}

export default CarouselDemo;
