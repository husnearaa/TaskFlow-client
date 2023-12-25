import { useContext} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const AddTask = () => {

  const { user } = useContext(AuthContext);
  const {register, handleSubmit, formState: { errors },} = useForm();



  const onSubmit = async (data, e) => {
    e.preventDefault();
    const title = data.title;
    const priority = data.priority;
    const date = data.date;
    const des = data.des;

    const Info = {
      title,
      email: user?.email,
      priority,
      deadline: date,
      description: des,
    };

    axios.post("http://localhost:5000/tasks",Info)
    .then(res => {
        if (res.data.insertedId) {
            toast.success('Task added Successfully !')
            e.target.reset();
            // navigate('/')
        }
    })
  }
    return (
        <div className="text-black max-w-full  mx-auto h-screen flex items-center justify-center flex-col mb-20 lg:mb-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gradient-to-tr from-black  to-green-600 md:w-2/3 lg:w-[550px] p-8 rounded-lg drop-shadow-2xl"
            >
                <h1 className="mb-5 font-bold text-4xl text-white text-center">
                    Add New Task
                </h1>
                <div>
                    <label
                        htmlFor="title"
                        className="block mb-2  text-lg font-medium text-white"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        {...register("title", {
                            required: "Title is required!",
                        })}
                        placeholder="write your task title here"
                        className=" rounded-md mb-2 block outline-green-400  w-full border text-base py-2"
                    />
                    {errors.title && (
                        <span className="text-red-600 text-xs">
                            {errors.title.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="block mb-2 text-lg font-medium text-white">
                        Priority
                    </label>

                    <select
                        name="priority"
                        {...register("priority")}
                        id=""
                        className="text-base mb-2 py-2 rounded-md w-full block"
                    >
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="date"
                        className="block mb-2  text-lg font-medium text-white"
                    >
                        Deadline
                    </label>
                    <input
                        id="date"
                        type="datetime-local"
                        {...register("date", {
                            required: "Deadline is required!",
                        })}
                        placeholder="article title here"
                        className=" rounded-md mb-2 block outline-green-400 w-full py-2 text-base"
                    />
                    {errors.date && (
                        <span className="text-red-600 text-base">
                            {errors.date.message}
                        </span>
                    )}
                </div>

                <label
                    htmlFor="article"
                    className="block mb-2  text-sm font-medium text-white"
                >
                    Task Description
                </label>
                <textarea
                    className=" resize-none outline-green-400 block w-full text-base rounded-md"
                    rows="4"
                    id="article"
                    {...register("des", {
                        minLength: {
                            value: 10,
                            message: "Description should be at least 10 character!",
                        },
                    })}
                    placeholder="write here about your task..."
                ></textarea>
                {errors.des && (
                    <span className="text-red-600 text-xs">{errors.des.message}</span>
                )}
                <button
                    className={`mt-6  mx-auto flex items-center gap-3 justify-center  rounded-md  bg-transparent text-white hover:text-black hover:bg-white border-white border-2 ease-linear px-4 py-2 duration-300`}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTask;