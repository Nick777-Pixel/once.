"use client";

import { useState, useCallback, useReducer, Suspense } from "react";
import Layout from "../../components/Layout/main";
import markdownToHtml from "../../utils/markdownToHtml";
import Table from "../../components/blog/writing/table";
import usePublishPost from "../../utils/data/usePublishPost";
import { useSession } from "next-auth/react";
import LoginModal from "../../components/blog/writing/loginModal";
import { getAuthorName, isAuthor } from "../../utils/author";
import WritingSection from "../../components/blog/writing/writing";
import * as Tabs from "@radix-ui/react-tabs";

interface PostBaseInfo {
  title: string;
  description: string;
  coverImage: string;
  ogImageURL: string;
}

interface InfoAction {
  type: "TITLE_CHANGED" | "DESCRIPTION_CHANGED" | "COVER_IMAGE_CHANGED";
  payload: string;
}

function reducer(state: PostBaseInfo, action: InfoAction) {
  const { type, payload } = action;
  switch (type) {
    case "TITLE_CHANGED":
      return {
        ...state,
        title: payload,
      };
    case "DESCRIPTION_CHANGED":
      return {
        ...state,
        description: payload,
      };
    case "COVER_IMAGE_CHANGED":
      return {
        ...state,
        coverImage: payload,
        ogImageURL: payload,
      };
    default:
      break;
  }
}

export default function Writing() {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    description: "",
    coverImage: "",
    ogImageURL: "",
  });
  const { data: session, status } = useSession();
  const [content, setContent] = useState("");
  const [markdown, setMarkdown] = useState("");
  const { trigger, isError, isMutating, data } = usePublishPost();

  const preview = useCallback(() => {
    if (content !== "") {
      markdownToHtml(content).then((res) => {
        setMarkdown(res);
      });
    } else {
      setMarkdown("");
    }
  }, [content]);

  if (status === "loading")
    return (
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        </div>
      </Layout>
    );

  if (
    status === "unauthenticated" ||
    ("authenticated" && !isAuthor(session.user.email))
  )
    return <LoginModal />;

  return (
    <Layout>
      <Tabs.Root
        className="container mx-auto max-w-4xl p-8"
        defaultValue="writing"
      >
        <Tabs.List className="mb-8 flex gap-4">
          <Tabs.Trigger
            className="rounded-md px-4 py-2 text-lg font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-hover dark:hover:text-gray-300"
            value="writing"
          >
            Writing
          </Tabs.Trigger>
          <Tabs.Trigger
            className="rounded-md px-4 py-2 text-lg font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-hover dark:hover:text-gray-300"
            value="posts"
          >
            Posts
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="writing">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold">
              Welcome Back {getAuthorName(session.user.email)}
            </h1>
            <h3 className="mt-4 bg-gradient-to-tr from-sky-400 to-blue-200 bg-clip-text text-2xl font-bold text-transparent">
              Let&apos;s start writing
            </h3>
          </div>
          <div className="my-14">
            <WritingSection
              state={state}
              dispatch={dispatch}
              content={content}
              setContent={setContent}
              trigger={trigger}
              isMutating={isMutating}
              markdown={markdown}
              preview={preview}
              data={data}
              isError={isError}
              session={session}
            />
          </div>
        </Tabs.Content>
        <Tabs.Content value="posts">
          <Suspense>
            <Table />
          </Suspense>
        </Tabs.Content>
      </Tabs.Root>
    </Layout>
  );
}