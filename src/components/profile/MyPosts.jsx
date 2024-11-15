const MyPosts = () => {
  return (
    <>
      <article class="card mt-6 lg:mt-8">
        <header class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <img
              class="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src="./assets/images/avatars/avatar_1.png"
              alt="avatar"
            />
            <div>
              <h6 class="text-lg lg:text-xl">Sumit Saha</h6>
              <div class="flex items-center gap-1.5">
                <img src="./assets/icons/time.svg" alt="time" />
                <span class="text-sm text-gray-400 lg:text-base">
                  12 min ago
                </span>
              </div>
            </div>
          </div>

          <div class="relative">
            <button>
              <img src="./assets/icons/3dots.svg" alt="3dots of Action" />
            </button>

            <div class="action-modal-container">
              <button class="action-menu-item hover:text-lwsGreen">
                <img src="./assets/icons/edit.svg" alt="Edit" />
                Edit
              </button>
              <button class="action-menu-item hover:text-red-500">
                <img src="./assets/icons/delete.svg" alt="Delete" />
                Delete
              </button>
            </div>
          </div>
        </header>

        <div class="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
          <div class="flex items-center justify-center overflow-hidden">
            <img
              class="max-w-full"
              src="./assets/images/poster.png"
              alt="poster"
            />
          </div>
          <p>
            Grateful for the incredible experience of serving as the President
            of the Grand Jury board for this year's Digital Marketing Award
            organized by Bangladesh Brand Forum. Judging the best digital
            marketing campaigns was not just a responsibility but a journey of
            appreciation for innovation and creativity. The judging process,
            ensuring transparency, brought to light so many beautiful campaigns.
            Cheers to the dynamic world of digital marketing! sdfasd asdca sdfa
            sdca sdfa
          </p>
        </div>

        <div class="flex items-center justify-between py-6 lg:px-10 lg:py-8">
          <button class="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src="./assets/icons/like.svg" alt="Like" />
            <span>Like</span>
          </button>

          <button class="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
            <img src="./assets/icons/comment.svg" alt="Comment" />
            <span>Comment(2)</span>
          </button>

          <button class="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
            <img src="./assets/icons/share.svg" alt="Share" />
            <span>Share</span>
          </button>
        </div>

        <div>
          <div class="flex-center mb-3 gap-2 lg:gap-4">
            <img
              class="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
              src="./assets/images/avatars/avatar_1.png"
              alt="avatar"
            />

            <div class="flex-1">
              <input
                type="text"
                class="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                name="post"
                id="post"
                placeholder="What's on your mind?"
              />
            </div>
          </div>

          <div class="mt-4">
            <button class="text-gray-300 max-md:text-sm">All Comment ▾</button>
          </div>

          <div class="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
            <div class="flex items-center gap-3 pt-4">
              <img
                class="max-w-6 max-h-6 rounded-full"
                src="./assets/images/avatars/avatar_2.png"
                alt="avatar"
              />
              <div>
                <div class="flex gap-1 text-xs lg:text-sm">
                  <span>Tapas Adhikari: </span>
                  <span>Great Sumit Saha dada ❤</span>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3 pt-4">
              <img
                class="max-w-6 max-h-6 rounded-full"
                src="./assets/images/avatars/avatar_1.png"
                alt="avatar"
              />
              <div>
                <div class="flex gap-1 text-xs lg:text-sm">
                  <span>Sumit Saha: </span>
                  <span>Great Sumit Saha dada ❤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default MyPosts;
