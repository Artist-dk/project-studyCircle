import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function StudentMain() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      console.log("User not authenticated");
    }
  }, [auth]);

  // function open(e) {
  //   e = e.currentTarget;
  //   var lsb = document.querySelector(".lsidebar");
  //   if (e.classList.value.match("active-icon")) {
  //     e.classList.remove("active-icon");
  //   } else {
  //     e.classList.toggle("active-icon");
  //   }
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8081/account/login", {
        params: { username, password },
      })
      .then((response) => {
        Cookies.set("loggedIn", response.data.id, { expires: 1 });
      })
      .catch((error) => {
        console.error("Invalid Login credentials: ", error);
      });
  };

  /* ================= FIX START ================= */

  const scrollRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // const onMouseDown = (e) => {
  //   isDown.current = true;
  //   scrollRef.current.classList.add("active");
  //   startX.current = e.pageX - scrollRef.current.offsetLeft;
  //   scrollLeft.current = scrollRef.current.scrollLeft;
  // };
const onMouseDown = (e) => {
  isDown.current = true;
  scrollRef.current.classList.add("active");
  

  // ✅ disable smooth during drag
  // scrollRef.current.style.scrollBehavior = "auto";

  // startX.current = e.pageX - scrollRef.current.offsetLeft;
  // scrollLeft.current = scrollRef.current.scrollLeft;
};
  // const onMouseLeave = () => {
  //   isDown.current = false;
  //   scrollRef.current.classList.remove("active");
  // };

  // const onMouseUp = () => {
  //   isDown.current = false;
  //   scrollRef.current.classList.remove("active");
  // };
// const onMouseUp = () => {
//   isDown.current = false;
//   scrollRef.current.classList.remove("active");

//   // ✅ restore smooth scroll
//   scrollRef.current.style.scrollBehavior = "smooth";
// };

// const onMouseLeave = () => {
//   isDown.current = false;
//   scrollRef.current.classList.remove("active");
//   scrollRef.current.style.scrollBehavior = "smooth";
// };

//   const onMouseMove = (e) => {
//     if (!isDown.current) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX.current) * 2;
//     scrollRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const onTouchStart = (e) => {
//     startX.current = e.touches[0].pageX;
//     scrollLeft.current = scrollRef.current.scrollLeft;
//   };

//   const onTouchMove = (e) => {
//     const x = e.touches[0].pageX;
//     const walk = (x - startX.current) * 1.5;
//     scrollRef.current.scrollLeft = scrollLeft.current - walk;
//   };

  /* ================= FIX END ================= */

    const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };
  const title = "MENU";
  return (
    <>
      <div className="A4">
        
        {/* OPEN BUTTON */}
        <button
          className="sc-toggle-nav__open-btn"
          onClick={togglePanel}
        >
          ☰ {title}
        </button>

        {/* OVERLAY */}
        {isOpen && (
          <div
            className="sc-toggle-nav__overlay"
            onClick={togglePanel}
          />          
        )}

        {/* NAV PANEL */}
        <div className={`sc-toggle-nav ${isOpen ? 'sc-toggle-nav--open' : 'sc-toggle-nav--close'}`}>
          <div className="sc-toggle-nav__header">
            <h2>{title}</h2>
            <button
              className="sc-toggle-nav__close-btn"
              onClick={togglePanel}
            >
              ✕
            </button>
          </div>

          <nav className="sc-toggle-nav__body">
            
          {[
            "/",
            "/student/",
            "/student/discussion",
            "/student/assignment",
            "/student/notice",
            "/student/progress",
            "/student/result",
            "/student/todo",
            "logout",
            "Cypress",
            "Playwright",
            "Express",
            "MySQL",
            "Cypress",
            "Playwright",
            "Express",
            "MySQL",
            "Cypress",
            "Playwright",
          ].map((item, index) => (
            <Link className="st-toogle-nav__card" to={`${item}`} onClick={togglePanel} key={index}>
              
                {item === "" ? "PROFILE" : item.toUpperCase()}
              
            </Link>
          ))}
          </nav>
        </div>    
        <div className="header">
          {/* <div className="icon" onClick={open}>
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          
          <div className="title">
            <h1>StudentDashboard</h1>
          </div>
          <div className="lsb-body">
          </div>
        </div>
{/* 
        <div
          ref={scrollRef}
          className="scroll-container"
          // onMouseDown={onMouseDown}
          // onMouseLeave={onMouseLeave}
          // onMouseUp={onMouseUp}
          // onMouseMove={onMouseMove}
          // onTouchStart={onTouchStart}
          // onTouchMove={onTouchMove}
        >
          {[
            "",
            "discussion",
            "assignment",
            "notice",
            "progress",
            "result",
            "todo",
            "logout",
            "Cypress",
            "Playwright",
            "Express",
            "MySQL",
            "Cypress",
            "Playwright",
            "Express",
            "MySQL",
            "Cypress",
            "Playwright",
          ].map((item, index) => (
            <Link to={`/student/${item}`} key={index}>
              <div className="card">
                {item === "" ? "PROFILE" : item.toUpperCase()}
              </div>
            </Link>
          ))}
        </div> */}

        <div className={`${isOpen ? 'hidden' : 'body'}`} >
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

















// import React, { useContext, useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Outlet, Link, useNavigate} from "react-router-dom";


// import { Navigate } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";


// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// // Why replace? -> Prevents user from clicking Back to access protected page.
// // export default ProtectedRoute;

// export default function StudentMain() {
//   const navigate = useNavigate();
//   const { auth } = useContext(AuthContext);
//   // useEffect(() => {
//   //   checkLoginStatus();
//   // });

//   // const checkLoginStatus = () => {
//   //   if (!(Cookies.get('spy'))) {
//   //     // navigate('/account')
//   //     console.log("You are not loged in!")
//   //   }
//   //   console.log("AuthContext.auth: ", auth)
//   // };
//   useEffect(() => {
//     if (!auth) {
//       console.log("User not authenticated");
//       // navigate("/account"); // optional
//     }
//   }, [auth]);

//   function open(e) {
//     e = e.currentTarget;
//     var lsb = document.querySelector(".lsidebar");
//     if (e.classList.value.match("active-icon")) {
//       e.classList.remove("active-icon");
//       lsb.classList.remove("lsidebar-show");
//     } else {
//       e.classList.toggle("active-icon");
//       lsb.classList.toggle("lsidebar-show");
//     }
//   }
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log(username, password);
//     axios
//       .get("http://localhost:8081/account/login", {
//         params: { username, password },
//       })
//       .then((response) => {
//         Cookies.set("loggedIn", response.data.id, { expires: 1 }); // Expires in 1 day
//         console.log(Cookies.get("loggedIn"));
//       })
//       .catch((error) => {
//         console.error("Invalid Login credentials: ", error);
//       });
//   };


//   const scrollRef = useRef(null);

//   let isDown = false;
//   let startX = 0;
//   let scrollLeft = 0;

//   /* -------- Mouse Events -------- */
//   const onMouseDown = (e) => {
//     isDown = true;
//     scrollRef.current.classList.add("active");
//     startX = e.pageX - scrollRef.current.offsetLeft;
//     scrollLeft = scrollRef.current.scrollLeft;
//   };

//   const onMouseLeave = () => {
//     isDown = false;
//     scrollRef.current.classList.remove("active");
//   };

//   const onMouseUp = () => {
//     isDown = false;
//     scrollRef.current.classList.remove("active");
//   };

//   const onMouseMove = (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   /* -------- Touch Events -------- */
//   const onTouchStart = (e) => {
//     startX = e.touches[0].pageX;
//     scrollLeft = scrollRef.current.scrollLeft;
//   };

//   const onTouchMove = (e) => {
//     const x = e.touches[0].pageX;
//     const walk = (x - startX) * 1.5;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };


//   return (
//     <>
//       <div className="dashboard">
//         <div className="lsidebar">
//           <div className="lsb-head">
//             <div className="lsb-title">
//               <div>
//                 {/* <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//                       <circle cx="100" cy="100" r="90" fill="#FF0000"></circle>
//                       <circle cx="100" cy="100" r="70" fill="#FFFFFF"></circle>
//                       <circle cx="100" cy="100" r="60" fill="#ff0000"></circle>
//                       <circle cx="100" cy="100" r="40" fill="#FFFFff"></circle>
//                       <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="32" fill="#000000">
//                         StudyCircle
//                       </text>
//                     </svg> */}
//               </div>
//               <div></div>
//             </div>
//             <div
//               className="icon"
//               onClick={function (e) {
//                 open(e);
//               }}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//           <div className="lsb-body">
//             <div>
//               <h1>StudentDashboard</h1>
//             </div>
//           </div>
//         </div>
//             <div
//       ref={scrollRef}
//       className="scroll-container"
//       onMouseDown={onMouseDown}
//       onMouseLeave={onMouseLeave}
//       onMouseUp={onMouseUp}
//       onMouseMove={onMouseMove}
//       onTouchStart={onTouchStart}
//       onTouchMove={onTouchMove}
//     >
//       {[
//         "",
//         "discussion",
//         "assignment",
//         "notice",
//         "progress",
//         "result",
//         "todo",
//         "logout",
//         "Cypress",
//         "Playwright",
//         "Express",
//         "MySQL",
//         "Cypress",
//         "Playwright",
//         "Express",
//         "MySQL",
//         "Cypress",
//         "Playwright",
//       ].map((item, index) => (
        
//       <Link to={`/student/${item}`} key={index}>
//         <div className="card">
//           {(item == "")?"PROFILE":item.toUpperCase()}
//         </div>
//       </Link>
              
//       ))}
//     </div>
//         <div className="body">
//           <div className="main">
//             <Outlet></Outlet>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




















// 





// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";

// /* ---------------- Protected Route ---------------- */
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };
// /* ------------------------------------------------- */

// export default function StudentMain() {
//   const navigate = useNavigate();
//   const { auth } = useContext(AuthContext);

//   useEffect(() => {
//     if (!auth) {
//       console.log("User not authenticated");
//     }
//   }, [auth]);

//   /* ---------------- Sidebar Toggle ---------------- */
//   function open(e) {
//     const icon = e.currentTarget;
//     const sidebar = document.querySelector(".lsidebar");

//     icon.classList.toggle("active-icon");
//     sidebar.classList.toggle("lsidebar-show");
//   }

//   /* ---------------- Login (optional) ---------------- */
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .get("http://localhost:8081/account/login", {
//         params: { username, password },
//       })
//       .then((response) => {
//         Cookies.set("loggedIn", response.data.id, { expires: 1 });
//       })
//       .catch((error) => {
//         console.error("Invalid Login credentials: ", error);
//       });
//   };

//   /* ---------------- Horizontal Scroll ---------------- */
//   const scroll = (offset) => {
//     document
//       .getElementById("scrollBox")
//       ?.scrollBy({ left: offset, behavior: "smooth" });
//   };

//   /* -------------------------------------------------- */

//   return (
//     <>
//       <div className="dashboard">
//         {/* ---------------- Sidebar ---------------- */}
//         <div className="lsidebar">
//           <div className="lsb-head">
//             <div className="lsb-title"></div>

//             <div className="icon" onClick={open}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>

//           <div className="lsb-body">
//             <Link to="/student"><span>HOME</span></Link>
//             <Link to="/student/discussion"><span>DISCUSS</span></Link>
//             <Link to="/student/assignment"><span>ASSIGNMENTS</span></Link>
//             <Link to="/student/notice"><span>NOTICE</span></Link>
//             <Link to="/student/progress"><span>PROGRESS</span></Link>
//             <Link to="/student/result"><span>RESULT</span></Link>
//             <Link to="/student/todo"><span>TODO</span></Link>
//             <Link to="/logout"><span>LOGOUT</span></Link>
//           </div>
//         </div>

//         {/* ---------------- Horizontal Scroll Section ---------------- */}
//         <div className="scroll-wrapper">
//           <button onClick={() => scroll(-200)}>◀</button>

//           <div className="scroll-container" id="scrollBox">
//             {[
//               "HTML","CSS","JavaScript","React","Node","MongoDB",
//               "HTML","CSS","JavaScript","React","Node","MongoDB",
//             ].map((item, i) => (
//               <div className="card" key={i}>{item}</div>
//             ))}
//           </div>

//           <button onClick={() => scroll(200)}>▶</button>
//         </div>

//         {/* ---------------- Main Content ---------------- */}
//         <div className="body">
//           <div className="main">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


















// function StudentMain111() {
//   const scrollRef = useRef(null);

//   let isDown = false;
//   let startX = 0;
//   let scrollLeft = 0;

//   /* -------- Mouse Events -------- */
//   const onMouseDown = (e) => {
//     isDown = true;
//     scrollRef.current.classList.add("active");
//     startX = e.pageX - scrollRef.current.offsetLeft;
//     scrollLeft = scrollRef.current.scrollLeft;
//   };

//   const onMouseLeave = () => {
//     isDown = false;
//     scrollRef.current.classList.remove("active");
//   };

//   const onMouseUp = () => {
//     isDown = false;
//     scrollRef.current.classList.remove("active");
//   };

//   const onMouseMove = (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   /* -------- Touch Events -------- */
//   const onTouchStart = (e) => {
//     startX = e.touches[0].pageX;
//     scrollLeft = scrollRef.current.scrollLeft;
//   };

//   const onTouchMove = (e) => {
//     const x = e.touches[0].pageX;
//     const walk = (x - startX) * 1.5;
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };

//   return (
    // <div
    //   ref={scrollRef}
    //   className="scroll-container"
    //   onMouseDown={onMouseDown}
    //   onMouseLeave={onMouseLeave}
    //   onMouseUp={onMouseUp}
    //   onMouseMove={onMouseMove}
    //   onTouchStart={onTouchStart}
    //   onTouchMove={onTouchMove}
    // >
    //   {[
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //     "MySQL",
    //     "Cypress",
    //     "Playwright",
    //   ].map((item, index) => (
    //     <div className="card" key={index}>
    //       {item}
    //     </div>
    //   ))}
    // </div>
//   );
// }
