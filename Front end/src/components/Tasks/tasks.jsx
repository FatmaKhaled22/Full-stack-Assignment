import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import '../../style.css';
import { setCompletedTasks } from "../../store/reducer/taskSlice";
import { getTasksByUser } from "../../services/tasks";
import swal from "sweetalert";

function Task() {

  const { id } = useParams();
  console.log("id of Category :  --->", id);

  const user = localStorage.getItem("userid");
  var dispatch = useDispatch();

  const [tasks, setTasks] = useState([]);

  ///////////////////////////////////////////////////////////
  /// Select CategoryId  & tasksCompleted by user from reducer
  const category = useSelector((state) => state.category.find((cat) => cat._id === id));
  const taskscomplete = useSelector((state) => state.task);
  console.log("Tasks Complete -->", taskscomplete);

  ////////////////////////////////////////////////////
  /// Get Tasks from data-base by CategoryId
  const fetchTasksOfCat = async (id) => {
    axiosInstance.get(`/task/category/${id}`).then((res) => {
      console.log("tasks of category", res.data);
      setTasks(res.data);
    }).catch((err) => {
      console.log("error ---->", err);
    });
  }

  /////////////////////////////////////////////////////
  // Post reqest to sending tasks completed by user to server side
  const sendingTaskCompleted = async (obj) => {
    try {
      const SendTask = await axiosInstance.post("/usertasks", obj);
      console.log("tasks is complete", SendTask);
    } catch (error) {
      console.error("Error:", error);
    } 
  }


  ///////////////////////////////////////////////////////
  /// Event on btn to check this task is completed or not and store the complete task in database 

  // var isCompleted;
  // const setCompletedTask = (event) => {
  //   const taskid = event.target.value;
  //   console.log("taskId ---> ",taskid);
  //   // var tasksCompleted;
  //   taskscomplete.map((task) => {
  //     console.log(task.taskId._id , taskid)
  //     if (task.taskId._id == taskid) {
  //       swal("This Task is already completed" ,"warning")
  //       // return (isCompleted == true)
  //     } else if (task.taskId._id !== taskid) {
  //       const tasksCompleted = {
  //         userId:user,
  //         taskId:taskid,
  //       };
  //       sendingTaskCompleted(tasksCompleted);
  //       // return( isCompleted == false)
  //     }
  //   });
  // }
  const setCompletedTask = (event) => {
    const taskId = event.target.value;
    console.log("taskId ---> ",taskId)
    const tasksCompleted = {
      userId:user,
      taskId:taskId,
    };
    console.log("-->",tasksCompleted)
    sendingTaskCompleted(tasksCompleted);
  }

  ///////////////////////////////////////////////////////////
  ///update reducer with id of user to store completed tasks by user 
  const fetchTasksCompleted = async (id) => {
    getTasksByUser(id).then((response) => {
      const taskscomplete  = response;
      dispatch(setCompletedTasks(taskscomplete));
      console.log("response tasks --->", response);
    }).catch((err) => {
      console.log("error in fetch user --> ", err);

    });
  }

  
  useEffect(() => {
    fetchTasksOfCat(id);
    fetchTasksCompleted(user)
  }, [id]);


  return (
    <>
      <section className="container my-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={"/home"}>Home</Link></li>
            <li className="breadcrumb-item"><Link to={"/category"}>Category</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{category.name}</li>
          </ol>
        </nav>
        <h1 className="text-center my-4">{category.name}</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
          {tasks.map((task)=>{
            return(
              <div className="col" key={task._id}>
                <div className="card card-shadow text-center">
                  <img src={task.img} className="card-img-top" style={{height:"30vh"}} alt="img"/>
                  <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.description}</p>
                    {user ? (
                      <button type="button" className="btn btn-outline-danger" value={task._id} onClick={() => {setCompletedTask(event);}}>Completed</button>
                    ):(
                      <h6 className="text-center text-danger">Please <Link className="link-sign" to="/login">Sign In</Link> to earn your points of this task</h6>
                    )}
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <small className="text-body-secondary">Points of this task</small>
                    <span>{task.points}</span>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </section>
    </>
  );
}

export default Task;
