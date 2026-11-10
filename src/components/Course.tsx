// interface to define the types in the props
interface CourseProps {
    title: string;
    lessonCount: number;
}

// Function to return a single course
function SingleCourse({title, lessonCount}: CourseProps){


    return(
        <button>
            <h2>{title}</h2>
            <p>{lessonCount} lessons</p>
        </button>
    );
}

export default SingleCourse;