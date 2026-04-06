"use client";
import { useState } from 'react'
import { StableFlowForm } from "./_components/stableflow-form";
import { StableFlowGenerator } from './_components/stableflow-generator';
import { StableFlowData } from '@/types/stableflow-data.type';



export default function Home() {
  const [data, setData] = useState<StableFlowData | null>(null)

  function handleSubmit(userInfo: StableFlowData) {
    setData(userInfo)
  }

  return (
    <>
      {!data ? (
        <StableFlowForm onSubmit={handleSubmit} />
      ) : (
        <StableFlowGenerator data={data} onReset={() => setData(null)} />
      )}
    </>
  );
}
