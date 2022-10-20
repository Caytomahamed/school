// Array nest Object 


// let result = await db
//   .select(
//     "c.course_id",
//     "c.course_title",
//     "c.description",
//     "u.user_id",
//     "u.username",
//     "u.image",
//     "ch.chapter_id",
//     "ch.chapter_title",
//     "v.video_id",
//     "v.video_title",
//     "v.video",
//     "r.review_id",
//     "r.review_star",
//     "r.commnet",
//     "ur.user_id as reviewer_id",
//     "ur.username as reviewer_name",
//     "ur.image as reviewer_image"
//   )
//   .from("chapters as ch")
//   .join("videos as v", "ch.chapter_id", "v.chapter_id")
//   .join("courses as c", "c.course_id", "c.course_id")
//   .join("users as u", "u.user_id", "c.user_id")
//   .join("reviews as r ", "r.course_id", "c.course_id")
//   .join("users as ur ", "u.user_id", "r.user_id");
// // .then((chapters) => {
// //   let videoIsaNewchapter = true;
// //   chapters.map((ch) => {
// //     for (let i = 0; i < result.length; i++) {
// //       const element = result[i];
// //       if (element?._id === ch.chapter_id) {
// //         videoIsaNewchapter = false;
// //         element.videos.push({
// //           _id: ch.video_id,
// //           title: ch.video_title,
// //           video: ch.video,
// //         });
// //       }
// //     }

// //     videoIsaNewchapter &&
// //       result.push({
// //         _id:ch
// //         chapters: [
// //           {
// //             _id: ch.chapter_id,
// //             titile: ch.chapter_title,
// //             videos: [
// //               {
// //                 _id: ch.video_id,
// //                 title: ch.video_title,
// //                 video: ch.video,
// //               },
// //             ],
// //           },
// //         ],
// //       });
// //   });
// // });
