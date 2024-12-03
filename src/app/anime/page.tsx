"use client";
import AnimeCard from "@/components/cards/AnimeCard";
import { useGetAnimeByUser } from "@/queries/getAnimeByUser";
import { useState } from "react";
import React from "react";

export default function Anime() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("DoubleCReacts");

  const { data, error, isLoading } = useGetAnimeByUser(search);
  console.log(data);

  return (
    <div className="flex flex-col gap-3 min-h-screen py-8 px-4 font-[family-name:var(--font-geist-sans)] ">
      <div className="flex flex-col justify-items-center gap-10 mx-auto max-w-screen-sm w-full">
        <div className="flex gap-4 items-center w-full">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-transparent border-solid border-slate-400 border-[1px] rounded-md p-2 text-sm outline-none flex-1"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={() => setSearch(name)}
            className="bg-slate-800 text-white rounded-md px-2 py-1 text-base hover:bg-slate-700 h-full"
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="lg:max-w-screen-2xl mx-auto flex flex-col gap-10">
        {isLoading && <p>Loading...</p>}

        {data?.lists &&
          data.lists.length > 0 &&
          data.lists.map((list, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">{list.name}</h2>
              <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.entries.map((entry, index) => (
                  <AnimeCard key={index} anime={entry.media} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
