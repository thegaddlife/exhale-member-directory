import React from 'react'

export const Sidebar = (): JSX.Element => {
  return (
    <>
      <div className="hidden overflow-y-auto w-28 bg-exgreen md:block">
        <div className="flex flex-col items-center w-full py-6">
          <div className="flex items-center flex-shrink-0">
            <img
              className="w-auto h-10 rounded-xl"
              src="https://lh3.googleusercontent.com/2nJcJFSuQi_UZ1ofS5yfWn0x1Y80Z9KI8iDZz1_J1Umwfoi8egiFrA6Nufc2OMOr4KIpLg=s85"
              alt="Workflow"
            />
          </div>
          <div className="flex-1 w-full px-2 mt-6 space-y-1">
            <a
              href="#"
              className="flex flex-col items-center w-full p-3 text-xs font-medium text-white rounded-md hover:bg-green-800 hover:text-white group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="mt-2">Home</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center w-full p-3 text-xs font-medium text-white rounded-md hover:bg-green-800 hover:text-white group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="mt-2">Help</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center w-full p-3 text-xs font-medium text-white rounded-md hover:bg-green-800 hover:text-white group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="mt-2">Settings</span>
            </a>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

        <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-green-700">
          <div className="absolute right-0 p-1 top-1 -mr-14">
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close sidebar</span>
            </button>
          </div>

          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt="Workflow"
            />
          </div>
          <div className="flex-1 h-0 px-2 mt-5 overflow-y-auto">
            <nav className="flex flex-col h-full">
              <div className="space-y-1">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-green-100 rounded-md hover:bg-green-800 hover:text-white group"
                >
                  <svg
                    className="w-6 h-6 mr-3 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Home</span>
                </a>

                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-green-100 rounded-md hover:bg-green-800 hover:text-white group"
                >
                  <svg
                    className="w-6 h-6 mr-3 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Help</span>
                </a>

                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-green-100 rounded-md hover:bg-green-800 hover:text-white group"
                >
                  <svg
                    className="w-6 h-6 mr-3 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Settings</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </>
  )
}
