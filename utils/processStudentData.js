export default async function processStudentData(studnets) {
    const allStudnetsArray = [];
    let objectID = 0;
    studnets.forEach(student => {
        student.enrolled_courses.forEach(course => {
            if (course.status !== 'Enrolled') {
                const eachStudentObject = {
                    id: objectID,
                    name: student.name,
                    phone: student.phone,
                    email: student.email,
                    course_detail: [],
                    number: course.purchase_info[0].phoneNumber,
                    transactionId: course.purchase_info[0].transactionID,
                    status: course.status,
                };
                course.chapters.forEach(chapter => {
                    const eachCourseDetail = {
                        course_key: course.key,
                        course_type: course.course_type,
                        chapter_name: chapter.chapter_name,
                        total_class: chapter.total_class,
                        price: chapter.price,
                        slot: course.slot,
                        version: course.version,
                    };
                    eachStudentObject.course_detail.push(eachCourseDetail);
                });
                allStudnetsArray.push(eachStudentObject);
                objectID++;
            }
        });
    });
    return allStudnetsArray;
}
