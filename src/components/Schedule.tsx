const Schedule = () => {
  return (
    <div className="mt-6 mb-16">
      <h3 className="mb-4 text-2xl font-bold">スケジュール</h3>
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              Day 1 (Online)
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            13:00 ~ Opening Ceremony
            <br />
            ・ Welcome speech by organizer
            <br />
            ・ Greetings from mentors
            <br />
            ・ Notices
            <br />
            13:30 ~ 14:00 Marketing lecture by CEO of Amatec, Matsui
            <br />
            14:00 ~ Start of Ideathon
            <br />
            17:00 ~ Interim presentation
            <br />
            18:00 ~ Closing Ceremony
          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              Day 2 (TOMOSUBA)
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            10:30 ~ Doors open
            <br />
            11:00 ~ Opening Ceremony for Day 2
            <br />
            ・ Introduction of sponsor companies (10 minutes)
            <br />
            &nbsp;&nbsp;&nbsp; ・ TOMOSUBA
            <br />
            &nbsp;&nbsp;&nbsp; ・ Bridge Corporation
            <br />
            &nbsp;&nbsp;&nbsp; ・ Coming Soon...
            <br />
            12:00 ~ Ideathon resumes!
            <br />
            16:00 ~ Final presentation
            <br />
            16:45 ~ Announcement of results
            <br />
            17:15 ~ 18:30 Networking party
          </dd>
        </div>

      </dl>
    </div>
  );
}

export default Schedule;
