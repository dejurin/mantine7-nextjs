import React from "react";
import NativeSelectExample from "../components/NativeSelectExample";
import Link from "next/link";

export default function Page() {
  return (
    <>
        <h1>NativeSelectExample</h1>
        <Link href="/grid">SimpleGridExample</Link>
        <NativeSelectExample />
    </>
  );
}