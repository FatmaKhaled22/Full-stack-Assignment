import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../services/user";
import { setUser } from "../../store/reducer/userSlice";
import { useEffect } from "react";
import { getTasksByUser } from "../../services/tasks";
import { setCompletedTasks } from "../../store/reducer/taskSlice";



function Profile() {

  var dispatch = useDispatch();
  const id = localStorage.getItem("userid");
  
  /////////////////////////////////////////////////////
  ///Select details of user from reducer
  const user = useSelector((state) => state.user);
  console.log("User -->",user);
  const taskscomplete = useSelector((state) => state.task);
  console.log("Tasks Complete -->", taskscomplete);
  const img = user.img ===! null ;

  ////////////////////////////////////////////////
  /// update reducer with id of user to store details's user
  const fetchUser = async (id) => {
    getUserDetails(id).then((response) => {
      const { user } = response;
      dispatch(setUser(user));
      console.log("response --->", response);
    }).catch((err) => {
      console.log("error in fetch user --> ", err);

    });
  };


  ////////////////////////////////////////////////
  /// update reducer with id of user to store completed tasks by user
  // const [taskscomplete, setTaskscomplete] = useState([]);

  const fetchTasksCompleted = async (id) => {
    // axiosInstance.get(`/usertasks/user/${id}`).then((res) => {
    //   console.log("all tasks user is completed", res.data);
    //   setTaskscomplete(res.data);
    // }).catch((err) => {
    //   console.log("error ---->", err);
    // });
    getTasksByUser(id).then((response) => {
      const taskscomplete  = response;
      dispatch(setCompletedTasks(taskscomplete));
      console.log("response tasks --->", response);
    }).catch((err) => {
      console.log("error in fetch user --> ", err);

    });
  }

  ///////////////////////////////////////////////////////////////
  /// Sum Total Points of user from tasks is completed
  var sum = 0;
  taskscomplete.map((task) => {
    var x = task.taskId.points;
    console.log(x);
    sum = sum + x;
  });
 console.log(sum);


  useEffect(() => {
    fetchUser(id);
    fetchTasksCompleted(id)
  }, [id]);


  return (
    <>
      <section className="container mb-4">
        <h1 className="text-center my-4">Profile</h1>
        <div className="row g-4">
          <div className="col col-12 col-md-4" key={user._id}>
            <div className="card card-shadow">
              <img
                src={img ? user.img : "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg"}
                className="card-img-top rounded-circle"
                alt="photo"
              />
              <div className="card-body user">
                <h4 className="card-title pb-1 text-center">{user.userName}</h4>
                <hr></hr>
                <h6 className="card-text">Email : <b> {user.email}</b></h6>
                <h6 className="card-text">Phone : <b> {user.phoneNumber}</b></h6>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <small className="text-body-secondary">
                  Current Total Points
                </small>
                <span>{sum}</span>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-8">
          <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title py-2">Detailes of degree</h5>
                <div className="table-responsive">
                  <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name of Task</th>
                      <th scope="col">Points</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {taskscomplete.length == 0 ? <div>not any degree yet</div> : taskscomplete.map((task)=>{
                      return(
                        <tr>
                          <td>{task.taskId.name}</td>
                          <td>{task.taskId.points}</td>
                        </tr>
                      )
                    })}
                    <tr>
                      <td>Total Points</td>
                      <td><h4 className="text-danger">{sum}</h4></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>

            {taskscomplete.length == 0 ? (<h2 className="text-center my-4">No tasks have been completed yet</h2>)
            : (<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-4">
              {taskscomplete.map((task)=>{
                return( 
                  <div className="col" key={task._id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{task.taskId.name}</h5>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <small className="text-body-secondary">Points</small>
                        <span>{task.taskId.points}</span>
                      </div>
                    </div>
                  </div>
                ) 
              })}
            </div>)
          }

        </div>
      </div>
    </section>
    </>
  );
}

export default Profile;
