"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [status, setStatus] = useState("연결 상태를 확인 중...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/check-server");
        const data = await response.json();
        setStatus(data.data);
      } catch (error) {
        setStatus("아쉽게도 연결 안되었넹 ㅠ.");
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl mb-8">소마 비욥 통합 관리 시스템</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <p className="font-mono text-lg">
          과연 스프링 서버와 연결이 잘 되었을까요????????????
        </p>
        <div className="mt-4 p-4 bg-gray-900 rounded-lg font-mono text-sm text-green-400">
          {status}
        </div>
      </div>
    </main>
  );
}
