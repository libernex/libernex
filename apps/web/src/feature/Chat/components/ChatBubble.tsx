import Image from "next/image";
import type { ChatInterface, MessageInterface } from "@repo/types/src/Chat";
import starAvatarImage from "/public/Star-Avatar.webp";
import ReactMarkdown from "react-markdown";
import TipTapEditor from "@/feature/Viewer/components/TipTap/TipTapEditor.tsx";

interface ChatBubbleProps {
  chat: ChatInterface;
}

const getContentBody = (chat: ChatInterface): string => {
  const message: MessageInterface = chat.parts[0];
  if (!message.content) {
    return "";
  }
  return message.content.body;
};

function ChatBubble({ chat }: ChatBubbleProps): JSX.Element {
  return (
    <div>
      <div className="flex items-start gap-2">
        <Image
          alt={chat.sender.nickname}
          className="w-12 h-12 rounded-full"
          height={48}
          src={
            chat.sender.role === "user"
              ? starAvatarImage
              : chat.sender.avatarSrc
          }
          width={48}
        />
        {chat.parts.length > 0 ? (
          <div className="flex flex-col w-full leading-1.5">
            <p className="text-lg font-normal py-2 text-gray-900">
              {/*<TipTapEditor initialContent={getContentBody(chat)} editable={false}/>*/}
              <ReactMarkdown>{getContentBody(chat)}</ReactMarkdown>
            </p>
            <span className="text-sm font-normal text-gray-500">
              {chat.sentAt}
            </span>
            <span className="text-sm font-normal text-gray-500">
              {chat.status}
            </span>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}

function Skeleton(): JSX.Element {
  return (
    <div className="w-full animate-pulse mt-4 overflow-hidden" role="status">
      <div className="h-2.5 bg-gray-300 rounded-full w-48 mb-4" />
      <div className="h-2 bg-gray-300 rounded-full max-w-[360px] mb-2.5" />
      <div className="h-2 bg-gray-300 rounded-full mb-2.5" />
      <div className="h-2 bg-gray-300 rounded-full max-w-[330px] mb-2.5" />
      <div className="h-2 bg-gray-300 rounded-full max-w-[300px] mb-2.5" />
      <div className="h-2 bg-gray-300 rounded-full max-w-[360px]" />
    </div>
  );
}

function FileBubble(): JSX.Element {
  return (
    <div className="flex items-start gap-2.5">
      <img
        alt="Bonnie Green image"
        className="w-8 h-8 rounded-full"
        src="/docs/images/people/profile-picture-3.jpg"
      />
      <div className="flex flex-col gap-1">
        <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2">
            <div className="me-2">
              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 20 21"
                >
                  <g clipPath="url(#clip0_3173_1381)">
                    <path
                      d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"
                      fill="#E2E5E7"
                    />
                    <path
                      d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"
                      fill="#B0B7BD"
                    />
                    <path
                      d="M18.774 9.25l-3.75-3.75h3.75v3.75z"
                      fill="#CAD1D8"
                    />
                    <path
                      d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"
                      fill="#F15642"
                    />
                    <path
                      d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"
                      fill="#fff"
                    />
                    <path
                      d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"
                      fill="#CAD1D8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3173_1381">
                      <path
                        d="M0 0h20v20H0z"
                        fill="#fff"
                        transform="translate(0 .5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Flowbite Terms & Conditions
              </span>
              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                12 Pages
                <svg
                  aria-hidden="true"
                  className="self-center"
                  fill="none"
                  height="4"
                  viewBox="0 0 3 4"
                  width="3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.5" cy="2" fill="#6B7280" r="1.5" />
                </svg>
                18 MB
                <svg
                  aria-hidden="true"
                  className="self-center"
                  fill="none"
                  height="4"
                  viewBox="0 0 3 4"
                  width="3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.5" cy="2" fill="#6B7280" r="1.5" />
                </svg>
                PDF
              </span>
            </div>
            <div className="inline-flex self-center items-center">
              <button
                className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-900 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
              </button>
            </div>
          </div>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
      <button
        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        data-dropdown-placement="bottom-start"
        data-dropdown-toggle="dropdownDots"
        id="dropdownMenuIconButton"
        type="button"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 4 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      <div
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
        id="dropdownDots"
      >
        <ul
          aria-labelledby="dropdownMenuIconButton"
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
        >
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              Reply
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              Forward
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              Copy
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              Report
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChatBubble;
