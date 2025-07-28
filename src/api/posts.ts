import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Post } from "@/types";

export function useRandomPost() {
  return useQuery({
    queryKey: ["post", "random"],
    queryFn: () => {
      const randomId = Math.floor(Math.random() * 100) + 1;
      return api.get<Post>(`/posts/${randomId}`);
    },
  });
}
