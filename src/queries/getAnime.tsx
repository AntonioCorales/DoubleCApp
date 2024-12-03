"use client";

import { ResponseAnime } from "@/types/anime";
import { gql } from "@apollo/client";
import { useQuery } from "@tanstack/react-query";

const queryAnime = `query Query($type: MediaType, $search: String) {
    Media(type: $type, search: $search) {
      id
      episodes

      bannerImage
      coverImage {
        color
        extraLarge
        large
        medium
      }
      genres
      title {
        english
        romaji
        native
      }
      description
    }
  }`;

export const GET_ANIME = gql`
  query Query($type: MediaType, $search: String) {
    Media(type: $type, search: $search) {
      id
      episodes

      bannerImage
      coverImage {
        color
        extraLarge
        large
        medium
      }
      genres
      title {
        english
        romaji
        native
      }
      description
    }
  }
`;

export function useGetAnime(name: string) {
  return useQuery<ResponseAnime>({
    queryKey: ["anime", name],
    queryFn: async () => {
      const response = await fetch(`https://graphql.anilist.co/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: queryAnime,
          variables: {
            type: "ANIME",
            search: name,
          },
        }),
      });
      const { data } = await response.json();
      return data;
    },
    enabled: !!name && !!name.trim(),
    refetchOnWindowFocus: false,
  });
}
