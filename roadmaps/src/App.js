import "./App.css";
import MainAdminDash from "./components/MainAdminDash/mainAdminDash";
import CouForAdmin from "./components/CoursesForAdmin/CouForAdmin";
import StudentsAdmin from "./components/AllStudentsForAdmin/studentsAdmin";
import Instructors from "./components/AllInstructorsForAdmin/instructors";
import FrontRoadmap from "./components/FrontRoadMap/frontRoadmap";
import BackEndRoadMap from "./components/BackendRoadMap/backEndRoadMap";
import AndroidRoadMap from "./components/AndroidRoadMap/androidRoadMap";
import IosRoadMap from "./components/IosRoadMapp/IosRoadMap";
import DevopsRoadMap from "./components/DevopsRoadMap/DevopsRoadMap";
import JavaGame from "./components/JavaGameRoadMap/javaGame";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/loading/loading";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/MainAdminDash" element={<MainAdminDash />}>
          {" "}
        </Route>
        <Route path="/CoursesForAdmin" element={<CouForAdmin />}>
          {" "}
        </Route>
        <Route path="/AllStudentsAdmin" element={<StudentsAdmin />}>
          {" "}
        </Route>
        <Route path="/InstructorsForAdmin" element={<Instructors />}>
          {" "}
        </Route>
        <Route path="/Home" element={<Home />}>
          {" "}
        </Route>
        <Route
          path="/FrontRoadmap"
          element={
            <FrontRoadmap>
              <img
                src="./image/finalFront-endRoadmap.png"
                usemap="#image-map"
              />

              <map name="image-map">
                <area
                  target="_blank"
                  alt="html course"
                  title="html course"
                  href="https://www.bing.com/videos/search?q=html&amp;&amp;view=detail&amp;mid=9D833AEDA97C8E18BB929D833AEDA97C8E18BB92&amp;&amp;FORM=VRDGAR&amp;ru=%2Fvideos%2Fsearch%3Fq%3Dhtml%26FORM%3DHDRSC4"
                  coords="631,2,460,59"
                  shape="rect"
                />
              </map>
            </FrontRoadmap>
          }
        ></Route>

        <Route
          path="/BackEndRoadMap"
          element={
            <BackEndRoadMap>
              <img src="./image/Roadmap2-Backend.png" usemap="#image-map" />

              <map name="image-map">
                <area
                  target="_blank"
                  alt="Javascript course"
                  title="Javascript course"
                  href="https://www.youtube.com/watch?v=jS4aFq5-91M"
                  coords="582,497,689,526"
                  shape="rect"
                />
              </map>
            </BackEndRoadMap>
          }
        ></Route>

        <Route
          path="/AndroidRoadMap"
          element={
            <AndroidRoadMap>
              <img src="./image/android.png" usemap="#image-map" />

              <map name="image-map">
                <area
                  target="_blank"
                  alt="kotlin course"
                  title="kotlin course"
                  href="https://www.bing.com/videos/search?q=kotlin&amp;&amp;view=detail&amp;mid=DB91043A36D65485D4BBDB91043A36D65485D4BB&amp;&amp;FORM=VRDGAR&amp;ru=%2Fvideos%2Fsearch%3Fq%3Dkotlin%26qs%3Dn%26form%3DQBVR%26%3D%2525eManage%2520Your%2520Search%2520History%2525E%26sp%3D-1%26lq%3D0%26pq%3Dkotlin%26sc%3D10-6%26sk%3D%26cvid%3DD429C427585A4372BEB111C6FAD5942B%26ghsh%3D0%26ghacc%3D0%26ghpl%3D"
                  coords="60,60,179,2"
                  shape="rect"
                />
              </map>
            </AndroidRoadMap>
          }
        ></Route>

        <Route
          path="/IosRoadMap"
          element={
            <AndroidRoadMap>
              <img src="./image/IOS.png" usemap="#image-map" />

              <map name="image-map">
                <area
                  target="_blank"
                  alt="cloud computing"
                  title="cloud computing"
                  href="https://www.youtube.com/watch?v=2LaAJq1lB1Q"
                  coords="689,758,569,815"
                  shape="rect"
                />
              </map>
            </AndroidRoadMap>
          }
        ></Route>

        <Route
          path="/DevopsRoadMap"
          element={
            <DevopsRoadMap>
              <img src="./image/Devops.png" usemap="#image-map" />

              <map name="image-map">
                <area
                  target="_blank"
                  alt="linux course"
                  title="linux course"
                  href="https://www.youtube.com/watch?v=Wgi-OfbP2Gw"
                  coords="577,312,459,371"
                  shape="rect"
                />
              </map>
            </DevopsRoadMap>
          }
        ></Route>

        <Route
          path="/JavaGame"
          element={
            <JavaGame>
              <img src="./image/JavaGame.png" usemap="#image-map" />

              <img src="JavaGame.png" usemap="#image-map" />

              <map name="image-map">
                <area
                  target="_blank"
                  alt="Android Course"
                  title="Android Course"
                  href="https://www.bing.com/videos/search?q=android+course&amp;docid=608013489657824882&amp;mid=0D51DE16DC89DA7BADAF0D51DE16DC89DA7BADAF&amp;view=detail&amp;FORM=VIRE"
                  coords="452,1518,332,1458"
                  shape="rect"
                />
              </map>
            </JavaGame>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
