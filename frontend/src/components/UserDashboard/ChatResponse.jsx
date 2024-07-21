import ReactMarkdown from 'react-markdown';
const ChatResponse=(props)=>{
    return (
        <>
        {props.role=='bot'?

        <li className="flex gap-x-2 sm:gap-x-4">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
        >
          <rect
            x="2"
            y="7"
            width="20"
            height="14"
            rx="2"
            ry="2"
            fill="#2563EB"
          />
          <rect
            x="7"
            y="2"
            width="10"
            height="5"
            rx="2"
            ry="2"
            fill="#2563EB"
          />
          <circle cx="8.5" cy="13.5" r="1.5" fill="white" />
          <circle cx="15.5" cy="13.5" r="1.5" fill="white" />
          <rect
            x="10"
            y="16"
            width="4"
            height="1.5"
            rx="0.75"
            ry="0.75"
            fill="white"
          />
        </svg>

        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
          <div className="space-y-1.5">
            <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
            <ReactMarkdown>
              {props.text}
              </ReactMarkdown>
            </p>
          </div>
        </div>
      </li>
      :
      <li className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
      <div className="grow text-end space-y-3">
        <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
          <p className="text-sm text-white">{props.text}</p>
        </div>
      </div>

      <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
        <span className="text-sm font-medium text-white leading-none">
          AZ
        </span>
      </span>
    </li>
        }
    </>
    )
}
export default ChatResponse