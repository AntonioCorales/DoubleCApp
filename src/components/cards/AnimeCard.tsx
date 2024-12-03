import { Media } from "@/types/anime";
import LargeImage from "../images/LargeImage";
import React from "react";

export default function AnimeCard(props: { anime: Media }) {
  return (
    <article className="flex flex-row gap-3 p-4 rounded-md border-solid border-slate-800 border-[1px]">
      <div className="min-w-[120px] max-w-[110px] flex flex-col gap-2">
        <LargeImage src={props.anime.coverImage.large} alt="cover" />
        <span className="text-sm">{props.anime.episodes} capítulos</span>

        {props.anime.genres && props.anime.genres.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2 ">
            {props.anime.genres.map((genre, index) => (
              <span key={index} className="text-xs text-slate-400">
                {genre}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-col">
          <h3 className="text-base font-bold">{props.anime.title.romaji}</h3>
          <span className="text-xs ">{props.anime.title.english}</span>
        </div>
        {props.anime.description && (
          <p
            className="text-pretty text-xs text-ellipsis line-clamp-[6] text-slate-400"
            dangerouslySetInnerHTML={{ __html: props.anime.description }}
          />
        )}
        <a
          href={`https://anilist.co/anime/${props.anime.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-slate-800 text-white rounded-md px-2 py-1 text-sm hover:bg-slate-700">
            Ver en Anilist
          </button>
          
        </a>
        <a href={`https://myanimelist.net/anime/${props.anime.idMal}`} target="_blank" rel="noreferrer">
          <button className="bg-slate-800 text-white rounded-md px-2 py-1 text-sm hover:bg-slate-700">
            Ver en MyAnimeList
          </button>
        </a>
      </div>
    </article>
  );
}
