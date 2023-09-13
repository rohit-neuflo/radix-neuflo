"use client";
import React from "react";
import { Button, AuthInput } from "@/src";
function Page() {
  const [authCode, setAuthCode] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auth code:", authCode);
    setError(true);
  };
  return (
    <form>
      <AuthInput fields={8} onChange={setAuthCode} error={error} />
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </form>
  );
}

export default Page;
