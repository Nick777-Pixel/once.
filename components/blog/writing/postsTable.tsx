"use client";

import Image from "next/image";
import usePosts from "../../../utils/fetchHook/usePosts";
import { getAuthorIconByName } from "../../../utils/author";
import Button from "../../shared/button";
import useRemovePost from "../../../utils/fetchHook/useRemovePost";

const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-300"
    >
      {children}
    </th>
  );
};

export default function Table() {
  const { posts, isLoading } = usePosts();
  const { trigger, isMutating } = useRemovePost();

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-x overflow-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
            <table className="min-w-full table-auto divide-y divide-zinc-200 overflow-auto dark:divide-zinc-700">
              <thead className="bg-zinc-50 dark:bg-zinc-800">
                <tr>
                  <Column>Title</Column>
                  <Column>Author</Column>
                  <Column>Date</Column>
                  <Column>Actions</Column>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-transparent dark:divide-zinc-700">
                {posts &&
                  posts.map((post, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <h1 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {post.title}
                        </h1>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0">
                            <Image
                              src={getAuthorIconByName(post.author)}
                              alt={post.author}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {post.author}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-300">
                        {post.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                        <Button
                          onClick={() => trigger(post.id)}
                          loading={isMutating}
                          className="bg-red-600 px-2 py-1.5 text-xs dark:hover:bg-red-700"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                {posts && posts.length === 0 && (
                  <tr>
                    <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                      No posts found
                    </td>
                  </tr>
                )}
                {isLoading && (
                  <tr className="animate-pulse">
                    <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                      Loading...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
