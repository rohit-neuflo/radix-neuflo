"use client";
import { Button } from "../../components/Button";

export default function ButtonPage() {
  return (
    <>
      <Button size="sm" className="icon">
        Login
      </Button>
      <Button size="sm" variant="secondary" className="icon">
        <div className="icon">hi</div>
        Login
      </Button>
    </>
  );
}
