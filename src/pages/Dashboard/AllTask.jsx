import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext} from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { RiDeleteBin5Line } from "react-icons/ri";

const AllTask = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const type = ["todo", "ongoing", "completed"];
    const {
        data: tasks,
        isPending,
        isSuccess,
    } = useQuery({
        queryKey: ["tasks", user],
        queryFn: async () => {
            const res = await axios.get(
                `http://localhost:5000/tasks?email=${user?.email}`
            );
            return res.data;
        },
    });


    return (
        <DragDropContext>
            <div className="mb-20 lg:mb-0 grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 items-start place-content-center gap-5 pt-2 px-2 mx-auto h-fit">
                {/* 1 */}
                {type.map((todos) => (
                    <Droppable droppableId={todos} key={todos}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`shadow-lg rounded-lg p-3  bg-gradient-to-tr ${snapshot.isDraggingOver
                                    ? "bg-black/70"
                                    : todos === "todo"
                                        ? "from-gray-600 to-blue-400"
                                        : todos === "ongoing"
                                            ? "from-gray-600 to-amber-600"
                                            : "from-gray-600 to-green-600"
                                    } `}
                            >
                                <h1 className="text-lg lg:text-xl whitespace-nowrap mb-3 text-white">
                                    {todos.toUpperCase()}
                                </h1>
                                {isPending ? "loading..." : isSuccess ?
                                    tasks?.map((item, i) => todos === item.category && (<Draggable key={i} draggableId={item?._id} index={i}>{(provided) => (
                                        <div ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps} draggable className={`p-3  ${todos === "todo" ? "bg-blue-800" : todos === "ongoing" ? "bg-amber-700" : "bg-green-700"}  relative flex shadow-md text-white rounded-lg gap-2 items-center mt-8`}>
                                            <div
                                                className={`absolute -right-1 -top-5 font-semibold shadow-lg bg-gray-800 text-white  p-2 rounded-md`}>
                                                {item?.priority}
                                            </div>
                                            <div className="flex justify-between items-center flex-1">
                                                <div className="overflow-x-hidden flex-1">
                                                    <h4 className="lg:text-xl font-semibold">{item?.title}</h4>
                                                    <p className="text-sm lg:text-base opacity-90">{item?.description}</p>
                                                    <p className="text-sm pt-2 opacity-90">
                                                        <span className="font-bold">Deadline <br /></span>{" "}
                                                        {moment(item?.deadline).format("MM-D-YY, h:mm a")}
                                                    </p>
                                                </div>
                                                <div className="py-2 flex flex-col">
                                                    <button onClick={() => { navigate(`/dashboard/edit/${item._id}`) }}>
                                                    </button>
                                                    <button >
                                                        <RiDeleteBin5Line className="text-xl cursor-pointer">
                                                        </RiDeleteBin5Line>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    </Draggable>
                                    )
                                    )
                                    : "Not Available"}

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
};

export default AllTask;