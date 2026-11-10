import { useState } from "react";

// interface to define the types in the props
interface CourseProps {
    title: string;
    lessonCount: number;
}

interface ListItemProps {
    lessons: string[];
}

function ListItems({ lessons }: ListItemProps){
    return(<ul>
        {lessons.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>)
}

// Function to return a single course
function SingleCourse({title, lessonCount}: CourseProps){

    const [isExpanded, setIsExpanded] = useState(false);
    const lessons = ["Lesson 1", "Lesson 2","Lesson 3"];

    return(
        <div>
            <button onClick={() => {
                setIsExpanded(!isExpanded);
            }}>
                <h2>{title}</h2>
                <p>{lessonCount} lessons</p>
            </button>
            {isExpanded ? <ListItems lessons={lessons}/> : null}
        </div>

    );
}

export default SingleCourse;