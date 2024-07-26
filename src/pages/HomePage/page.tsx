"use client";
import axios from "axios";
// import axios from "axios";
import { useState } from "react";

function HomePage() {
  const [subject, setSubject] = useState("");
  const [paragraph, setParagraph] = useState("");

  const sendMail = async (e: any) => {
    e.preventDefault();
    // await axios.get("/api/send").then(res => {
    //     console.log(res.data);
    // });

    const data = {
      subject,
      paragraph,
    };

    await axios.post("/api/send", data).then((res) => {
      console.log(res.data);
    });

    // console.log(data);
  };

  return (
    <form onSubmit={sendMail} className="flex flex-col gap-6 p-6 w-[600px]">
      <h1 className="text-2xl font-bold">E-Mail Send</h1>
      <label className="font-bold">Subject</label>
      <input
        className="border-2 p-2 border-slate-900 rounded"
        type="text"
        placeholder="Write Subject Here"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />
      <label className="font-bold">Paragraph</label>
      <textarea
        className="border-2 p-2 border-slate-900 rounded"
        name="paragraph"
        id=""
        cols={4}
        rows={4}
        placeholder="Write a Paragraph Here"
        value={paragraph}
        onChange={(e) => {
          setParagraph(e.target.value);
        }}
      ></textarea>
      <button
        className="bg-blue-800 w-[40%] text-white p-2 rounded hover:bg-blue-500 transition-all duration-300"
        type="submit"
      >
        Send E-Mail
      </button>
    </form>
  );
}

export default HomePage;
