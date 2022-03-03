import Head from "next/head";
import Layout from "../components/layout";
import TabsRender from "../components/ReactNewsLayer/Tabs";

export default function AdsBanner() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2 md:mx-4">
      <Head>
        <title>Ads Banner | HelloReact</title>
        <meta
          name="description"
          content="helloReact Free React Resources for Developers in 2022"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 md:px-20 xl:px-96 text-center">
        <div className="flex flex-col mx-2 md:mx-10">
          <h2 className="my-5 text-2xl text-helloblue-700 font-semibold">
            Start Running Ads on this Website Banner
          </h2>

          <div className="mt-5 md:mt-0 ">
            <form
              action="https://formsubmit.co/560d47194bcb65da44c8f2387e83989b"
              method="POST"
            >
              <div className="flex flex-col mx-4 md:mx-10 text-left shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="flex flex-col">
                    <input
                      type="hidden"
                      name="_subject"
                      value="Ads Deal!"
                    />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://helloreact-beta.vercel.app/thankyou"
                    />
                    <div className="my-4">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="Name"
                        id="Name"
                        autoComplete="given-name"
                        required
                        className="mt-1 focus:ring-helloblue-500 focus:border-helloblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="my-4">
                      <fieldset>
                        <div>
                          <p className="block text-sm font-medium text-gray-700">
                            Ads Type
                          </p>
                        </div>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center cursor-pointer">
                            <input
                              id="Ads Type"
                              name="Ads Type"
                              type="radio"
                              className="focus:ring-helloblue-500 cursor-pointer h-4 w-4 text-helloblue-600 border-gray-300"
                            />
                            <label
                              htmlFor="Ads Type"
                              className="ml-3 cursor-pointer block text-sm font-medium text-gray-700"
                            >
                              One Week and Half
                            </label>
                          </div>
                          <div className="flex items-center cursor-pointer">
                            <input
                              id="Ads Type"
                              name="Ads Type"
                              type="radio"
                              className="focus:ring-helloblue-500 cursor-pointer h-4 w-4 text-helloblue-600 border-gray-300"
                            />
                            <label
                              htmlFor="Ads Type"
                              className="ml-3 cursor-pointer block text-sm font-medium text-gray-700"
                            >
                              One-Month Banner
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div className="my-2">
                      <label
                        htmlFor="Description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="Description"
                          name="Description"
                          rows={3}
                          className="shadow-sm focus:ring-helloblue-500 focus:border-helloblue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Please, provide some details to help the project succeed"
                          defaultValue={""}
                          required
                        />
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        Brief description for your request
                      </p>
                    </div>

                    <div className="my-2">
                      <label
                        htmlFor="Email address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="Email address"
                        id="Email address"
                        autoComplete="Email address"
                        required
                        className="mt-1 focus:ring-helloblue-500 focus:border-helloblue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <p className="mt-2 text-xs text-gray-500">
                        We need your e-mail to contact you for validation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-helloblue-600 hover:bg-helloblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-helloblue-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
