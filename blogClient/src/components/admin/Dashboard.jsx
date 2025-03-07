import React,{useContext,useEffect,useState} from 'react'
import { Bar } from "react-chartjs-2";
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ContextApp from '../context/ContextApp';
// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



// Data for the Bar Chart and Histogram (to be replaced with your actual data)


const histogramData = {
  labels: ["0-10", "10-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80"],
  datasets: [
    {
      label: "Frequency",
      data: [5, 12, 8, 15, 7, 10, 6, 9],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart",
    },
  },
};
const Dashboard = () => {
  const { AllComments } = useContext(ContextApp);
  // console.log(AllComments.length);
  
  const [Users,SetAllusers]=useState([]);
  const [blogData, setFilteredBlogs] = useState([]);
// console.log(blogData);

  const HomeBlogDisplay = async () => {
    try {
      const response = await axios.get(
        "  http://localhost/blogweb/backend/allblogs.php"
      );
      // console.log(response.data)
      setFilteredBlogs(response.data.blogs);
    
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };



  //api fetch for  allusers
    const allUser = async () => {
      try {
        //fetch api
        const api = await axios.get(
          "http://localhost/blogweb/backend/allUser.php",
  
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(api.data.users);
        SetAllusers(api.data.users);
  
      } catch (error) {
        console.log("something  went wrong :", error);
      }
    };
  
    useEffect(()=>{
      allUser();
      HomeBlogDisplay();
    },[]);
  
  
//fetch api for all blogslikecount
const [blogLikeCount, setBlogLikeCount] = useState([]);
// console.log(blogLikeCount);

const blogCountTotalLike=async()=>{
const api=await axios.get("http://localhost/blogweb/backend/all_blog_likes_post.php",
  {
    headers: {
"Content-Type":"application/json"
    }
  }
)
// console.log(api.data);

setBlogLikeCount(api.data.Likes.length)
// console.log(api.data.Likes.length);

}

useEffect(()=>{
  //call function
  blogCountTotalLike();
},[])



  return (
    <div>
        <div className="md:ml-64">
            <h1 className="text-3xl font-bold mb-4 mt-10 md:mt-0">Dashboard</h1>
           
           
            <div className="w-auto grid grid-cols-1 md:grid-cols- gap-4">
              <div className=" bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">Total Users (registered user)</h2>
                <p className="text-2xl mt-2">{Users? Users.length :"0" }</p>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">Total Blogs</h2>
                <p className="text-2xl mt-2">  {blogData? blogData.length : "0"} </p>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">Total blog Likes</h2>
                <p className="text-2xl mt-2">{blogLikeCount>0 ? blogLikeCount:"0"    }</p>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">Total blog Comments </h2>
                <p className="text-2xl mt-2">{AllComments? AllComments.length:"0"    }</p>
              </div>
            </div>

            {/* <div className="w-auto lg:flex mt-8  bg-white p- rounded-xl">
              <div className="w-[260px]  xl:w-[400px] mx-auto p- bg-white shadow-xl rounded-xl">
                <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
                <Bar data={barData} options={options}/>
              </div>

              <div className="w-[260px] xl:w-[400px] mx-auto mt-8 p- shadow-xl  bg-white rounded-xl">
                <h2 className="text-xl font-bold m">Histogram</h2>
                <Bar data={histogramData} options={options} />
              </div>
            </div> */}
          </div>
    </div>
  )
}

export default Dashboard
